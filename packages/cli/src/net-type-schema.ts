import { str2hash } from "@netcodejs/util";
import * as path from "path";
import {
    AccessorDeclaration,
    ArrayTypeNode,
    CodeBlockWriter,
    Decorator,
    FunctionDeclarationStructure,
    FunctionTypeNode,
    ImportDeclarationStructure,
    ImportSpecifier,
    InterfaceDeclarationStructure,
    OptionalKind,
    PropertyDeclaration,
    SourceFile,
    StatementStructures,
    SyntaxKind,
    TypeChecker,
    WriterFunction,
} from "ts-morph";
import {
    AccessorTypeInfo,
    ClassTypeInfo,
    getDecorator,
    PropTypeInfo,
} from "./type-info";

export interface ProgressContext {
    currentModuleSpecifier: string;
    currentFileNamed2Module: Record<string, string>;
}

export function pushImport(
    outImports: Map<string, Set<string>>,
    module: string,
    namedImport: string
) {
    let namedSet = outImports.get(module);
    if (!namedSet) {
        namedSet = new Set();
        outImports.set(module, namedSet);
    }
    namedSet.add(namedImport);
}
export function onProgress(
    context: ProgressContext,
    clsInfo: ClassTypeInfo,
    outFunctions: WriterFunction[],
    outInterfaces: OptionalKind<InterfaceDeclarationStructure>[],
    outImports: Map<string, Set<string>>,
    writer: CodeBlockWriter
) {
    const className = getClassName(clsInfo);
    const realClassName = clsInfo.target.getNameOrThrow();
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

    let needImport = false;
    if (!clsInfo.target.getMethod("ser")) {
        needImport = true;
        const props = [...clsInfo.properties, ...clsInfo.accessores]
            .map((p, idx) => handlePropOrAccessor(p, idx))
            .filter((s) => {
                if (!s) return false;
                if (s.hasSymbol) {
                    const module = context.currentFileNamed2Module[s.typeName];
                    if (module) {
                        pushImport(outImports, module, s.typeName);
                    }
                }
                return !!s;
            });

        outFunctions.push((writer) => {
            writer
                .write(`${realClassName}.prototype.ser`)
                .space()
                .write("=")
                .space()
                .write(
                    `function(this: ${realClassName}, ${
                        props.length > 0 ? "buffer" : "_buffer"
                    }: IDataBufferWriter)`
                )
                .block(() => {
                    props
                        .map((p) =>
                            genSerFunctionStr(
                                p!.name,
                                p!.typeName,
                                p!.containerType
                            )
                        )
                        .flat()
                        .forEach((p) => writer.writeLine(p));
                });
        });

        outFunctions.push((writer) => {
            writer
                .write(`${realClassName}.prototype.deser`)
                .space()
                .write("=")
                .space()
                .write(
                    `function(this: ${realClassName}, ${
                        props.length > 0 ? "buffer" : "_buffer"
                    }: IDataBufferReader)`
                )
                .block(() => {
                    props
                        .map((p) =>
                            genDeserFunctionStr(
                                p!.name,
                                p!.typeName,
                                p!.containerType
                            )
                        )
                        .flat()
                        .forEach((p) => writer.writeLine(p as string));
                });
        });

        outInterfaces.push({
            name: realClassName,
            methods: [
                {
                    name: "ser",
                    parameters: [{ name: "buffer", type: "IDataBufferWriter" }],
                    returnType: "void",
                },
                {
                    name: "deser",
                    parameters: [{ name: "buffer", type: "IDataBufferReader" }],
                    returnType: "void",
                },
            ],
        });
    }

    // Handle rpc ser and deser
    clsInfo.methods.forEach((md) => {
        const rpcDec = getDecorator(md.decors, "Rpc");
        if (!rpcDec) return;
        needImport = true;
        const name = md.target.getName();
        const paramsParsed = md.params.map((param, idx) => {
            let type = param.target.getType();
            if (type.isArray()) type = type.getArrayElementTypeOrThrow();
            const typeSymbol = type.getSymbol();
            let typeName = typeSymbol?.getName();
            if (!typeName) {
                let typeNode = param.target.getTypeNode();
                if (typeNode) {
                    if (typeNode.getKind() === SyntaxKind.ArrayType) {
                        typeNode = (
                            typeNode as ArrayTypeNode
                        ).getElementTypeNode();
                    }
                    typeName = typeNode.getText();
                }
            }

            if (!typeName) {
                console.error(
                    `Cannot resolve ${realClassName}#${name} arg${idx}`
                );
                return;
            }
            return {
                typeName,
                isArray: type.isArray(),
                hasSymbol: !!typeSymbol,
            };
        });
        paramsParsed.forEach((obj) => {
            if (!obj) return;
            const { typeName, isArray, hasSymbol } = obj;
            if (hasSymbol) {
                const module = context.currentFileNamed2Module[typeName];
                pushImport(outImports, module, typeName);
            }
        });

        genRpcFunction(realClassName, name, outFunctions);
    });

    clsInfo.properties.forEach((prop) => {
        const rpcDec = getDecorator(prop.decors, "Rpc");
        if (!rpcDec) return;
        needImport = true;
        const name = prop.target.getName();
        const propType = prop.target.getType();
        const propSymbol = propType.getSymbolOrThrow();
        const propClr = propSymbol.getDeclarations()[0];
        if (!(propClr instanceof FunctionTypeNode)) return;

        const paramsParsed = propClr.getParameters().map((param, idx) => {
            let type = param.getType();
            if (type.isArray()) type = type.getArrayElementTypeOrThrow();
            const typeSymbol = type.getSymbol();
            let typeName = typeSymbol?.getName();
            if (!typeName) {
                let typeNode = param.getTypeNode();
                if (typeNode) {
                    if (typeNode.getKind() === SyntaxKind.ArrayType) {
                        typeNode = (
                            typeNode as ArrayTypeNode
                        ).getElementTypeNode();
                    }
                    typeName = typeNode.getText();
                }
            }

            if (!typeName) {
                console.error(
                    `Cannot resolve ${realClassName}#${name} arg${idx}`
                );
                return;
            }
            return {
                typeName,
                isArray: type.isArray(),
                hasSymbol: !!typeSymbol,
            };
        });
        paramsParsed.forEach((obj) => {
            if (!obj) return;
            const { typeName, isArray, hasSymbol } = obj;
            if (hasSymbol) {
                const module = context.currentFileNamed2Module[typeName];
                pushImport(outImports, module, typeName);
            }
        });

        genRpcFunction(realClassName, name, outFunctions);
    });

    if (needImport) {
        pushImport(outImports, context.currentModuleSpecifier, realClassName);
    }
}

