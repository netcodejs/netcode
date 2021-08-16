import { composeVersion, decomposeVersion, Deferred } from "./misc";
import {
    IDataBufferReader,
    IDataBufferWriter,
    ISerable,
    SupportNetDataType,
} from "./data/serializable";
import { DataTypeVoid, ISchema, RpcType } from "./comp-schema";
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

export enum MessageManagerBufferType {
    // The real net package on sending or receiving.
    IN_OR_OUT,
    STATE,
    RPC,
    RPC_CALLBACK,
}

export interface MessageManagerBufferInitializer<T extends SupportNetDataType> {
    newBufferReader(bufferType: MessageManagerBufferType): IDataBufferReader<T>;
    newBufferWriter(bufferType: MessageManagerBufferType): IDataBufferWriter<T>;
}

export class MessageManager<T extends SupportNetDataType> {
    protected _rpcCalls: RpcCall[] = [];
    protected _rpcDeferred: Map<string, MessageRpcCallbackRecord> = new Map();
    protected _uuid = 0;

    readonly inbufferReader: IDataBufferReader<T>;
    readonly statebufferReader: IDataBufferReader<T>;
    readonly rpcbufferReader: IDataBufferReader<T>;
    readonly rpcCallbackBufferReader: IDataBufferReader<T>;

    readonly outbufferWriter: IDataBufferWriter<T>;
    readonly statebufferWriter: IDataBufferWriter<T>;
    readonly rpcbufferWriter: IDataBufferWriter<T>;
    readonly rpcCallbackBufferWriter: IDataBufferWriter<T>;

    constructor(initializer: MessageManagerBufferInitializer<T>) {
        this.inbufferReader = initializer.newBufferReader(
            MessageManagerBufferType.IN_OR_OUT
        );
        this.statebufferReader = initializer.newBufferReader(
            MessageManagerBufferType.STATE
        );
        this.rpcbufferReader = initializer.newBufferReader(
            MessageManagerBufferType.RPC
        );
        this.rpcCallbackBufferReader = initializer.newBufferReader(
            MessageManagerBufferType.RPC_CALLBACK
        );

        this.outbufferWriter = initializer.newBufferWriter(
            MessageManagerBufferType.IN_OR_OUT
        );
        this.statebufferWriter = initializer.newBufferWriter(
            MessageManagerBufferType.STATE
        );
        this.rpcbufferWriter = initializer.newBufferWriter(
            MessageManagerBufferType.RPC
        );
        this.rpcCallbackBufferWriter = initializer.newBufferWriter(
            MessageManagerBufferType.RPC_CALLBACK
        );
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
        this.statebufferWriter.reset();
    }

    sendEntity(
        entityId: number,
        entityVersion: number,
        compsLen: number,
        toDestroy: boolean
    ) {
        const buf = this.statebufferWriter;
        // entity id
        buf.writeInt(entityId);
        // entity compuse version
        buf.writeInt(composeVersion(entityVersion, toDestroy));
        // component count
        buf.writeInt(compsLen);
    }

    sendComp(compIdx: number, comp: ISerable & IComp & ISchema): boolean {
        const buf = this.statebufferWriter;
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
        this.statebufferWriter.reset();
    }

    startRecvEntityAndComps() {}

    recvEntity(): MessageEntityInfo | null {
        const buf = this.statebufferReader;
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
        const buf = this.statebufferReader;

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
        const buf = this.statebufferReader;
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
        const buf = this.rpcbufferWriter;
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
        this.rpcbufferWriter.reset();
        this._uuid = 0;
    }

    startRecvRpc() {}

    recvRpc(): MessageRpcInfo | null {
        if (!this.rpcbufferReader.hasNext()) return null;
        const buf = this.rpcbufferReader;
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
        const buf = this.rpcCallbackBufferWriter;
        buf.writeInt(info.entityId);
        buf.writeUshort(info.compIdx);
        buf.writeLong(info.methodHash);
        buf.writeUint(info.uuid);
    }

    endSendRpcCallback() {
        this.rpcCallbackBufferWriter.reset();
    }

    startRecvRpcCallback() {}

    recvRpcCallback(): MessageRpcCallbackInfo | null {
        if (!this.rpcCallbackBufferReader.hasNext()) return null;
        const buf = this.rpcCallbackBufferReader;
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
