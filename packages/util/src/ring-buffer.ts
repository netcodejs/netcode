export class RingBuffer<T> {
    protected _container: (T | null)[];
    protected _start = 0;
    protected _end = 0;
    protected get _capacityPlusOne() {
        return this.capacity + 1;
    }
    constructor(readonly capacity: number) {
        this._container = new Array(this._capacityPlusOne);
    }

    get length() {
        return (
            (this._end - this._start + this._capacityPlusOne) %
            this._capacityPlusOne
        );
    }

    get isEmpty() {
        return this._start == this._end;
    }

    get isFull() {
        return (this._end + 1) % this._capacityPlusOne == this._start;
    }

    get head(): T | null {
        return this._container[this._start] ?? null;
    }

    get tail(): T | null {
        if (this.isEmpty) return null;
        return (
            this._container[
                (this._end - 1 + this._capacityPlusOne) % this._capacityPlusOne
            ] ?? null
        );
    }

    get container(): readonly (T | null)[] {
        return this._container;
    }

    get(idx: number) {
        const rIdx = this._getRealIndex(idx);
        if (rIdx == -1) {
            return null;
        }
        return this._container[rIdx] ?? null;
    }

    set(idx: number, value: T) {
        const rIdx = this._getRealIndex(idx);
        this._container[rIdx] = value;
    }

    /**
     * Append a data into the tail of buffer.
     * @param {T} data
     * @returns {number} The index of data stored in the ring buffer. It will return -1 while the buffer is full.
     */
    push(data: T): number {
        if (this.isFull) return -1;
        const idx = this._end++;
        this._end %= this._capacityPlusOne;
        this._container[idx] = data;
        return this._end - this._start + 1;
    }

    pop(): T | null {
        if (this.isEmpty) return null;
        this._end--;
        this._end += this._capacityPlusOne;
        this._end %= this._capacityPlusOne;
        return this._container[this._end] ?? null;
    }

    unshift(data: T) {
        if (this.isEmpty) return null;
        this._start--;
        this._start += this._capacityPlusOne;
        this._start %= this._capacityPlusOne;
        const idx = this._start;
        this._container[idx] = data;
        return this._end - this._start + 1;
    }

    shift(): T | null {
        if (this.isEmpty) return null;
        const idx = this._start++;
        this._start %= this._capacityPlusOne;
        return this._container[idx] ?? null;
    }

    protected _getRealIndex(idx: number) {
        if (idx < 0 || idx >= this.capacity) {
            return -1;
        }
        const rIdx = (this._start + idx) % this._capacityPlusOne;
        return rIdx;
    }
}
