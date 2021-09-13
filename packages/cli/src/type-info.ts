import {
    AccessorDeclaration,
    ClassDeclaration,
    Decorator,
    MethodDeclaration,
    ParameterDeclaration,
    PropertyDeclaration,
} from "ts-morph";

export type DecoratorMap = Record<string, Decorator[]>;

export function pushDecorator(map: DecoratorMap, dec: Decorator) {
    const name = dec.getName();
    let arr = map[name];
    if (!arr) {
        arr = [];
        map[name] = arr;
    }
    arr.push(dec);
}

export function getDecorator(map: DecoratorMap, name: string) {
    const arr = map[name];
    if (!arr || arr.length <= 0) return null;
    return arr[0];
}

export interface PropTypeInfo {
    decors: DecoratorMap;
    target: PropertyDeclaration;
}

export interface AccessorTypeInfo {
    decors: DecoratorMap;
    target: AccessorDeclaration;
}

export interface MethodTypeInfo {
    decors: DecoratorMap;
    target: MethodDeclaration;
    params: ParamTypeInfo[];
}

export interface ParamTypeInfo {
    decors: DecoratorMap;
    target: ParameterDeclaration;
}

export interface ClassTypeInfo {
    decors: DecoratorMap;
    target: ClassDeclaration;
    properties: PropTypeInfo[];
    methods: MethodTypeInfo[];
    accessores: AccessorTypeInfo[];
}

export interface SimplePropTypeInfo {
    name: string;
    type: string;
}

export interface SimpleMethodTypeInfo {
    name: string;
    return: string;
    params: string[];
}

export interface SimpleParamTypeInfo {
    name: string;
    type: string;
}

export interface SimpleClassTypeInfo {
    name: string;
    properties: SimplePropTypeInfo[];
    methods: SimpleMethodTypeInfo[];
}
