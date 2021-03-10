import { IDataBuffer, IDatabufferWriter } from "./serializable";

const tempTypedBuffer = {
    int: new Int16Array(1),
    uint: new Uint16Array(1),
    short: new Int8Array(1),
    ushort: new Uint8Array(1),
    long: new Int32Array(1),
    ulong: new Uint32Array(1),
    float: new Float32Array(1),
    double: new Float64Array(1),
};

export class StringDataBufferOutOfRange extends Error {}

export class StringDataBuffer implements IDataBuffer<string> {
    writeBuffer: any[] = [];
    readBuffer: any[] = [];
    cursor = 0;

    protected check(increment = 0) {
        if (this.cursor + increment >= this.readBuffer.length) {
            throw new StringDataBufferOutOfRange(
                `Cursor: (${this.cursor}), buffer's length: (${this.writeBuffer.length})`
            );
        }
    }
    reset(): void {
        this.cursor = 0;
    }
    readInt(): number {
        this.check();
        const temp = tempTypedBuffer.int;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readUint(): number {
        this.check();
        const temp = tempTypedBuffer.uint;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readShort(): number {
        this.check();
        const temp = tempTypedBuffer.short;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readUshort(): number {
        this.check();
        const temp = tempTypedBuffer.ushort;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readLong(): number {
        this.check();
        const temp = tempTypedBuffer.long;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readUlong(): number {
        this.check();
        const temp = tempTypedBuffer.ulong;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readFloat(): number {
        this.check();
        const temp = tempTypedBuffer.float;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readDouble(): number {
        this.check();
        const temp = tempTypedBuffer.double;
        temp[0] = this.readBuffer[this.cursor++];
        return temp[0];
    }
    readBoolean(): boolean {
        this.check();
        return Boolean(this.readBuffer[this.cursor++]);
    }

    set(source: string): void {
        this.cursor = 0;
        const dst = JSON.parse(source);
        this.readBuffer = Array.isArray(dst) ? dst : [];
    }
    writeInt(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.int;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeUint(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.uint;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeShort(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.short;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeUshort(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.ushort;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeLong(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.long;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeUlong(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.ulong;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeFloat(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.float;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeDouble(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.double;
        temp[0] = source;
        this.writeBuffer[this.cursor++] = source;
        return this;
    }
    writeBoolean(source: boolean): IDatabufferWriter<string> {
        this.writeBuffer[this.cursor++] = source ? 1 : 0;
        return this;
    }

    get(): string {
        this.writeBuffer.length = this.cursor;
        return JSON.stringify(this.writeBuffer);
    }

    hasNext(): boolean {
        return this.cursor < this.readBuffer.length;
    }
}
