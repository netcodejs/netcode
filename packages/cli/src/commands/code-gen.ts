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
import * as chalk from "chalk";
import {
    PropTypeInfo,
    MethodTypeInfo,
    AccessorTypeInfo,
    ClassTypeInfo,
} from "../type-info";
import { onProgress, resolveModulePath } from "../net-type-schema";

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
            : path.join(process.cwd(), args.filePath);

        const finalOutPath = path.isAbsolute(flags.outFile!)
            ? flags.outFile!
            : path.join(process.cwd(), flags.outFile!);

        const decPaths = glob.sync(path.join(finalPath, "**/*.dec.ts"));
        this.log(chalk.bgBlueBright(decPaths.join(", ")));
        const tsconfigPathArr = glob.sync([
            path.join(finalPath, "**/tsconfig.json"),
        ]);
        if (tsconfigPathArr.length <= 0) {
            throw "Cannot find any tsconfig.json!";
        }
        const tsconfigPath = tsconfigPathArr[0];
        this.log("find taconfig: ", tsconfigPathArr);
        console.log("Use: " + tsconfigPath);

        const projectInitNow = performance.now();
        const project = new Project({
            tsConfigFilePath: tsconfigPath,
        });
        const rootDir = project.compilerOptions.get().rootDir ?? finalOutPath;

        const outFileSF = project.createSourceFile(
            path.join(rootDir, "generated.ts"),
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
        decNames
            .add("NetSerable")
            .add("NetVar")
            .add("NetArr")
            .add("Rpc")
            .add("RpcVar")
            .add("RpcArr");

        console.log(decNames);
        // real gen
        const allSFs = project.getSourceFiles();
        project.getRootDirectories;
        const funcs: OptionalKind<FunctionDeclarationStructure>[] = [];
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
        outFileSF.addFunctions(funcs);
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
        outFunctions: OptionalKind<FunctionDeclarationStructure>[],
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
                    propInfoArr.push({
                        decors: propDecors,
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

                    methodInfoArr.push({
                        decors: methodDecors,
                        target: method,
                        params: method.getParameters().map((param) => {
                            const paramDecors = param
                                .getDecorators()
                                .filter((paramDecor) =>
                                    decNames.has(paramDecor.getName())
                                );
                            return {
                                target: param,
                                decors: paramDecors,
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
                    const decors = accessor
                        .getDecorators()
                        .filter((dec) => decNames.has(dec.getName()));
                    if (decors.length <= 0) continue;
                    accessorInfoArr.push({
                        decors,
                        target: accessor,
                    });
                }

                const classTypeInfo: ClassTypeInfo = {
                    decors: clsDecors,
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
        };
    }
}
