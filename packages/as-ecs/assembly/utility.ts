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
export function fastRemove<T>(arr: T[], index: number): i32 {
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
Array
export class SparseSet<V> {
    protected payloads: V[] = [];
    protected map: Map<V, i32> = new Map();

    @inline
    has(val: V): bool {
        if (this.map.has(val)) return true;
        const index = this.map.get(val);
        return index < this.payloads.length && this.payloads[index] === val
    }

    add(val: V): void {
        if (this.has(val)) return;
        this.map.set(val, this.payloads.length);
        this.payloads.push(val);
    }

    remove(val: V): void {
        if (!this.has(val)) return;
        const last = this.payloads.pop();
        if (val !== last) {
            const index = this.map.get(val);
            this.map.set(last, index);
            this.payloads[index] = last;
        }
    }
}