import { DataType } from "./component-schema";
import { ISerable } from "./data/serializable";

export function fastRemove(arr: any[], index: number) {
    arr[index] = arr[arr.length - 1];
    arr.length--;
}

export function getDataTypeByteLength<
    T extends Exclude<DataType, DataType.STRING>
>(type?: T) {
    if (type) {
        switch (type) {
            case DataType.I8:
            case DataType.U8:
            case DataType.BOOL:
                return 1;
            case DataType.SHORT:
            case DataType.ushort:
            case DataType.I16:
            case DataType.U16:
                return 2;
            case DataType.uint:
            case DataType.INT:
            case DataType.I32:
            case DataType.U32:
            case DataType.F32:
            case DataType.FLOAT:
                return 4;
            case DataType.LONG:
            case DataType.ulong:
            case DataType.F64:
            case DataType.DOUBLE:
                return 8;
        }
    }
    return 0;
}

const MAX_VERSION = (1 << 30) - 1;
export function composeVersion(num: number, destoryed: boolean | 0 | 1) {
    num = num % MAX_VERSION;
    return destoryed ? -num : num;
}

export function decomposeVersion(version: number): [number, boolean] {
    return [version > 0 ? version : -version, version < 0];
}

export function isPrimitive(test: any) {
    return test !== Object(test);
}

export function asSerable<T extends {}>(obj: T): (ISerable & T) | null {
    if (!obj) return null;
    // @ts-ignore
    return typeof obj.ser === "function" && typeof obj.deser === "function"
        ? (obj as ISerable & T)
        : null;
}

export type ProtoOf<T> = Pick<T, keyof T>;
