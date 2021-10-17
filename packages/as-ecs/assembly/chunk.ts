import { IComponentData } from "./component";

@final
export class Chunk {
    readonly ptr: usize;
    readonly totalSize: usize;
    constructor(readonly elementSize: usize, readonly elementLength: i32) {
        this.totalSize = elementSize * elementLength;
        this.ptr = heap.alloc(this.totalSize);
    }

    @inline
    getDataViewPtr(elementIndex: i32, offset: usize): usize {
        assert(
            elementIndex < this.elementLength,
            `elementIndex${elementIndex} < this.elementLength${this.elementLength} is not truth!`
        );
        const targetPtr =
            this.ptr + <usize>elementIndex * this.elementSize + offset;
        __stack_pointer;
        return targetPtr;
    }

    @inline
    getPtr(elementIndex: i32): usize {
        assert(
            elementIndex < this.elementLength,
            `elementIndex${elementIndex} < this.elementLength${this.elementLength} is not truth!`
        );
        return this.ptr + <usize>elementIndex * this.elementSize;
    }
}
