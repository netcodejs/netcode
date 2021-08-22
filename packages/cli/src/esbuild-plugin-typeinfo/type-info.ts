export interface PropTypeInfo {
    name: string;
    type: string;
}

export interface MethodTypeInfo {
    name: string;
    arguments: string[];
    return: string;
}

export interface ClassTypeInfo {
    name: string;
    properties: PropTypeInfo[];
    methods: MethodTypeInfo[];
}
