import { Entity } from "./entity";
import { NULL_NUM, NULL_STR } from "./macro";
import { DataType } from "./misc";
import { str as hash } from "./lib/crc-32";

class WhyPropertyKeyHasTheSameError extends Error {}
function sortComponentPropertyKey(a: SchemaProp, b: SchemaProp): number {
    const akey = a.propertyKey;
    const bkey = b.propertyKey;
    if (akey == bkey) throw new WhyPropertyKeyHasTheSameError();
    return akey > bkey ? 1 : -1;
}

function genSchema(): Schema {
    return {
        hash: NULL_NUM,
        name: NULL_STR,
        count: 0,
        props: {},
        raw: [],
    };
}

export const hash2compName: Record<number, string> = Object.create(null);
export const compName2ctr: Record<string, { new (): any }> = Object.create(
    null
);
export function NetComp(name: string) {
    return function <T>(target: { new (): T }) {
        let s = target.prototype.__schema__ as Schema;
        if (!s) {
            s = target.prototype.__schema__ = genSchema();
            return;
        }
        s.name = name;
        s.hash = hash(name);
        hash2compName[s.hash] = s.name;
        compName2ctr[s.name] = target;
        s.count = s.raw.length;
        if (s.count > 0) {
            s.raw.sort(sortComponentPropertyKey);
            for (let paramIndex = 0; paramIndex < s.count; paramIndex++) {
                const v = s.raw[paramIndex];
                v.paramIndex = paramIndex;
                s.props[paramIndex] = v;
                s.props[v.propertyKey as string] = v;
            }
        }
    };
}

export const NONE_CONTAINER = 0;
export const ARR_CONTAINER = 1;

export interface NetFiledType {
    container: number;
    dataType: DataType | { new (): any };
}

type protoOf<T> = Pick<T, keyof T>;

type DataTypeMappingPrimitive = {
    [DataType.int]: number;
    [DataType.long]: number;
    [DataType.float]: number;
    [DataType.double]: number;
    [DataType.short]: number;
    [DataType.i8]: number;
    [DataType.u8]: number;
    [DataType.i16]: number;
    [DataType.u16]: number;
    [DataType.i32]: number;
    [DataType.u32]: number;
    [DataType.f32]: number;
    [DataType.f64]: number;
    [DataType.string]: string;
};

export function NetVar<DT extends number, R>(type: DT | { new (): R }) {
    return function <PK extends string | symbol>(
        t: protoOf<Record<PK, DataTypeMappingPrimitive[DT] & R>>,
        propertyKey: PK
    ) {
        const target: ComponentConstructor = t as any;
        if (!target.__schema__) target.__schema__ = genSchema();
        const s = target.__schema__;
        s.raw.push({
            paramIndex: -1,
            propertyKey: String(propertyKey),
            type: {
                container: NONE_CONTAINER,
                dataType: type,
            },
        });
    };
}

export function NetArr<DT extends number, R>(type: DT | { new (): R }) {
    return function <PK extends string | symbol>(
        t: protoOf<Record<PK, Array<DataTypeMappingPrimitive[DT] & R>>>,
        propertyKey: PK
    ) {
        const target = (t as any) as ComponentConstructor;
        if (!target.__schema__) target.__schema__ = genSchema();
        const s = target.__schema__;
        s.raw.push({
            paramIndex: -1,
            propertyKey: String(propertyKey),
            type: { container: ARR_CONTAINER, dataType: type },
        });
    };
}

export interface SchemaProp {
    paramIndex: number;
    propertyKey: string;
    type: NetFiledType | { new (): any };
}

export interface Schema {
    name: string;
    hash: number;
    count: number;
    props: Record<string | symbol, SchemaProp>;
    raw: SchemaProp[];
}

export type ComponentConstructor<T = any> = { new (): T } & {
    __schema__: Schema;
};

export interface IComponent {
    entity?: Entity;

    onLoad?(): void;
    onStart?(): void;
    onDestroy?(): void;

    update?(): void;
    fixedUpdate?(): void;
    lateUpdate?(): void;
}
