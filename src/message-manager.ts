import { composeVersion, decomposeVersion } from "./misc";
import { IDataBuffer, ISerable, SupportNetDataType } from "./data/serializable";
import { Entity, IComp } from "./base";
import { ISchema } from "./component-variable";

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
    toDestory: boolean;
    compCount: number;
}

export interface MessageRpcInfo {
    entityId: number;
    compIdx: number;
    methodHash: number;
}

export class MessageManager<T extends SupportNetDataType> {
    protected _rpcCalls: RpcCall[] = [];
    constructor(
        readonly inoutbuffer: IDataBuffer<T>,
        readonly statebuffer: IDataBuffer<T>,
        readonly rpcbuffer: IDataBuffer<T>
    ) {}

    startSendEntityAndComps() {
        this.statebuffer.reset();
    }

    sendEntity(entity: Entity, toDestroy: boolean) {
        const buf = this.statebuffer;
        // entity id
        buf.writeInt(entity.id);
        // entity compuse version
        buf.writeInt(composeVersion(entity.version, toDestroy));
        // component count
        buf.writeInt(entity.comps.length);
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
            toDestory,
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
        params: any[]
    ) {
        const comp = component;
        const entity = comp.entity;
        const buf = this.rpcbuffer;
        // schema
        const s = comp.__schema__;
        // method schema
        const ms = s.methods[methodName];
        // entity id
        buf.writeInt(entity.id);
        // comp index
        buf.writeUshort(entity.indexOf(component));
        // method hash
        buf.writeLong(ms.hash);
        // param
        component["ser" + ms.hash](buf, params);
    }

    endSendRpc() {
        this.rpcbuffer.reset();
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
        return { entityId, compIdx, methodHash };
    }
    endRecvRpc() {}
}
