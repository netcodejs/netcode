import { Chunk, ChunkConstructor } from "./chunk";
import {
    IAllOfMatcher,
    IAnyOfMatcher,
    IMatcher,
    INoneOfMatcher,
} from "./query";
import { InstanceTypeTuple, setBit } from "./util";

export class Archetype {
    _entitySet: SparseSet;
    private _opacity: number;
    private _length: number;
    private _queryCache = new Map<IMatcher, Chunk[]>();

    readonly view: DataView;

    readonly chunkTypeIdSet: SparseSet;
    readonly chunks: Chunk[];

    get opacity() {
        return this._opacity;
    }
    get entities(): ReadonlyArray<number> {
        return this._entitySet.packed;
    }

    readonly byteLength: number;
    readonly mask: number;
    constructor(readonly ctrs: ChunkConstructor[], opcaity = 100) {
        let mask = 0;
        let byteLength = 0;

        this.chunkTypeIdSet = new SparseSet();
        this.chunks = new Array(ctrs.length);
        for (let i = 0, j = ctrs.length; i < j; i++) {
            const ctr = ctrs[i];
            mask = setBit(mask, ctr.typeId);
            byteLength += ctr.byteLength;

            const idx = this.chunkTypeIdSet.add(ctr.typeId);
            this.chunks[idx] = new ctr(opcaity);
        }

        this.mask = mask;
        this.byteLength = byteLength;

        this._opacity = opcaity;
        this._length = 0;
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

    getChunk<T extends ChunkConstructor>(ctr: T): InstanceType<T> {
        const idx = this.chunkTypeIdSet.sparse[ctr.typeId];
        return this.chunks[idx] as InstanceType<T>;
    }

    getChunks<T extends ChunkConstructor[]>(ctrs: T): InstanceTypeTuple<T> {
        const out: Chunk[] = new Array(ctrs.length);
        const sparse = this.chunkTypeIdSet.sparse;
        for (let i = 0, len = ctrs.length; i < len; i++) {
            const ctr = ctrs[i];
            const idx = sparse[ctr.typeId];
            out[i] = this.chunks[idx];
        }
        return out as InstanceTypeTuple<T>;
    }

    getChunksByMatcher<T extends ChunkConstructor[]>(
        matcher: IAllOfMatcher<T> | IAnyOfMatcher<T> | INoneOfMatcher<T>
    ): InstanceTypeTuple<T> {
        let out = this._queryCache.get(matcher);
        if (!out) {
            const ctrs = matcher.ctrs;
            out = new Array(ctrs.length);
            const sparse = this.chunkTypeIdSet.sparse;
            for (let i = 0, len = ctrs.length; i < len; i++) {
                const ctr = ctrs[i];
                const idx = sparse[ctr.typeId];
                out[i] = this.chunks[idx];
            }

            this._queryCache.set(matcher, out);
        }
        return out as InstanceTypeTuple<T>;
    }

    getChunkId(index: number) {
        if (!this._entitySet.has(index)) return -1;
        return this._entitySet.sparse[index];
    }

    getChunkEntityId(): readonly number[] {
        return this._entitySet.packed;
    }

    resize(length: number = this._getNewSize()) {
        throw "Not support resize";
        this._queryCache.clear();
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
