export let ComponentClassType: any[] = [];
export function Component<T>(target: { new (): T }) {
    target.prototype.__classId__ = ComponentClassType.push(target) - 1;
}

export function Param(type: ParamType): PropertyDecorator {
    return function (t: any, propertyKey: string | symbol) {
        const target = t as ComponentConstructor;
        if (!target.__schema__) target.__schema__ = { count: 0, props: {} };
        const s = target.__schema__;

        const paramIndex = s.count++;
        const v = { propertyKey, type, paramIndex };
        s.props[paramIndex] = v;
        s.props[propertyKey as string] = v;
    };
}

// prettier-ignore
export enum ParamType {
    i8, u8, i16, u16, i32, u32, i64, u64, f32, f64,
    int, long, float, double, string, bool,
}

export interface SchemaProp {
    paramIndex: number;
    propertyKey: string | symbol;
    type: ParamType;
}

export type ComponentConstructor<T = any> = { new (): T } & {
    __schema__: { count: number; props: Record<string | symbol, SchemaProp> };
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
