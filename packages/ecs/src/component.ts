import { Archetype } from "./archetype";
import { BitArray } from "./custom-typed-array";

export interface ComponentConstructor<Def extends ComponentDefinition = any> {
    readonly typeId: number;
    readonly definition: Readonly<Def>;
    readonly isFlag: boolean;
    readonly byteLength: number;
    new (): DefineClass<Def>;
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
};

export type ElementType<T extends ReadonlyArray<unknown>> =
    T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type ComponentDefinition = Record<
    string,
    Type | [Type] | ComponentConstructor
>;

export type ComponentDefinitionValue2Primitive<
    T extends Type | [Type] | ComponentConstructor
> = T extends number
    ? Type2Primitive[T]
    : T extends [Type]
    ? Type2Primitive[ElementType<T>]
    : T extends ComponentConstructor
    ? InstanceType<T>
    : unknown;

export type DefineClass<Def extends ComponentDefinition> = {
    [key in keyof Def]: ComponentDefinitionValue2Primitive<Def[key]>;
} & {
    readonly archetype: Archetype;
    readonly offset: number;
};
