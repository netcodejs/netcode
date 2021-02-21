import { Entity } from "./entity";
import { DataType } from "./misc";

export let ComponentClassType: any[] = [];

class WhyPropertyKeyHasTheSameError extends Error {}
function sortComponentPropertyKey(a: SchemaProp, b: SchemaProp): number {
    const akey = a.propertyKey;
    const bkey = b.propertyKey;
    // const acount = akey.length;
    // const bcount = bkey.length;
    if (akey == bkey) throw new WhyPropertyKeyHasTheSameError();
    return akey > bkey ? 1 : -1;
}

export function Comp<T>(target: { new (): T }) {
    target.prototype.__classId__ = ComponentClassType.push(target) - 1;

    const s = target.prototype.__schema__ as Schema;
    if (!s) return;
    s.count = s.raw.length;
    s.raw.sort(sortComponentPropertyKey);
    for (let paramIndex = 0; paramIndex < s.count; paramIndex++) {
        const v = s.raw[paramIndex];
        v.paramIndex = paramIndex;
        s.props[paramIndex] = v;
        s.props[v.propertyKey as string] = v;
    }
}

export function CompProp(type: DataType): PropertyDecorator {
    return function (t: any, propertyKey: string | symbol) {
        const target = t as ComponentConstructor;
        if (!target.__schema__)
            target.__schema__ = { count: 0, props: {}, raw: [] };
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
    type: DataType;
}

export interface Schema {
    count: number;
    props: Record<string | symbol, SchemaProp>;
    raw: SchemaProp[];
}

export type ComponentConstructor<T = any> = { new (): T } & {
    __schema__: Schema;
    __classId__: number;
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
