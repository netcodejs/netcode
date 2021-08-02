import { composeVersion, decomposeVersion, Deferred } from "./misc";
import { IDataBuffer, ISerable, SupportNetDataType } from "./data/serializable";
import { DataTypeVoid, ISchema } from "./comp-schema";
import { RPC_MAX_UUID } from "./macro";
import { IComp } from "./comp-interface";

export enum MessageType {
    UPDATE_COMPONENT,
    RPC,
}

export interface RpcCall {
    methodName: number;
    component: any;
    args: any[];
}

export interface MessageEntityInfo {
    entityId: number;
    entityVersion: number;
    destoryed: boolean;
    compCount: number;
}

export interface MessageRpcInfo {
    entityId: number;
    compIdx: number;
    methodHash: number;
    timestamp: number;
    uuid: number;
}

export interface MessageRpcCallbackInfo {
    entityId: number;
    compIdx: number;
    methodHash: number;
    uuid: number;
}

export interface MessageRpcCallbackRecord {
    deferred: Deferred;
    timestamp: number;
}
export class RpcCallbackUuidOutOfRange extends Error {}

export class MessageManager<T extends SupportNetDataType> {
    protected _rpcCalls: RpcCall[] = [];
    protected _rpcDeferred: Map<string, MessageRpcCallbackRecord> = new Map();
    protected _uuid = 0;

    readonly inoutbuffer: IDataBuffer<T>;
    readonly statebuffer: IDataBuffer<T>;
    readonly rpcbuffer: IDataBuffer<T>;
    readonly rpcCallbackBuffer: IDataBuffer<T>;

    constructor(BufferCtr: new () => IDataBuffer<T>) {
        this.inoutbuffer = new BufferCtr();
        this.statebuffer = new BufferCtr();
        this.rpcbuffer = new BufferCtr();
        this.rpcCallbackBuffer = new BufferCtr();
    }

    private _getUuid() {
        if (this._uuid >= RPC_MAX_UUID) {
            console.warn(
                "[MessageManager#_getUuid]UUID is great than " + RPC_MAX_UUID
            );
            return 0;
        }
        return ++this._uuid;
    }

    startSendEntityAndComps() {
        this.statebuffer.reset();
    }

    sendEntity(
        entityId: number,
        entityVersion: number,
        compsLen: number,
        toDestroy: boolean
    ) {
        const buf = this.statebuffer;
        // entity id
        buf.writeInt(entityId);
        // entity compuse version
        buf.writeInt(composeVersion(entityVersion, toDestroy));
        // component count
        buf.writeInt(compsLen);
    }

    sendComp(compIdx: number, comp: ISerable & IComp & ISchema): boolean {
        const buf = this.statebuffer;
        // msg type -> compoent

        // comp index
        buf.writeInt(compIdx);
        // comp hash
        buf.writeLong(comp.__schema__.hash);
        // ser comp
        comp.ser(buf);

        return true;
    }

    endSendEntityAndComps() {
        this.statebuffer.reset();
    }

    startRecvEntityAndComps() {}

    recvEntity(): MessageEntityInfo | null {
        const buf = this.statebuffer;
        if (!buf.hasNext()) return null;
        // entity id
        const entityId = buf.readInt();
        // entity compuse version
        const [entityVersion, toDestory] = decomposeVersion(buf.readInt());
        // component length
        const compCount = buf.readInt();
        return {
            entityId,
            entityVersion,
            destoryed: toDestory,
            compCount,
        };
    }

    recvCompHeader() {
        const buf = this.statebuffer;

        // comp index
        const compIdx = buf.readInt();
        // comp hash
        const hash = buf.readLong();
        // deser comp
        return {
            compIdx,
            hash,
        };
    }

    recvCompBody(comp: ISerable & IComp) {
        const buf = this.statebuffer;
        comp.deser(buf);
    }

    endRecvEntityAndComps() {}

    // callRpc(methodName: number, component: any, ...args: any) {
    //     this._rpcCalls.push({ methodName, component, args });
    // }

    startSendRpc() {
        // this.rpcbuffer.reset();
    }

    sendRpc(
        methodName: string,
        component: IComp & ISchema & Record<string, Function>,
        params: any[],
        timestamp: number
    ) {
        const uuid = this._getUuid();
        if (uuid < 0) {
            return Promise.reject(new RpcCallbackUuidOutOfRange());
        }

        const comp = component;
        const entity = comp.entity;
        const compIdx = entity.indexOf(component);
        const buf = this.rpcbuffer;
        // schema
        const s = comp.__schema__;
        // method schema
        const ms = s.methods[methodName];
        // entity id
        buf.writeInt(entity.id);
        // comp index
        buf.writeUshort(compIdx);
        // method hash
        buf.writeLong(ms.hash);
        // timestamp
        buf.writeLong(timestamp);
        // uuid
        buf.writeUint(uuid);
        // param
        component["ser" + ms.hash](buf, params);
        if (ms.returnType == DataTypeVoid) {
            return;
        } else {
            const deferred = new Deferred();
            this._rpcDeferred.set(
                `${entity.id}|${compIdx}|${ms.hash}|${uuid}`,
                {
                    deferred,
                    timestamp,
                }
            );
            return deferred.promise;
        }
    }

    endSendRpc() {
        this.rpcbuffer.reset();
        this._uuid = 0;
    }

    startRecvRpc() {}

    recvRpc(): MessageRpcInfo | null {
        if (!this.rpcbuffer.hasNext()) return null;
        const buf = this.rpcbuffer;
        // entity id
        const entityId = buf.readInt();
        // comp index
        const compIdx = buf.readUshort();
        // method hash
        const methodHash = buf.readLong();
        // timestamp
        const timestamp = buf.readLong();
        // uuid
        const uuid = buf.readUint();
        return { entityId, compIdx, methodHash, timestamp, uuid };
    }

    endRecvRpc() {}

    startSendRpcCallback() {}

    sendRpcCallback(info: MessageRpcInfo) {
        const buf = this.rpcCallbackBuffer;
        buf.writeInt(info.entityId);
        buf.writeUshort(info.compIdx);
        buf.writeLong(info.methodHash);
        buf.writeUint(info.uuid);
    }

    endSendRpcCallback() {
        this.rpcCallbackBuffer.reset();
    }

    startRecvRpcCallback() {}

    recvRpcCallback(): MessageRpcCallbackInfo | null {
        if (!this.rpcCallbackBuffer.hasNext()) return null;
        const buf = this.rpcCallbackBuffer;
        const entityId = buf.readInt();
        const compIdx = buf.readUshort();
        const methodHash = buf.readLong();
        const uuid = buf.readUint();
        return { entityId, compIdx, methodHash, uuid };
    }

    endRecvRpcCallback() {}

    getRpcCallbackRecord(param: MessageRpcCallbackInfo) {
        return this._rpcDeferred.get(
            `${param.entityId}|${param.compIdx}|${param.methodHash}|${param.uuid}`
        );
    }
}
