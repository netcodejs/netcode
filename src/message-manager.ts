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

export class MessageManager<T extends SupportNetDataType> {
    protected _rpcCalls: RpcCall[] = [];
    constructor(
        readonly inoutbuffer: IDataBuffer<T>,
        readonly statebuffer: IDataBuffer<T>,
        readonly rpcbuffer: IDataBuffer<T>
    ) {}

    startSendComp() {
        this.statebuffer.reset();
    }

    sendComp(
        entityId: number,
        entityVersion: number,
        compIdx: number,
        comp: ISerable & IComp & ISchema,
        toDestory = false
    ): boolean {
        const buf = this.statebuffer;
        // msg type -> compoent

        // entity id
        buf.writeInt(entityId);
        // entity compuse version
        buf.writeInt(composeVersion(entityVersion, toDestory));
        // comp index
        buf.writeInt(compIdx);
        // comp hash
        buf.writeLong(comp.__schema__.hash);
        // ser comp
        comp.ser(buf);

        return true;
    }

    endSendComp() {
        this.statebuffer.reset();
    }

    startRecvComp() {}

    revcComp() {
        if (!this.statebuffer.hasNext()) return null;
        const buf = this.statebuffer;
        // entity id
        const entityId = buf.readInt();
        // entity compuse version
        const [entityVersion, toDestory] = decomposeVersion(buf.readInt());
        // comp index
        const compIdx = buf.readInt();
        // comp hash
        const hash = buf.readLong();
        // deser comp
        return {
            entityId,
            entityVersion,
            toDestory,
            compIdx,
            hash,
        };
    }

    endRecvComp() {}

    // callRpc(methodName: number, component: any, ...args: any) {
    //     this._rpcCalls.push({ methodName, component, args });
    // }

    startSendRpc() {
        // this.rpcbuffer.reset();
    }

    sendRpc(
        methodName: string,
        entity: Entity,
        component: IComp & ISchema & Record<string, Function>,
        params: any[]
    ) {
        const comp = component;
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

    recvRpc() {
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
