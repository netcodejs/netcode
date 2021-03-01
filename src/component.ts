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

export function NetCompProp(
    type: DataType | { new (): any }
): PropertyDecorator {
    return function (t: any, propertyKey: string | symbol) {
        const target = t as ComponentConstructor;
        if (!target.__schema__) target.__schema__ = genSchema();
        const s = target.__schema__;
        s.raw.push({
            paramIndex: -1,
            propertyKey: String(propertyKey),
            type: type,
        });
    };
}

export interface SchemaProp {
    paramIndex: number;
    propertyKey: string;
    type: DataType | { new (): any };
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
