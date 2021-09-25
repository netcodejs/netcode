import { Archetype } from "./archetype";
import { BitArray } from "./custom-typed-array";

export interface ComponentConstructor<
    Schema extends ComponentSchema = ComponentSchema,
    IsFlag extends boolean = false
> {
    readonly typeId: number;
    readonly sortedDefinition: SortedComponentSchema;
    readonly definition: ComponentSchema;
    readonly isFlag: IsFlag;
    readonly byteLength: number;
    readonly TEMP: Component<Schema>;
    new (): Component<Schema>;
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
    // [Type.bool]: BitArray,
    // [Type.native]: Array,
};

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

export type ComponentSchema = Record<
    string,
    | Type
    | [def: Type, length: number]
    | ComponentConstructor
    | [def: ComponentConstructor, length: number]
>;

export type SortedComponentSchema = {
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
    type: ComponentConstructor;
}

export interface ComplexArraySignature extends ComplexSignature {
    length: number;
}

// export type ComponentProperty2Primitive<
//     T extends
//         | Type
//         | [def: Type, length: number]
//         | ComponentConstructor
//         | [def: ComponentConstructor, length: number],
//     R = T extends [any, number] ? T[0] : unknown
// > = T extends Type
//     ? Type2Primitive[T]
//     : T extends ComponentConstructor
//     ? InstanceType<T>
//     : R extends Type
//     ? Type2TypedArray[R]
//     : R extends ComponentConstructor
//     ? Array<InstanceType<R>>
//     : unknown;
export type Component<Def extends ComponentSchema = ComponentSchema> = {
    readonly [key in keyof Def]: Def[key] extends Type
        ? (() => Type2Primitive[Def[key]]) &
              ((val: Type2Primitive[Def[key]]) => void)
        : Def[key] extends [type: Type, length: number]
        ? ((index: number) => Type2Primitive[Def[key][0]]) &
              ((index: number, val: Type2Primitive[Def[key][0]]) => void)
        : Def[key] extends ComponentConstructor
        ? (out?: InstanceType<Def[key]>) => InstanceType<Def[key]>
        : Def[key] extends [type: ComponentConstructor, length: number]
        ? (
              index: number,
              out?: InstanceType<Def[key][0]>
          ) => InstanceType<Def[key][0]>
        : unknown;
} &
    {
        readonly [key in keyof Def as `${string &
            (Def[key] extends [Type, number] | [ComponentConstructor, number]
                ? key
                : never)}Length`]: number;
    } & {
        archetype: Archetype;
        offset: number;
        set(archetype: Archetype, offset: number): void;
    };
