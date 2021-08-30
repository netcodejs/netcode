declare type SupportNetDataType = string | ArrayBuffer;
declare interface ISerable<T extends SupportNetDataType = any> {
    ser(buffer: IDataBufferWriter<T>): void;
    deser(buffer: IDataBufferReader<T>): void;
}

declare interface IDataBufferReader<T extends SupportNetDataType = any> {
    readInt(): number;
    readUint(): number;
    readLong(): number;
    readUlong(): number;
    readShort(): number;
    readUshort(): number;
    readFloat(): number;
    readDouble(): number;
    readBoolean(): boolean;
    readByte(): number;
    readUbyte(): number;

    set(source: T, start?: number, end?: number): void;
    hasNext(): boolean;

    readonly readerCursor: number;
    readonly readBuffer: any;

    readonly readerStart: number;
    readonly readerEnd: number;
}

declare interface IDataBufferWriter<T extends SupportNetDataType = any> {
    writeInt(source: number): this;
    writeUint(source: number): this;
    writeLong(source: number): this;
    writeUlong(source: number): this;
    writeShort(source: number): this;
    writeUshort(source: number): this;
    writeFloat(source: number): this;
    writeDouble(source: number): this;
    writeBoolean(source: boolean): this;
    writeByte(source: number): this;
    writeUbyte(source: number): this;

    flush(): T;
    reset(): void;

    append(other: this): this;

    readonly writerCursor: number;
    readonly writeBuffer: any;
}
