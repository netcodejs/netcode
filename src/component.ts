import { Macro } from "./macro";

export let ComponentClassType: any[] = [];
export function Component<T extends { new (): any }>(target: T) {
    target.prototype.__classId__ = ComponentClassType.push(target) - 1;
}

export function Param(type: ParamType): PropertyDecorator {
    return function (target: any, propertyKey: string | symbol) {
        if (!target.__schema__) target.__schema__ = { count: 0, props: {} };
        const s = target.__schema__;

        const paramIndex = s.count++;
        const v = { propertyKey, type, paramIndex };
        s.props[paramIndex] = v;
        s.props[propertyKey] = v;
    };
}

// prettier-ignore
export enum ParamType {
    i8, u8, i16, u16, i32, u32, i64, u64, f32, f64,
    int, long, float, double, string, bool,
}

export interface IComponent {
    owner?: number;
    __schema__?: Record<string | number, string | number>;

    onLoad?(): void;
    onStart?(): void;
    onDestroy?(): void;

    update?(): void;
    fixedUpdate?(): void;
    lateUpdate?(): void;
}
