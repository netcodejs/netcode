import { BitArray } from "./custom-typed-array";

export interface ChunkConstructor<
    Schema extends ChunkSchema = ChunkSchema,
    IsFlag extends boolean = false
> {
    readonly typeId: number;
    readonly sortedDefinition: SortedChunkSchema;
    readonly definition: ChunkSchema;
    readonly isFlag: IsFlag;
    readonly byteLength: number;
    new (instanceLength: number): Chunk<Schema>;
}

export enum Type {
    i8,
    u8,
    i16,
    u16,
    i32,
    u32,
    f32,
    f64,
    bool,
    native,
}

export const Type2TypedArray = {
    [Type.i8]: Int8Array,
    [Type.u8]: Uint8Array,
    [Type.i16]: Int16Array,
    [Type.u16]: Uint16Array,
    [Type.i32]: Int32Array,
    [Type.u32]: Uint32Array,
    [Type.f32]: Float32Array,
    [Type.f64]: Float64Array,
    [Type.bool]: BitArray,
    [Type.native]: Array,
};

export type TypedArray = [Type2TypedArray[keyof Type2TypedArray]];

export interface Type2TypedArray {
    [Type.i8]: Int8Array;
    [Type.u8]: Uint8Array;
    [Type.i16]: Int16Array;
    [Type.u16]: Uint16Array;
    [Type.i32]: Int32Array;
    [Type.u32]: Uint32Array;
    [Type.f32]: Float32Array;
    [Type.f64]: Float64Array;
    [Type.bool]: BitArray;
    [Type.native]: Array<any>;
}

export type Type2Primitive = {
    [Type.i8]: number;
    [Type.u8]: number;
    [Type.i16]: number;
    [Type.u16]: number;
    [Type.i32]: number;
    [Type.u32]: number;
    [Type.f32]: number;
    [Type.f64]: number;
    [Type.bool]: boolean;
    [Type.native]: any;
    never: never;
};

export type ElementType<T extends ReadonlyArray<unknown>> =
    T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type ChunkSchema = Record<
    string,
    | Type
    | [def: Type, length: number]
    | ChunkConstructor
    | [def: ChunkConstructor, length: number]
>;

export type SortedChunkSchema = {
    plains: PlainSignature[];
    plainArrays: PlainArraySignature[];
    complexs: ComplexSignature[];
    complexArrays: ComplexArraySignature[];
};

export interface ValueSignature {
    offset: number;
    name: string;
}

export interface PlainSignature extends ValueSignature {
    type: Type;
    singleSize: number;
}

export interface PlainArraySignature extends PlainSignature {
    length: number;
}

export interface ComplexSignature extends ValueSignature {
    type: ChunkConstructor;
}

export interface ComplexArraySignature extends ComplexSignature {
    length: number;
}

export type Chunk<Def extends ChunkSchema = ChunkSchema> = {
    readonly [key in keyof Def]: Def[key] extends Type
        ? Type2TypedArray[Def[key]]
        : Def[key] extends [type: Type, length: number]
        ? Type2TypedArray[Def[key][0]]
        : Def[key] extends ChunkConstructor
        ? InstanceType<Def[key]>
        : Def[key] extends [type: ChunkConstructor, length: number]
        ? Array<InstanceType<Def[key][0]>>
        : unknown;
};
