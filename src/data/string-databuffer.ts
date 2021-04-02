import { IDataBuffer, IDatabufferWriter } from "./serializable";

const tempTypedBuffer = {
    int: new Int32Array(1),
    uint: new Uint32Array(1),
    short: new Int16Array(1),
    ushort: new Uint16Array(1),
    long: new Int32Array(1),
    ulong: new Uint32Array(1),
    float: new Float32Array(1),
    double: new Float64Array(1),
};

export class StringDataBufferOutOfRange extends Error {}

export class StringDataBuffer implements IDataBuffer<string> {
    public writeBuffer: any[] = [];
    public writerCursor = 0;
    public readBuffer: any[] = [];
    public readerCursor = 0;
    public readerStart = 0;
    public readerEnd = 0;

    protected check(increment = 0) {
        if (
            this.writerCursor + increment >= this.readBuffer.length &&
            this.writerCursor + increment >= this.readerEnd
        ) {
            throw new StringDataBufferOutOfRange(
                `Cursor: (${this.writerCursor}), buffer's length: (${this.writeBuffer.length})`
            );
        }
    }
    reset(): void {
        this.writerCursor = 0;
        this.readerCursor = 0;
        this.readBuffer.length = 0;
        this.writeBuffer.length = 0;
    }
    readInt(): number {
        this.check();
        const temp = tempTypedBuffer.int;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readUint(): number {
        this.check();
        const temp = tempTypedBuffer.uint;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readShort(): number {
        this.check();
        const temp = tempTypedBuffer.short;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readUshort(): number {
        this.check();
        const temp = tempTypedBuffer.ushort;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readLong(): number {
        this.check();
        const temp = tempTypedBuffer.long;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readUlong(): number {
        this.check();
        const temp = tempTypedBuffer.ulong;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readFloat(): number {
        this.check();
        const temp = tempTypedBuffer.float;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readDouble(): number {
        this.check();
        const temp = tempTypedBuffer.double;
        temp[0] = this.readBuffer[this.readerCursor++];
        return temp[0];
    }
    readBoolean(): boolean {
        this.check();
        return Boolean(this.readBuffer[this.readerCursor++]);
    }
    set(source: string, start = 0, end = -1): void {
        this.writerCursor = 0;
        const dst = JSON.parse(source);

        let dstChecked = Array.isArray(dst) ? dst : [];
        if (end < 0) {
            end += dstChecked.length;
        }
        this.readerStart = this.readerCursor = start;
        this.readerEnd = end;
        this.readBuffer = dstChecked;
    }

    writeInt(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.int;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeUint(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.uint;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeShort(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.short;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeUshort(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.ushort;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeLong(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.long;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeUlong(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.ulong;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeFloat(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.float;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeDouble(source: number): IDatabufferWriter<string> {
        const temp = tempTypedBuffer.double;
        temp[0] = source;
        this.writeBuffer[this.writerCursor++] = source;
        return this;
    }
    writeBoolean(source: boolean): IDatabufferWriter<string> {
        this.writeBuffer[this.writerCursor++] = source ? 1 : 0;
        return this;
    }

    get(): string {
        this.writeBuffer.length = this.writerCursor;
        return JSON.stringify(this.writeBuffer);
    }

    hasNext(): boolean {
        return (
            this.readerCursor < this.readBuffer.length &&
            this.writerCursor < this.readerEnd
        );
    }

    append(other: IDatabufferWriter<string>): IDatabufferWriter<string> {
        this.writeBuffer.push.apply(this.writeBuffer, other.writeBuffer);
        this.writerCursor += other.writerCursor;
        return this;
    }
}
