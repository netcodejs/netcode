import { composeVersion, decomposeVersion } from "./misc";
import { IDataBuffer, ISerable, SupportNetDataType } from "./data/serializable";
import { IComponent, SchemaClass } from "./component-variable";
import { Schema } from "./component-schema";
import { Entity } from "./entity";

export enum MessageType {
    UPDATE_COMPONENT,
    RPC,
}

export class MessageManager<T extends SupportNetDataType> {
    constructor(
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
        comp: ISerable & SchemaClass<any>,
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
        return this.statebuffer.get();
    }

    startRecv(source: T) {
        this.statebuffer.set(source);
    }

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

    endRecv() {}

    sendRpc(methodName: number, component: any, params: any[]) {
        const comp = component as IComponent;
        const buf = this.rpcbuffer;
        // schema
        const s = comp.__schema__;
        // entity
        const entity = comp.entity;
        // method schema
        const ms = s.methods[methodName];
        // entity id
        buf.writeInt(entity.id);
        // comp index
        buf.writeUshort(comp.index);
        // method hash
        buf.writeInt(ms.hash);
    }

    recvRpc() {}
}
