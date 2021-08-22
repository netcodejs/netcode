export const auto = function () {} as any;
export function prop(type: string): PropertyDecorator {
    return function () {};
}
export function cls(className: string): ClassDecorator {
    return function () {};
}
export function method(name: string): MethodDecorator {
    return function () {};
}
export function param<T>(name: string): ParameterDecorator {
    return function () {};
}
