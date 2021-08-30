import {
    AccessorTypeInfo,
    ClassTypeInfo,
    PropTypeInfo,
    TypeSchema,
} from "esbuild-plugin-type-schema";
import { str2hash } from "@netcodejs/util";
import {
    ArrayTypeNode,
    Decorator,
    TypedNode,
    Type,
    VariableStatementStructure,
    StatementStructures,
    StructureKind,
    SyntaxKind,
    PropertyDeclaration,
    AccessorDeclaration,
} from "ts-morph";

export function NetTypeSchema() {
    return TypeSchema({
        onProgress(o, clsInfo) {
            const className = handleClssName(clsInfo);
            if (className == null) {
                return;
            }
            const hash = str2hash(className);
            clsInfo.target.addProperty({
                name: "__hash__",
                isStatic: true,
                initializer: hash.toString(),
                type: "number",
            });

            if (!clsInfo.target.getMethod("ser")) {
                const props = [...clsInfo.properties, ...clsInfo.accessores]
                    .map((p, idx) => handlePropOrAccessor(p, idx))
                    .filter((s) => s);
                clsInfo.target.addMethods([
                    {
                        isGenerator: true,
                        name: "ser",
                        parameters: [
                            { name: "buffer", type: "IDataBufferWriter" },
                        ],
                        statements: props
                            .map((p) =>
                                genSerFunctionStr(
                                    p.name,
                                    p.typeName,
                                    p.containerType
                                )
                            )
                            .flat(),
                    },
                    {
                        name: "deser",
                        parameters: [
                            { name: "buffer", type: "IDataBufferReader" },
                        ],
                        statements: props
                            .map((p) =>
                                genDeserFunctionStr(
                                    p.name,
                                    p.typeName,
                                    p.containerType
                                )
                            )
                            .flat(),
                    },
                ]);
            }

            // Handle rpc ser and deser
            if (clsInfo.methods.length > 0) {
                const mds = clsInfo.methods;
                mds.forEach((md) => {
                    const name = md.target.getName();
                    md.params.map((param) => {
                        param.decors.find((d) => d.getName() === "RpcVar");
                    });
                });
            }

            // console.log("class: " + className);
            clsInfo.properties.forEach((prop) => {
                // console.log("prop: " + prop.target.getName());
                prop.decors.forEach((decor) => decor.remove());
            });
            clsInfo.accessores.forEach((accessor) => {
                // console.log("accessor: " + accessor.target.getName());
                accessor.decors.forEach((decor) => decor.remove());
            });
            clsInfo.methods.forEach((md) =>
                md.decors.forEach((dec) => dec.remove())
            );
        },
    });
}

export function handleClssName(clsInfo: ClassTypeInfo) {
    const netSerableDecor = clsInfo.decors.find(
        (d) => d.getName() === "NetSerable"
    );
    if (!netSerableDecor) return null;
    const args = netSerableDecor.getArguments();
    if (args.length === 0) {
        netSerableDecor.insertArgument(
            0,
            JSON.stringify(clsInfo.target.getNameOrThrow())
        );
    }

    return netSerableDecor.getArguments()[0].getText()!;
}

export function handlePropOrAccessor(
    info: PropTypeInfo | AccessorTypeInfo,
    index: number
) {
    let netVarDecor: Decorator | null = null;
    let netArrDecor: Decorator | null = null;
    info.decors.forEach((decor) => {
        if (decor.getName() === "NetVar") {
            netVarDecor = decor;
        } else if (decor.getName() === "NetArr") {
            netArrDecor = decor;
        }
    });

    const name = info.target.getName();
    if (netVarDecor && netArrDecor) {
        throw `The property ${name} has both @NetVar and @NetArr!`;
    }

    if (!netVarDecor && !netArrDecor) {
        return null!;
    }

    const containerType = netArrDecor ? "arr" : "var";

    const decor = netArrDecor! ?? netVarDecor!;
    let type = info.target.getType();
    if (type.isArray()) type = type.getArrayElementTypeOrThrow();

    let typeName = type.getSymbol()?.getName();
    if (!typeName) {
        // type checker cannot find, it maybe fake number like 'u32';
        if (info.target.getKind() === SyntaxKind.PropertyDeclaration) {
            const t = info.target as PropertyDeclaration;
            let typeNode = t.getTypeNode();
            if (typeNode) {
                if (typeNode.getKind() === SyntaxKind.ArrayType) {
                    typeNode = (typeNode as ArrayTypeNode).getElementTypeNode();
                }
                typeName = typeNode.getText();
            }
        } else if (
            info.target.getKind() === SyntaxKind.GetAccessor ||
            info.target.getKind() === SyntaxKind.SetAccessor
        ) {
            const t = info.target as AccessorDeclaration;
            let typeNode = t.getReturnTypeNode();
            if (typeNode) {
                if (typeNode.getKind() === SyntaxKind.ArrayType) {
                    typeNode = (typeNode as ArrayTypeNode).getElementTypeNode();
                }
                typeName = typeNode.getText();
            }
        }
    }

    if (!typeName) {
        throw `Cannot resolve property ${name} type.`;
    }
    return {
        name,
        containerType,
        typeName,
    };
}

