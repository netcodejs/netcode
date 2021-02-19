export interface Serializable<T extends String | ArrayBuffer> {
    ser(buffer: DataBuffer<T>): void;
    deser(buffer: DataBuffer<T>): void;
}

export interface DataBuffer<T extends String | ArrayBuffer> {

}