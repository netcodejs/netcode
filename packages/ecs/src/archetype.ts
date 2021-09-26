import { Component, ComponentConstructor } from "./component";
import { setBit } from "./util";

export class Archetype {
    static readonly INITIAL_OPCAITY = 100;
    private _entitySet: SparseSet;
    private _opacity: number;
    private _length: number;
    private _buffer: ArrayBuffer;
    readonly view: DataView;
    get opacity() {
        return this._opacity;
    }
    get entities(): ReadonlyArray<number> {
        return this._entitySet.packed;
    }

    readonly byteLength: number;
    readonly mask: number;
    readonly compOffsetRecord: Record<number, number> = {};
    readonly compOffsetArr: number[];
    readonly compTemp: Component[];
    constructor(readonly ctrs: ComponentConstructor[]) {
        let mask = 0;
        let byteLength = 0;
        this.compTemp = new Array(ctrs.length);
        this.compOffsetArr = new Array(ctrs.length);
        for (let i = 0, j = ctrs.length; i < j; i++) {
            const ctr = ctrs[i];
            mask = setBit(mask, ctr.typeId);
            this.compOffsetRecord[ctr.typeId] = byteLength;
            this.compOffsetArr[i] = byteLength;
            this.compTemp[i] = ctr.TEMP;
            byteLength += ctr.byteLength;
        }

        this.mask = mask;
        this.byteLength = byteLength;

        this._opacity = Archetype.INITIAL_OPCAITY;
        this._length = 0;
        this._buffer = new ArrayBuffer(
            this.byteLength * Archetype.INITIAL_OPCAITY
        );
        this.view = new DataView(this._buffer);

        this._entitySet = new SparseSet();
    }

    addEntity(index: number) {
        if (this._length >= this._opacity) {
            this.resize();
        }

        return this._entitySet.add(index);
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
        (this.view as DataView) = new DataView(this._buffer);
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
