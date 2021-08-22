import { PluginBuild, Plugin, build as esbuild } from "esbuild";
import { Project } from "ts-morph";
import { ClassTypeInfo, MethodTypeInfo, PropTypeInfo } from "./type-info";
import * as fs from "fs";
import * as path from "path";

function safeParse(str: string) {
    try {
        return JSON.parse(str);
    } catch {}
    return null;
}

export function TypeInfo() {
    const plugin = {
        name: "typeinfo",
        async setup(build: PluginBuild) {
            const decFiles = new Set<string>();
            const decNames = new Set<string>();
            const handingFiles = new Set<string>();
            const classTypeInfoArr: ClassTypeInfo[] = [];
            const project = new Project();
            await esbuild({
                entryPoints: build.initialOptions.entryPoints,
                bundle: true,
                plugins: [
                    {
                        name: "get-idep",
                        setup(build: PluginBuild) {
                            build.onResolve({ filter: /.dec$/ }, (args) => {
                                handingFiles.add(args.importer);
                                return undefined;
                            });
                            build.onLoad({ filter: /.dec.ts$/ }, (args) => {
                                decFiles.add(args.path);
                                return undefined;
                            });
                        },
                    },
                ],
                write: false,
            });
            for (let decFile of decFiles) {
                const s = project.addSourceFileAtPathIfExists(decFile);
                if (s) {
                    [
                        ...s.getVariableDeclarations(),
                        ...s.getFunctions(),
                    ].forEach((clr) => {
                        if (
                            !(
                                clr.isExported ||
                                clr.isNamedExport ||
                                clr.isDefaultExport
                            )
                        )
                            return;

                        decNames.add(clr.getName()!);
                    });
                }
            }
            console.log(decNames);

            build.onLoad({ filter: /.*/ }, async (args) => {
                if (!handingFiles.has(args.path)) return;
                console.log(`handle file: ${args.path}`);
                const sourceFile = project.addSourceFileAtPathIfExists(
                    args.path
                )!;
                sourceFile.getClasses().forEach((clr) => {
                    const expected = ["auto", "cls"];
                    const decor =
                        clr.getDecorator((clr) =>
                            expected.some((str) => str === clr.getName())
                        ) ?? clr.getDecorator("cls");
                    let className;
                    const propTypeArr: PropTypeInfo[] = [];
                    if (decor) {
                        className =
                            safeParse(decor.getArguments()[0]?.getText()) ??
                            clr.getName();
                        decor.remove();
                    }
                    clr.getProperties().forEach((pclr) => {
                        const pexpected = ["auto", "prop"];
                        const pdecor = pclr.getDecorator((dec) =>
                            pexpected.some((str) => str === dec.getName())
                        );
                        if (!pdecor) return;
                        const propTypeName =
                            pdecor.getArguments()[0]?.getText() ??
                            pclr.getTypeNode()?.getText();
                        propTypeArr.push({
                            name: pclr.getName(),
                            type: propTypeName,
                        });
                        pdecor.remove();
                    });

                    const methodTypeArr: MethodTypeInfo[] = [];
                    clr.getMethods().forEach((mclr) => {
                        const mexpected = ["auto", "method"];
                        const mdecor = mclr.getDecorator((dec) =>
                            mexpected.some((str) => str === dec.getName())
                        );
                        if (!mdecor) return;
                        const name =
                            safeParse(mdecor.getArguments()[0]?.getText()) ??
                            mclr.getName();
                        const returnName = mclr.getReturnType().getText();
                        const arugTypeArr = mclr.getParameters().map((pclr) => {
                            const pdecor = pclr.getDecorator("param");
                            const o =
                                safeParse(
                                    pdecor?.getArguments()[0].getText()!
                                ) ?? pclr.getType().getText();

                            pdecor?.remove();

                            return o;
                        });
                        methodTypeArr.push({
                            name,
                            arguments: arugTypeArr,
                            return: returnName,
                        });
                        mdecor.remove();
                    });

                    if (className) {
                        const staticObj = {
                            name: className,
                            properties: propTypeArr,
                            methods: methodTypeArr,
                        };
                        clr.addProperty({
                            isStatic: true,
                            name: "__schema__",
                            initializer: JSON.stringify(staticObj),
                        });
                        classTypeInfoArr.push(staticObj);
                    }
                });

                const text = sourceFile.getText();
                return {
                    contents: text,
                    loader: "ts",
                };
            });

            build.onEnd(() => {
                classTypeInfoArr.forEach((t) => {
                    console.log("name: ", t.name);
                    console.log("props: ", t.properties);
                    console.log("methods: ", t.methods);
                    console.log("\n\r");
                });
                const outPath = path.join(process.cwd(), "./type-info.json");
                fs.writeFileSync(
                    outPath,
                    JSON.stringify(classTypeInfoArr, undefined, 4)
                );
            });
        },
    } as Plugin;

    return plugin;
}
