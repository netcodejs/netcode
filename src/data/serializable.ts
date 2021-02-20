export interface ISerializable<T extends String | ArrayBuffer> {}
export interface Serializable<T extends String | ArrayBuffer>
    extends ISerializable<T> {
    ser(buffer: DataBuffer<T>): void;
    deser(buffer: DataBuffer<T>): void;
}

export interface DataBuffer<T extends String | ArrayBuffer> {}
