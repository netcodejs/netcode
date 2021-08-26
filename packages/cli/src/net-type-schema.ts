import {
    ClassTypeInfo,
    PropTypeInfo,
    TypeSchema,
} from "esbuild-plugin-type-schema";
import { str2hash } from "@netcodejs/util";
import {
    Decorator,
    ExpressionedNodeStructure,
    MethodDeclarationStructure,
    StructureKind,
    VariableDeclaration,
    VariableStatementStructure,
} from "ts-morph";

export function NetTypeSchema() {
    return TypeSchema({
        onProgress(o, clsInfo) {
            const className = handleClssName(clsInfo);
            if (className == null) return;
            const hash = str2hash(className);

            if (!clsInfo.target.getMethod("ser")) {
                const props = clsInfo.properties
                    .map((p, idx) => handleProp(p, idx))
                    .filter((s) => s);
                clsInfo.target.addMethods([
                    {
                        name: "ser",
                        parameters: [{ name: "buffer" }],
                        statements: props.map((p) => {
                            const struct = {
                                kind: StructureKind.PropertySignature,
                                declarations: [],
                            };
                            return struct;
                        }),
                    },
                    { name: "deser", parameters: [{ name: "buffer" }] },
                ]);
            }
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

export function handleProp(propInfo: PropTypeInfo, index: number) {
    let netVarDecor: Decorator | null = null;
    let netArrDecor: Decorator | null = null;
    propInfo.decors.forEach((decor) => {
        if (decor.getName() === "NetVar") {
            netVarDecor = decor;
        } else if (decor.getName() === "NetArr") {
            netArrDecor = decor;
        }
    });

    const name = propInfo.target.getName();
    if (netVarDecor && netArrDecor) {
        throw `The property ${name} has both @NetVar and @NetArr!`;
    }

    if (!netVarDecor && !netArrDecor) {
        return null!;
    }

    const containerType = netArrDecor ? "arr" : "var";
    const decor = netArrDecor! ?? netVarDecor!;
    const type =
        decor.getArguments()[0]?.getText() ??
        propInfo.target.getTypeNodeOrThrow().getText();
    return {
        name,
        containerType,
        type,
    };
}
