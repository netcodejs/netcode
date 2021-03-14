import { Entity } from "./entity";
import { asSerable, composeVersion, decomposeVersion } from "./misc";
import { IDataBuffer, ISerable, SupportNetDataType } from "./data/serializable";
import { StringDataBuffer } from "./data/string-databuffer";
import { Schema, SchemaClass } from "./component";

export enum MessageType {
    UPDATE_COMPONENT,
    RPC,
}

export class MessageManager<T extends SupportNetDataType> {
    constructor(readonly dataBuffer: IDataBuffer<T>) {}

    startSend() {
        this.dataBuffer.reset();
    }

    sendComp(
        entityId: number,
        entityVersion: number,
        compIdx: number,
        comp: ISerable & SchemaClass<any>,
        toDestory = false
    ): boolean {
        const buf = this.dataBuffer;
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

    endSend() {
        return this.dataBuffer.get();
    }

    startRecv(source: T) {
        this.dataBuffer.set(source);
    }

    revcComp() {
        if (!this.dataBuffer.hasNext()) return null;
        const buf = this.dataBuffer;
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
}
