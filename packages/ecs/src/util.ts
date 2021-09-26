import {
    ChunkConstructor,
    ChunkSchema,
    Chunk,
    PlainSignature,
    SortedChunkSchema,
    Type,
    ComplexSignature,
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
