import { ComponentConstructor } from "./component";
import { setBit } from "./util";

export class Archetype {
    static readonly INITIAL_OPCAITY = 100;
    private _buffer: ArrayBuffer;
    private _view: DataView;
    get view() {
        return this._view;
    }
    private _entityIdx2chunkIdMap: Map<number, number>;
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
        this._entityIdx2chunkIdMap = new Map();
    }

    add(index: number) {
        if (this._length >= this._opacity) {
            this.resize();
        }
        const chunkId = this._length++;
        this._entityIdx2chunkIdMap.set(index, chunkId);
        return chunkId;
    }

    remove(index: number) {
        return this._entityIdx2chunkIdMap.delete(index);
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
