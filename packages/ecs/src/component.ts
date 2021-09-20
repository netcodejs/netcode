import { Archetype } from "./archetype";
import { BitArray } from "./custom-typed-array";

export interface ComponentConstructor<
    Define extends ComponentDefinition = ComponentDefinition
> {
    readonly typeId: number;
    readonly definition: SortedComponentdefinition;
    readonly isFlag: boolean;
    readonly byteLength: number;
    new (): DefineClass<Define>;
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
export type Type2TypedArray = typeof Type2TypedArray;

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

export type ComponentDefinition = Record<
    string,
    | Type
    | [def: Type, length: number]
    | ComponentConstructor
    | [def: ComponentConstructor, length: number]
>;

export enum DefineValueType {
    PLAIN,
    COMPLEX,
}

export type SortedComponentdefinitionValue = (
    | {
          type: DefineValueType.COMPLEX;
          sign: ComponentConstructor;
      }
    | {
          type: DefineValueType;
          sign: Type;
      }
) & {
    length: number;
    offset: number;
    isArray: boolean;
};
export type SortedComponentdefinition = Record<
    string,
    SortedComponentdefinitionValue
>;

export type ComponentDefinitionValue2Primitive<
    T extends
        | Type
        | [def: Type, length: number]
        | ComponentConstructor
        | [def: ComponentConstructor, length: number],
    R = T extends [any, number] ? T[0] : unknown
> = T extends Type
    ? Type2Primitive[T]
    : T extends ComponentConstructor
    ? InstanceType<T>
    : R extends Type
    ? Array<Type2Primitive[R]>
    : R extends ComponentConstructor
    ? Array<InstanceType<R>>
    : unknown;

export type DefineClass<Def extends ComponentDefinition = ComponentDefinition> =
    {
        [key in keyof Def]: (() => ComponentDefinitionValue2Primitive<
            Def[key]
        >) &
            ((val: ComponentDefinitionValue2Primitive<Def[key]>) => void);
    } & {
        archetype: Archetype;
        offset: number;
    };
