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

export function Component<T>(target: { new (): T }) {
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

export function Param(type: ParamType): PropertyDecorator {
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

// prettier-ignore
export enum ParamType {
    i8, u8, i16, u16, i32, u32, i64, u64, f32, f64,
    int, long, float, double, string, bool,
}

export interface SchemaProp {
    paramIndex: number;
    propertyKey: string;
    type: ParamType;
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
    owner?: number;

    onLoad?(): void;
    onStart?(): void;
    onDestroy?(): void;

    update?(): void;
    fixedUpdate?(): void;
    lateUpdate?(): void;
}
