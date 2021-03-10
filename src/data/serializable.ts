export type SupportNetDataType = string | ArrayBuffer;
export interface ISerable<T extends SupportNetDataType = any> {
    ser(buffer: IDatabufferWriter<T>): void;
    deser(buffer: IDataBufferReader<T>): void;
}

export interface IDataBufferReader<T extends SupportNetDataType = any> {
    readInt(): number;
    readUint(): number;
    readLong(): number;
    readUlong(): number;
    readShort(): number;
    readUshort(): number;
    readFloat(): number;
    readDouble(): number;
    readBoolean(): boolean;

    set(source: T): void;
    hasNext(): boolean;
}

export interface IDatabufferWriter<T extends SupportNetDataType = any> {
    writeInt(source: number): IDatabufferWriter<T>;
    writeUint(source: number): IDatabufferWriter<T>;
    writeLong(source: number): IDatabufferWriter<T>;
    writeUlong(source: number): IDatabufferWriter<T>;
    writeShort(source: number): IDatabufferWriter<T>;
    writeUshort(source: number): IDatabufferWriter<T>;
    writeFloat(source: number): IDatabufferWriter<T>;
    writeDouble(source: number): IDatabufferWriter<T>;
    writeBoolean(source: boolean): IDatabufferWriter<T>;
    get(): T;
    reset(): void;
}

export interface IDataBuffer<T extends SupportNetDataType>
    extends IDataBufferReader<T>,
        IDatabufferWriter<T> {}
