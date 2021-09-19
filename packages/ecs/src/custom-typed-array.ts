export interface CustomTypedArray<T> {
    get(index: number): T;
    set(index: number, value: T): void;
}

export class BitArray implements CustomTypedArray<boolean> {
    private _arr: Uint8Array;

    constructor(readonly length: number) {
        this._arr = new Uint8Array(Math.ceil(length / 8));
    }

    get(index: number): boolean {
        const arrIdx = (index / 8) >> 0;
        const bitIdx = index % 8;
        return (this._arr[arrIdx] & (1 << bitIdx)) != 0;
    }

    set(index: number, value: boolean) {
        const arrIdx = (index / 8) >> 0;
        const bitIdx = index % 8;
        const src = this._arr[arrIdx];
        const mask = ~((Number(value) - 1) >> 31);
        this._arr[arrIdx] =
            (mask & (src | (1 << bitIdx))) | (mask & (src & ~(1 << bitIdx)));
    }
}
