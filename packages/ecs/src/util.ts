export function setBit(source: number, index: number) {
    return source | (1 << index);
}

export function resetBit(source: number, index: number) {
    return source & ~(1 << index);
}

export function testBit(source: number, index: number) {
    return (source & (1 << index)) != 0;
}

export function toggleBit(source: number, index: number) {
    return source ^ (1 << index);
}

export class SparseSet {
    packed: number[] = [];
    sparse: number[] = [];

    has(x: number) {
        return (
            this.sparse[x] < this.packed.length &&
            this.packed[this.sparse[x]] === x
        );
    }

    add(x: number) {
        if (this.has(x)) {
            return this.sparse[x];
        }
        this.sparse[x] = this.packed.length;
        this.packed.push(x);
        return this.sparse[x];
    }

    remove(x: number) {
        if (this.has(x)) {
            const last = this.packed.pop()!;
            if (x !== last) {
                this.sparse[last] = this.sparse[x];
                this.packed[this.sparse[x]] = last;
            }
        }
    }
}

export const ALIGNMENT_BYTES = 8;
