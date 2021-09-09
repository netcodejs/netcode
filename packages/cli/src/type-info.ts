import {
    AccessorDeclaration,
    ClassDeclaration,
    Decorator,
    MethodDeclaration,
    ParameterDeclaration,
    PropertyDeclaration,
} from "ts-morph";

export interface PropTypeInfo {
    decors: Decorator[];
    target: PropertyDeclaration;
}

export interface AccessorTypeInfo {
    decors: Decorator[];
    target: AccessorDeclaration;
}

export interface MethodTypeInfo {
    decors: Decorator[];
    target: MethodDeclaration;
    params: ParamTypeInfo[];
}

export interface ParamTypeInfo {
    decors: Decorator[];
    target: ParameterDeclaration;
}

export interface ClassTypeInfo {
    decors: Decorator[];
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
