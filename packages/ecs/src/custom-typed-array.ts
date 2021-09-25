export interface CustomTypedArray<T> {
    get(index: number): T;
    set(index: number, value: T): void;
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

    get(index: number): boolean {
        const arrIdx = (index / BitArray.BYTE_LENGTH_PRE_ELEMENT) >> 0;
        const bitIdx = index % BitArray.BYTE_LENGTH_PRE_ELEMENT;
        return (this._arr[arrIdx] & (1 << bitIdx)) != 0;
    }

    set(index: number, value: boolean) {
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

    or(other: BitArray) {
        const aLen = this.length;
        const bLen = other.length;
        const len = Math.min(aLen, bLen);

        const aArr = this._arr;
        const bArr = other._arr;

        for (let i = 0; i < len; i++) {
            aArr;
        }
    }
}
