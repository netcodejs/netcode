@unmanaged
@final
export class StructUtil {
    @inline static isStruct<T>(): bool {
        return isReference<T>() && !isManaged<T>();
    }

    @inline static assertStruct<T>(): void {
        if (!StructUtil.isStruct<T>()) {
            ERROR(nameof<T>() + "is not struct!");
        }
    }

    @inline static instantiate<T>(offset: usize = 0): T {
        StructUtil.assertStruct<T>();
        if (offset == 0) {
            offset = heap.alloc(offsetof<T>());
        }
        // @ts-ignore
        return changetype<T>(offset);
    }

    @inline static dispose<T>(src: T): void {
        StructUtil.assertStruct();
        heap.free(changetype<usize>(src));
    }

    @inline static clone<T>(src: T): T {
        StructUtil.assertStruct();
        const dstPtr = heap.alloc(offsetof<T>());
        const srcPtr = changetype<usize>(src);
        const size = offsetof<T>();
        memory.copy(dstPtr, srcPtr, size);
        return changetype<T>(dstPtr);
    }
}

// @ts-ignore: decorator
@inline 
export function fastRemove<T>(arr: T[], index: i32): i32 {
    if (index == 0) return -1;
    const replaceIndex = arr.length - 1;
    if (index == 1 || index == replaceIndex) {
        arr.pop();
        return index;
    }

    arr[index] = arr[replaceIndex];
    arr.length--;
    return replaceIndex;
}

export class SparseSet<V> {
    [key: i32]: V;
    public payloads: V[] = [];
    protected _map: Map<V, i32> = new Map();

    @inline
    has(val: V): bool {
        if (!this._map.has(val)) return false;
        const index = this._map.get(val);
        return index < this.payloads.length && this.payloads[index] === val
    }

    @inline
    add(val: V): void {
        if (this.has(val)) return;
        this._map.set(val, this.payloads.length);
        this.payloads.push(val);
    }

    @inline
    getIndex(val: V): i32 {
        if (!this.has(val)) return -1;
        return this._map.get(val);
    }

    @inline
    @operator("[]")
    get(index: i32): V {
        assert(index < this.payloads.length);
        return this.payloads[index];
    }

    @inline
    @operator("[]=")
    set(index: i32, val: V): void {
        assert(index < this.payloads.length);
        this.payloads[index] = val;
    }

    @inline
    get length(): i32 {
        return this.payloads.length;
    }

    remove(val: V): i32 {
        if (!this.has(val)) return -1;
        const last = this.payloads.pop();
        if (val !== last) {
            const index = this._map.get(val);
            this._map.set(last, index);
            this.payloads[index] = last;
            return index;
        }
        return -1;
    }
}