function genRpcFunction(
    realClassName: string,
    rpcName: string,
    outFunctions: WriterFunction[]
) {
    outFunctions.push((writer) => {
        writer
            .write(`${realClassName}.prototype.${rpcName}`)
            .space()
            .write("=")
            .space()
            .write(`async function(this: ${realClassName})`)
            .block(() => {
                writer.write(`return this.${rpcName}_impl();`);
            });
    });
}

export function getClassName(clsInfo: ClassTypeInfo) {
    const netSerableDecor = getDecorator(clsInfo.decors, "Serable");
    if (!netSerableDecor) return null;
    const args = netSerableDecor.getArguments();
    if (args.length === 0) {
        return clsInfo.target.getNameOrThrow();
    }

    return JSON.parse(netSerableDecor.getArguments()[0].getText())!;
}

export function handlePropOrAccessor(
    info: PropTypeInfo | AccessorTypeInfo,
    index: number
) {
    const netVarDecor = getDecorator(info.decors, "Var");

    const name = info.target.getName();
    if (!netVarDecor) {
        console.error(`The property ${name} has both @NetVar and @NetArr!`);
        return;
    }

    let type = info.target.getType();
    const containerType = type.isArray() ? "arr" : "var";
    if (type.isArray()) type = type.getArrayElementTypeOrThrow();
    const typeSymbol = type.getSymbol();
    let typeName = typeSymbol?.getName();
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
        hasSymbol: !!typeSymbol,
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
            )}(this.${name});`;
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
buffer.writeUint(this.${name}.length);
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

// export async function gen() {

//     const handingFiles = new Set<string>();
//     const decFiles = new Set<string>();

//     const tsconfigPath = path.join(process.cwd(), "tsconfig.json");
//     if (!fs.existsSync(tsconfigPath)) {
//         throw "Cannot find tsconfig in path: " + tsconfigPath;
//     }
//     console.log("Finding tsconfig's path is " + tsconfigPath);
//     const project = new Project({
//         compilerOptions: {
//             declaration: false,
//             sourceMap: false,
//         },
//         tsConfigFilePath: tsconfigPath,
//     });
//     const decNames = new Set<string>();
//     await getDecFiles(
//         build,
//         handingFiles,
//         decFiles,
//         option.decFileFilter
//     );

//     const decSourceFiles = project.getSourceFiles(
//         Array.from(decFiles.values())
//     );

//     for (let sf of decSourceFiles) {
//         [...sf.getVariableDeclarations(), ...sf.getFunctions()].forEach(
//             (clr) => {
//                 if (
//                     clr.isExported ||
//                     clr.isNamedExport ||
//                     clr.isDefaultExport
//                 ) {
//                     decNames.add(clr.getName());
//                 }
//                 clr.forget();
//             }
//         );
//     }
//     console.log(decNames);

//     build.onLoad({ filter: /.+\.ts/ }, (args) => {
//         if (handingFiles.has(args.path)) {
//             return project.forgetNodesCreatedInBlock((remember) => {
//                 const sf = project.getSourceFileOrThrow(args.path);
//                 var classes = sf.getClasses();
//                 for (const cls of classes) {
//                     const clsDecors = cls
//                         .getDecorators()
//                         .filter((decor) =>
//                             decNames.has(decor.getName())
//                         );
//                     if (clsDecors.length <= 0) continue;

//                     const props = cls.getProperties();
//                     const propInfoArr: PropTypeInfo[] = [];
//                     for (const prop of props) {
//                         const propDecors = prop
//                             .getDecorators()
//                             .filter((propDecor) =>
//                                 decNames.has(propDecor.getName())
//                             );
//                         if (propDecors.length <= 0) continue;
//                         propInfoArr.push({
//                             decors: propDecors,
//                             target: prop,
//                         });
//                     }

//                     const methods = cls.getMethods();
//                     const methodInfoArr: MethodTypeInfo[] = [];
//                     for (const method of methods) {
//                         const methodDecors = method
//                             .getDecorators()
//                             .filter((methodDecor) =>
//                                 decNames.has(methodDecor.getName())
//                             );
//                         if (methodDecors.length <= 0) continue;

//                         methodInfoArr.push({
//                             decors: methodDecors,
//                             target: method,
//                             params: method
//                                 .getParameters()
//                                 .map((param) => {
//                                     const paramDecors = param
//                                         .getDecorators()
//                                         .filter((paramDecor) =>
//                                             decNames.has(
//                                                 paramDecor.getName()
//                                             )
//                                         );
//                                     return {
//                                         target: param,
//                                         decors: paramDecors,
//                                     };
//                                 }),
//                         });
//                     }

//                     const accessores = [
//                         ...cls.getGetAccessors(),
//                         ...cls.getSetAccessors(),
//                     ];
//                     const accessorInfoArr: AccessorTypeInfo[] = [];
//                     for (const accessor of accessores) {
//                         const decors = accessor
//                             .getDecorators()
//                             .filter((dec) =>
//                                 decNames.has(dec.getName())
//                             );
//                         if (decors.length <= 0) continue;
//                         accessorInfoArr.push({
//                             decors,
//                             target: accessor,
//                         });
//                     }

//                     const classTypeInfo: ClassTypeInfo = {
//                         decors: clsDecors,
//                         target: cls,
//                         properties: propInfoArr,
//                         methods: methodInfoArr,
//                         accessores: accessorInfoArr,
//                     };
//                     option.onProgress(
//                         build.initialOptions,
//                         classTypeInfo
//                     );
//                 }
//                 return {
//                     contents: sf.getFullText(),
//                     loader: "ts",
//                 };
//             });
//         } else {
//             return undefined;
//         }
//     });

// }

export function resolveModulePath(from: string, to: string) {
    const absosulePathParsed = path.parse(to);
    return (
        "./" +
        path.relative(
            path.join(from, ".."),
            path.join(absosulePathParsed.dir, absosulePathParsed.name)
        )
    );
}
