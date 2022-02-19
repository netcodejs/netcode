import { ALIGNMENT_BYTES } from "./util";

export enum Types {
    u8,
    i8,
    u16,
    i16,
    u32,
    i32,
    f32,
    f64,
    bool,
}

export const Types2CtorMapping = {
    [Types.u8]: Uint8Array,
    [Types.i8]: Int8Array,
    [Types.u16]: Uint16Array,
    [Types.i16]: Int16Array,
    [Types.u32]: Uint32Array,
    [Types.i32]: Int32Array,
    [Types.f32]: Float32Array,
    [Types.f64]: Float64Array,
    [Types.bool]: Uint8Array,
};

export interface SchemaItem {
    propertyKey: string;
    type: Types | StructType;
    length: number;
    offset: number;
    typedOffset: number;
    isComplex: boolean;
}

type FieldDefinition =
    | Types
    | StructType
    | [type: Types, length: number]
    | [type: StructType, length: number];

export type StructDefinition = Record<string, FieldDefinition>;

export interface StructType<_Ref extends StructDefinition = any> {
    readonly schema: ReadonlyArray<Readonly<SchemaItem>>;
    readonly byteLength: number;
    readonly alignedByteLength: number;
    readonly isFlag: boolean;
}

export type InstanceStructType<T extends StructType> = T extends StructType<
    infer R
>
    ? Struct<R>
    : unknown;

export type FieldNativeData<T extends FieldDefinition> = T extends number[]
    ? Types2NativeMapping[T[number]][]
    : T extends [type: StructType, length: number]
    ? InstanceStructType<T[0]>[]
    : T extends number
    ? Types2NativeMapping[T]
    : T extends StructType
    ? InstanceStructType<T>
    : unknown;

export type Struct<Ref extends StructDefinition> = {
    [key in keyof Ref]: FieldNativeData<Ref[key]>;
};

export function isComplex(type: Types | StructType): type is StructType {
    return typeof type !== "number";
}

export function struct<Def extends StructDefinition>(
    definition?: Def
): StructType<Def> {
    if (!definition || Object.keys(definition).length === 0) {
        const type = {
            schema: [],
            byteLength: 0,
            alignedByteLength: 0,
            isFlag: true,
        };
        return Object.freeze(type);
    } else {
        const schema: SchemaItem[] = [];
        for (let propertyKey in definition) {
            if (typeof propertyKey !== "string") continue;
            const filedDef = definition[propertyKey as string];
            const isArray = Array.isArray(filedDef);
            let length = 1;
            let genericType: any;
            if (isArray) {
                [genericType, length] = filedDef;
            } else {
                genericType = filedDef;
            }
            schema.push({
                propertyKey,
                type: genericType,
                offset: 0,
                typedOffset: 0,
                isComplex: isComplex(genericType),
                length,
            });
        }

        schema.sort(
            (a, b) =>
                (isComplex(b.type)
                    ? b.type.alignedByteLength
                    : Types2CtorMapping[b.type].BYTES_PER_ELEMENT) -
                (isComplex(a.type)
                    ? a.type.alignedByteLength
                    : Types2CtorMapping[a.type].BYTES_PER_ELEMENT)
        );
        let byteLength = 0;
        for (let item of schema) {
            item.offset = byteLength;
            if (!isComplex(item.type)) {
                const viewCtor = Types2CtorMapping[item.type];
                byteLength += viewCtor.BYTES_PER_ELEMENT;
                item.typedOffset = item.offset / viewCtor.BYTES_PER_ELEMENT;
            } else {
                const subComType = item.type as StructType;
                byteLength += subComType.alignedByteLength;
                item.typedOffset = item.offset / 8;
            }
        }
        let alignedByteLength =
            Math.ceil(byteLength / ALIGNMENT_BYTES) * ALIGNMENT_BYTES;

        const type = {
            schema,
            byteLength,
            alignedByteLength,
            isFlag: false,
        };
        return Object.freeze(type);
    }
}

export type Types2NativeMapping = {
    [Types.u8]: number;
    [Types.i8]: number;
    [Types.u16]: number;
    [Types.i16]: number;
    [Types.u32]: number;
    [Types.i32]: number;
    [Types.f32]: number;
    [Types.f64]: number;
    [Types.bool]: boolean;
};
