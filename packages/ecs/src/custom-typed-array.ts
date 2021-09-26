export interface CustomTypedArray<T> {
    getData(index: number): T;
    setData(index: number, value: T): void;
    length: number;
}

export class BitArray implements CustomTypedArray<boolean> {
    static readonly BYTE_LENGTH_PRE_ELEMENT = 32;
    private _arr: Uint32Array;
    private _fixedLength: number;

    constructor(readonly length: number) {
        this._fixedLength = length / BitArray.BYTE_LENGTH_PRE_ELEMENT;
        this._arr = new Uint32Array(Math.ceil(this._fixedLength));
    }

    getData(index: number): boolean {
        const arrIdx = (index / BitArray.BYTE_LENGTH_PRE_ELEMENT) >> 0;
        const bitIdx = index % BitArray.BYTE_LENGTH_PRE_ELEMENT;
        return (this._arr[arrIdx] & (1 << bitIdx)) != 0;
    }

    setData(index: number, value: boolean) {
        const arrIdx = (index / BitArray.BYTE_LENGTH_PRE_ELEMENT) >> 0;
        const bitIdx = index % BitArray.BYTE_LENGTH_PRE_ELEMENT;
        const src = this._arr[arrIdx];
        const mask = ~((Number(value) - 1) >> 31);
        this._arr[arrIdx] =
            (mask & (src | (1 << bitIdx))) | (mask & (src & ~(1 << bitIdx)));
    }

    clone() {
        const cloned = new BitArray(this.length);
        cloned._arr.set(this._arr);
        return cloned;
    }

    set(other: this) {
        other._arr.set(this._arr);
    }
}

export class NativeArray<T> extends Array<T> {
    set(other: this) {
        other.push(...this);
    }
}
