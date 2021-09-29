import { Command, flags } from "@oclif/command";
import * as path from "path";
import * as glob from "fast-glob";
import { createMD5, md5 } from "hash-wasm";
import * as fs from "fs";
import { Deferred } from "@netcodejs/util";
import { performance } from "perf_hooks";
import {
    FunctionDeclarationStructure,
    ImportDeclarationStructure,
    InterfaceDeclarationStructure,
    ModuleDeclarationStructure,
    OptionalKind,
    Project,
    SourceFile,
    StructureKind,
    WriterFunction,
} from "ts-morph";
import chalk from "chalk";
import {
    PropTypeInfo,
    MethodTypeInfo,
    AccessorTypeInfo,
    ClassTypeInfo,
    DecoratorMap,
    pushDecorator,
} from "../type-info";
import { onProgress, resolveModulePath } from "../net-type-schema";
import normalizePath from "normalize-path";

function pathJoin(...args: string[]) {
    return normalizePath(path.join(...args));
}

export default class CodeGen extends Command {
    static description = "describe the command here";

    static examples = [
        `$ netcode-cli code-gen
`,
    ];

    static flags = {
        help: flags.help({ char: "h" }),
        outFile: flags.string({ char: "O" }),
    };

    static args = [{ name: "filePath" }];

    async run() {
        const { args, flags } = this.parse(CodeGen);
        if (!flags.outFile) {
            flags.outFile = args.filePath;
        }
        const finalPath = path.isAbsolute(args.filePath)
            ? args.filePath
            : pathJoin(process.cwd(), args.filePath);

        const finalOutPath = path.isAbsolute(flags.outFile!)
            ? flags.outFile!
            : pathJoin(process.cwd(), flags.outFile!);

        const decPaths = glob.sync(pathJoin(finalPath, "**/*.dec.ts"));
        this.log(chalk.bgBlueBright(decPaths.join(", ")));
        const tsconfigPathArr = glob.sync([
            pathJoin(finalPath, "**/tsconfig.json"),
        ]);
        if (tsconfigPathArr.length <= 0) {
            this.error("Cannot find any tsconfig.json!", { exit: 1 });
            return;
        }
        const tsconfigPath = tsconfigPathArr[0];
        this.log("find taconfig: ", tsconfigPathArr);
        this.log("Use: " + tsconfigPath);

        const projectInitNow = performance.now();
        const project = new Project({
            tsConfigFilePath: tsconfigPath,
        });
        const rootDir = project.compilerOptions.get().rootDir ?? finalOutPath;

        const outFileSF = project.createSourceFile(
            pathJoin(rootDir, "generated.ts"),
            "// AUTO GENERAOTE!, PLZ DONT EDIT!!",
            {
                overwrite: true,
            }
        );

        const decNames = new Set<string>();
        // collect dec decorator
        // for (let sfPath of decPaths) {
        //     project.forgetNodesCreatedInBlock((remember) => {
        //         const sf = project.getSourceFile(sfPath);
        //         if (!sf) return;
        //         CodeGen.collectDecorator(decNames, sf);
        //     });
        // }
        decNames.add("Serable").add("Var").add("Rpc");

        console.log(decNames);
        // real gen
        const allSFs = project.getSourceFiles();
        project.getRootDirectories;
        const funcs: WriterFunction[] = [];
        const imports: Map<string, Set<string>> = new Map();
        const modules: OptionalKind<ModuleDeclarationStructure>[] = [];
        for (let sf of allSFs) {
            if (sf.isDeclarationFile() || sf.isInNodeModules()) continue;
            console.log(sf.getFilePath());
            project.forgetNodesCreatedInBlock((remember) => {
                const importClr = sf.getImportDeclaration((clr) => {
                    return clr
                        .getNamedImports()
                        .some((named) => decNames.has(named.getName()));
                });
                if (importClr) {
                    outFileSF.addStatements(
                        CodeGen.gen(
                            sf,
                            decNames,
                            outFileSF,
                            funcs,
                            imports,
                            modules
                        )
                    );
                }
            });
        }

        outFileSF.addModules(modules);
        outFileSF.addStatements(funcs);
        outFileSF.addImportDeclarations(
            Array.from(imports.entries()).map(([key, nameds]) => {
                return {
                    moduleSpecifier: key,
                    namedImports: Array.from(nameds),
                };
            })
        );

        this.log(
            chalk.green(
                `Project done in ${Math.round(
                    performance.now() - projectInitNow
                )}ms`
            )
        );

        outFileSF.saveSync();
    }

    static async genMD5(paths: string[]) {
        const now = performance.now();

        const md5 = await createMD5();
        const filesHash: string[] = [];
        filesHash.length = paths.length;
        for (let i = 0; i < paths.length; i++) {
            const p = paths[i];
            const defer = new Deferred<string>();
            const stream = fs.createReadStream(p, { autoClose: true });
            md5.init();
            stream.on("data", (data) => {
                md5.update(data);
            });
            stream.on("end", () => {
                defer.resolve(md5.digest("hex"));
            });
            filesHash[i] = await defer.promise;
        }
        console.log(
            chalk.green(
                `Hash done coats ${Math.round(performance.now() - now)}ms`
            )
        );

        return filesHash;
    }