const PrimitiveType = [
    "u8",
    "i8",
    "u16",
    "i16",
    "u32",
    "i32",
    "u64",
    "i64",
    "f32",
    "f64",
    "ubyte",
    "byte",
    "ushort",
    "short",
    "uint",
    "int",
    "ulong",
    "long",
    "float",
    "double",
    "boolean",
    "number",
];
export function isPrimitive(type: string) {
    return PrimitiveType.findIndex((t) => t === type) > -1;
}

export function primitiveNormal(type: string) {
    switch (type) {
        case "u8":
            return "ubyte";
        case "i8":
            return "byte";
        case "u16":
            return "ushort";
        case "i16":
            return "short";
        case "u32":
            return "uint";
        case "i32":
            return "int";
        case "u64":
            return "ulong";
        case "i64":
            return "long";
        case "f32":
            return "float";
        case "f64":
        case "number":
            return "double";
        default:
            return type;
    }
}

export function genDeserFunctionStr(
    name: string,
    typeName: string,
    container: string
): string | (string | StatementStructures)[] {
    if (container === "var") {
        if (isPrimitive(typeName)) {
            typeName = primitiveNormal(typeName);
            return `this.${name} = buffer.read${typeName[0].toUpperCase()}${typeName.substring(
                1
            )}();`;
        }
        return `this.${name}.deser(buffer);`;
    } else {
        if (isPrimitive(typeName)) {
            typeName = primitiveNormal(typeName);
            return `
// AUTO GEN - ${name} start
if (!this.${name}) {
    this.${name} = []
}
this.${name}.length = buffer.readUint();
for (let i = 0, len = this.${name}.length; i < len; i++) {
    this.${name}[i] = buffer.read${typeName[0].toUpperCase()}${typeName.substring(
                1
            )}();
    
}
// AUTO GEN - ${name} end`;
        } else {
            return `
// AUTO GEN - ${name} start
if (!this.${name}) {
    this.${name} = []
}
this.${name}.length = buffer.readUint();
for (let i = 0, len = this.${name}.length; i < len; i++) {
    let obj = this.${name}[i];
    if (!obj) {
        obj = this.${name}[i] = Object.create(${typeName}.prototype);
    }
    obj.deser(buffer);
}
// AUTO GEN - ${name} end`;
        }
    }
}

export function genSerFunctionStr(
    name: string,
    typeName: string,
    container: string
): string | string[] {
    if (container == "var") {
        if (isPrimitive(typeName)) {
            typeName = primitiveNormal(typeName);
            return `buffer.write${typeName[0].toUpperCase()}${typeName.substring(
                1
            )}(${name});`;
        }
        return `this.${name}.ser(buffer);`;
    } else {
        if (isPrimitive(typeName)) {
            typeName = primitiveNormal(typeName);
            return `
// AUTO GEN - ${name} start
if (!this.${name}) {
    buffer.writeUint(0);
} else {
    buffer.writeUint(this.${name}.length);
    for (let i = 0, len = this.${name}.length; i < len; i++) {
        buffer.write${typeName[0].toUpperCase()}${typeName.substring(
                1
            )}(this.${name}[i]);
    }
}
// AUTO GEN - ${name} end`;
        } else {
            return `
// AUTO GEN - ${name} start
if (!this.${name}) {
    this.${name} = []
}
this.${name}.length = buffer.readUint();
for (let i = 0, len = this.${name}.length; i < len; i++) {
    let obj = this.${name}[i];
    if (!obj) {
        obj = this.${name}[i] = Object.create(${typeName}.prototype);
    }
    obj.ser(buffer);
}
// AUTO GEN - ${name} end`;
        }
    }
}
