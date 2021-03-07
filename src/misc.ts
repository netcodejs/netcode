import { NONE_CONTAINER, SchemaClass } from "./component";
import {
    IDataBufferReader,
    IDatabufferWriter,
    ISerable,
} from "./data/serializable";

export function fastRemove(arr: any[], index: number) {
    arr[index] = arr[arr.length - 1];
    arr.length--;
}

// prettier-ignore
export enum DataType {
    none, i8 = 1, u8, i16, u16, i32, u32, f32, f64,
    short, ushort, int, uint, long, ulong, float, double, string, bool,
}

export function getDataTypeByteLength<
    T extends Exclude<DataType, DataType.string>
>(type?: T) {
    if (type) {
        switch (type) {
            case DataType.i8:
            case DataType.u8:
            case DataType.short:
            case DataType.ushort:
            case DataType.bool:
                return 1;
            case DataType.i16:
            case DataType.u16:
            case DataType.int:
            case DataType.uint:
                return 2;
            case DataType.i32:
            case DataType.u32:
            case DataType.f32:
            case DataType.long:
            case DataType.ulong:
            case DataType.float:
                return 4;
            case DataType.f64:
            case DataType.double:
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

export function asSerable<T>(obj: T): (ISerable & T) | null {
    if (!obj) return null;
    // @ts-ignore
    return typeof obj.ser === "function" && typeof obj.deser === "function"
        ? (obj as ISerable & T)
        : null;
}

export function fixupSerable<T extends Record<string, any>>(target: {
    new (): T;
}) {
    target.prototype.ser = function (
        this: SchemaClass<T>,
        buffer: IDatabufferWriter
    ) {
        const schema = this.__schema__;
        for (let i = 0, count = schema.count; i < count; i++) {
            const type = schema.props[i].type;
            const key = schema.props[i].propertyKey;
            const value = this[key];
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.int:
                    case DataType.i32:
                        buffer.writeInt(value);
                        break;
                    case DataType.float:
                    case DataType.f32:
                        buffer.writeFloat(value);
                        break;
                    case DataType.double:
                    case DataType.f64:
                        buffer.writeDouble(value);
                        break;
                }
            }
        }
    };
    target.prototype.deser = function (
        this: SchemaClass<T>,
        buffer: IDataBufferReader
    ) {
        const schema = this.__schema__;
        for (let i = 0, count = schema.count; i < count; i++) {
            const type = schema.props[i].type;
            const key = schema.props[i].propertyKey;
            if (type.container === NONE_CONTAINER) {
                switch (type.dataType) {
                    case DataType.int:
                    case DataType.i32:
                        (this as any)[key] = buffer.readInt();
                        break;
                    case DataType.float:
                    case DataType.f32:
                        (this as any)[key] = buffer.readFloat();
                        break;
                    case DataType.double:
                    case DataType.f64:
                        (this as any)[key] = buffer.readDouble();
                        break;
                }
            }
        }
    };
}

export type ProtoOf<T> = Pick<T, keyof T>;
