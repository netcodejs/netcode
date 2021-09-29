import {
    Chunk,
    ChunkConstructor,
    ChunkSchema,
    SortedChunkSchema,
    Type,
} from "./chunk";
import { Entity } from "./entity";

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

export function fastRemove<T>(arr: T[], index: number) {
    const overringIdx = arr.length - 1;
    arr[index] = arr[overringIdx];
    arr.length--;
    return overringIdx;
}

export function entityClone(entity: Entity): Entity {
    const newObj = Object.create(null) as Entity;
    newObj.index = entity.index;
    newObj.version = entity.version;
    return newObj;
}

export function entityEqualTo(e1: Entity, e2: Entity): boolean {
    return e1.index === e2.index && e1.version === e2.version;
}

export function isComponentConstructor(
    sign: Type | ChunkConstructor
): sign is ChunkConstructor {
    return typeof sign !== "number";
}

export function getPlainByteLength(type: Type) {
    switch (type) {
        case Type.i8:
        case Type.u8:
        case Type.bool:
            return 1;
        case Type.i16:
        case Type.u16:
            return 2;
        case Type.i32:
        case Type.u32:
        case Type.f32:
            return 4;
        case Type.f64:
            return 8;
        default:
            return 0;
    }
}

export function sortDefine(define: ChunkSchema): [SortedChunkSchema, number] {
    let byteLength = 0;
    const entries = Object.entries(define);
    const out: SortedChunkSchema = {
        plains: [],
        plainArrays: [],
        complexs: [],
        complexArrays: [],
    };
    for (let [name, define] of entries) {
        let valueType: Type | ChunkConstructor;
        let length = 1;
        let isArray = false;
        const offset = byteLength;
        if (Array.isArray(define)) {
            isArray = true;
            [valueType, length] = define;
        } else {
            valueType = define;
        }

        if (isComponentConstructor(valueType)) {
            byteLength += valueType.byteLength * length;
            if (isArray) {
                out.complexArrays.push({
                    type: valueType,
                    length,
                    offset,
                    name,
                });
            } else {
                out.complexs.push({
                    type: valueType,
                    offset,
                    name,
                });
            }
        } else {
            const singleSize = getPlainByteLength(valueType);
            byteLength += singleSize * length;
            if (isArray) {
                out.plainArrays.push({
                    type: valueType,
                    length,
                    offset,
                    name,
                    singleSize,
                });
            } else {
                out.plains.push({
                    type: valueType,
                    offset,
                    name,
                    singleSize,
                });
            }
        }
    }

    return [out, byteLength];
}
export type ComponentType<T extends ChunkConstructor> = InstanceType<T>;
export type InstanceTypeTuple<
    T extends (abstract new (...args: any[]) => any)[]
> = {
    [key in keyof T]: T[key] extends abstract new (...args: any[]) => any
        ? InstanceType<T[key]>
        : unknown;
};
export const Type2TypedArrayString = {
    [Type.i8]: "Int8Array",
    [Type.u8]: "Uint8Array",
    [Type.i16]: "Int16Array",
    [Type.u16]: "Uint16Array",
    [Type.i32]: "Int32Array",
    [Type.u32]: "Uint32Array",
    [Type.f32]: "Float32Array",
    [Type.f64]: "Float64Array",
    [Type.bool]: "BitArray",
    [Type.native]: "NativeArray",
};

type InitJit = (insLen: number, ctrs: ChunkConstructor[]) => void;
export function defineInitJit(ctr: ChunkConstructor) {
    if (ctr.isFlag) return Function() as InitJit;
    let str = "";
    const sorted = ctr.sortedDefinition;
    for (let i = 0, j = sorted.plains.length; i < j; i++) {
        const sign = sorted.plains[i];
        // @ts-ignore
        str += `this.${sign.name} = new ${
            Type2TypedArrayString[sign.type]
        }(insLen);\n`;
    }
    for (let i = 0, j = sorted.plainArrays.length; i < j; i++) {
        const sign = sorted.plainArrays[i];
        str += `
{
    const arr = (this.${sign.name} = new Array(${sign.length}));
    for (let k = 0; k < ${sign.length}; k++) {
        arr[k] = new ${Type2TypedArrayString[sign.type]}(insLen);
    }
}`;
    }
    for (let i = 0, j = sorted.complexs.length; i < j; i++) {
        const sign = sorted.complexs[i];
        str += `
this.${sign.name} = new ctrs[${sign.type.typeId}](insLen);`;
    }
    for (let i = 0, j = sorted.complexArrays.length; i < j; i++) {
        const sign = sorted.complexArrays[i];
        str += `
{
    const arr = (this.${sign.name} = new Array(${sign.length}));
    for (let k = 0; k < ${sign.length}; k++) {
        arr[k] = new ctrs[${sign.type.typeId}](insLen);
    }
}`;
    }
    return Function("insLen", "ctrs", str) as InitJit;
}

type CopyJit = (other: any, srcIdx: number, dstIdx: number) => void;
export function defineCopyToJit(ctr: ChunkConstructor) {
    if (ctr.isFlag) return Function() as CopyJit;
    let str = "";
    const sorted = ctr.sortedDefinition;
    for (let i = 0, j = sorted.plains.length; i < j; i++) {
        const sign = sorted.plains[i];
        str += `
{
    const src = this.${sign.name};
    const dst = other.${sign.name};
    dst[dstIdx] = src[srcIdx];
}`;
    }
    for (let i = 0, j = sorted.plainArrays.length; i < j; i++) {
        const sign = sorted.plainArrays[i];
        str += `
{
    const srcArr = this.${sign.name};
    const dstArr = other.${sign.name};
    for (let k = 0; k < ${sign.length}; k++) {
        const src = srcArr[k];
        const dst = dstArr[k];
        dst[dstIdx] = src[srcIdx];
    }
}`;
    }
    for (let i = 0, j = sorted.complexs.length; i < j; i++) {
        const sign = sorted.complexs[i];
        str += `
this.${sign.name}.copyTo(other.${sign.name}, srcIdx, dstIdx);`;
    }
    for (let i = 0, j = sorted.complexArrays.length; i < j; i++) {
        const sign = sorted.complexArrays[i];
        str += `
{
    const srcArr = this.${sign.name};
    const dstArr = other.${sign.name};
    for (let k = 0; k < ${sign.length}; k++) {
        srcArr[k].copyTo(dstArr[k], srcIdx, dstIdx);
    }
}`;
    }

    return Function("other", "srcIdx", "dstIdx", str) as CopyJit;
}