    static collectDecorator(decNames: Set<string>, sf: SourceFile) {
        sf.getFunctions()
            .filter(
                (func) =>
                    func.isExported ||
                    func.isNamedExport ||
                    func.isDefaultExport
            )
            .forEach((func) => {
                decNames.add(func.getNameOrThrow());
            });
        sf.getVariableDeclarations()
            .filter(
                (varr) =>
                    varr.isExported ||
                    varr.isNamedExport ||
                    varr.isDefaultExport
            )
            .forEach((varr) => {
                decNames.add(varr.getName());
            });
    }

    static gen(
        sf: SourceFile,
        decNames: Set<string>,
        outSF: SourceFile,
        outFunctions: WriterFunction[],
        outImports: Map<string, Set<string>>,
        outModules: OptionalKind<ModuleDeclarationStructure>[]
    ): WriterFunction {
        return (writer) => {
            const classes = sf.getClasses();
            const relativePath = outSF.getRelativePathAsModuleSpecifierTo(sf);
            const interfaces: OptionalKind<InterfaceDeclarationStructure>[] =
                [];
            for (const cls of classes) {
                const clsDecors = cls
                    .getDecorators()
                    .filter((decor) => decNames.has(decor.getName()));
                if (clsDecors.length <= 0) continue;
                const props = cls.getProperties();
                const propInfoArr: PropTypeInfo[] = [];
                for (const prop of props) {
                    const propDecors = prop
                        .getDecorators()
                        .filter((propDecor) =>
                            decNames.has(propDecor.getName())
                        );
                    if (propDecors.length <= 0) continue;
                    const decors: DecoratorMap = {};
                    for (let dec of propDecors) {
                        pushDecorator(decors, dec);
                    }
                    propInfoArr.push({
                        decors,
                        target: prop,
                    });
                }

                const methods = cls.getMethods();
                const methodInfoArr: MethodTypeInfo[] = [];
                for (const method of methods) {
                    const methodDecors = method
                        .getDecorators()
                        .filter((methodDecor) =>
                            decNames.has(methodDecor.getName())
                        );
                    if (methodDecors.length <= 0) continue;

                    const decors: DecoratorMap = {};
                    for (let dec of methodDecors) {
                        pushDecorator(decors, dec);
                    }
                    methodInfoArr.push({
                        decors,
                        target: method,
                        params: method.getParameters().map((param) => {
                            const paramDecors = param
                                .getDecorators()
                                .filter((paramDecor) =>
                                    decNames.has(paramDecor.getName())
                                );
                            const decors: DecoratorMap = {};
                            for (let dec of paramDecors) {
                                pushDecorator(decors, dec);
                            }
                            return {
                                target: param,
                                decors,
                            };
                        }),
                    });
                }

                const accessores = [
                    ...cls.getGetAccessors(),
                    ...cls.getSetAccessors(),
                ];
                const accessorInfoArr: AccessorTypeInfo[] = [];
                for (const accessor of accessores) {
                    const accessorDecors = accessor
                        .getDecorators()
                        .filter((dec) => decNames.has(dec.getName()));
                    if (accessorDecors.length <= 0) continue;
                    const decors: DecoratorMap = {};
                    for (let dec of accessorDecors) {
                        pushDecorator(decors, dec);
                    }
                    accessorInfoArr.push({
                        decors,
                        target: accessor,
                    });
                }

                const decors: DecoratorMap = {};
                for (let dec of clsDecors) {
                    pushDecorator(decors, dec);
                }
                const classTypeInfo: ClassTypeInfo = {
                    decors,
                    target: cls,
                    properties: propInfoArr,
                    methods: methodInfoArr,
                    accessores: accessorInfoArr,
                };

                const currentFileNamed2Module = {} as Record<string, string>;
                sf.getImportDeclarations().forEach((clr) => {
                    clr.getNamedImports().forEach((specifier) => {
                        if (!clr.isModuleSpecifierRelative()) {
                            currentFileNamed2Module[specifier.getName()] =
                                clr.getModuleSpecifierValue();
                        } else {
                            currentFileNamed2Module[specifier.getName()] =
                                outSF.getRelativePathAsModuleSpecifierTo(
                                    clr.getModuleSpecifierSourceFileOrThrow()
                                );
                        }
                    });
                });

                onProgress(
                    {
                        currentModuleSpecifier: relativePath,
                        currentFileNamed2Module,
                    },
                    classTypeInfo,
                    outFunctions,
                    interfaces,
                    outImports,
                    writer
                );
            }

            if (interfaces.length > 0) {
                outModules.push({
                    name: JSON.stringify(relativePath),
                    hasDeclareKeyword: true,
                    statements: interfaces.map((inter) => {
                        return {
                            kind: StructureKind.Interface,
                            ...inter,
                        };
                    }),
                });
            }
        };
    }
}
