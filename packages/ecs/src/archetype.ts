import { ComponentConstructor } from "./component";
import { setBit } from "./util";

export class Archetype {
    static readonly INITIAL_OPCAITY = 100;
    private _buffer: ArrayBuffer;
    private _view: DataView;
    get view() {
        return this._view;
    }
    private _entitySet: SparseSet;
    private _length = 0;
    private _opacity: number;
    get opacity() {
        return this._opacity;
    }

    readonly byteLength: number;
    readonly mask: number;
    constructor(ctrs: ComponentConstructor[]) {
        let mask = 0;
        let byteLength = 0;
        for (let ctr of ctrs) {
            mask = setBit(mask, ctr.typeId);
            byteLength += ctr.byteLength;
        }

        this.mask = mask;
        this.byteLength = byteLength;

        this._opacity = Archetype.INITIAL_OPCAITY;
        this._buffer = new ArrayBuffer(Archetype.INITIAL_OPCAITY * byteLength);
        this._view = new DataView(this._buffer);
        this._entitySet = new SparseSet();
    }

    addEntity(index: number) {
        if (this._length >= this._opacity) {
            this.resize();
        }

        this._entitySet.add(index);
    }

    removeEntity(index: number) {
        return this._entitySet.remove(index);
    }

    getChunkId(index: number) {
        if (!this._entitySet.has(index)) return -1;
        return this._entitySet.sparse[index];
    }

    getChunkEntityId(): readonly number[] {
        return this._entitySet.packed;
    }

    resize(length: number = this._getNewSize()) {
        const newBuffer = new ArrayBuffer(length);
        new Uint8Array(newBuffer).set(new Uint8Array(this._buffer));

        this._buffer = newBuffer;
        this._opacity = length;
        this._view = new DataView(this._buffer);
    }

    protected _getNewSize() {
        const size = Math.ceil(this._opacity * 1.5);
        return size - (size % 2);
    }
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
        if (!this.has(x)) {
            this.sparse[x] = this.packed.length;
            this.packed.push(x);
        }
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
