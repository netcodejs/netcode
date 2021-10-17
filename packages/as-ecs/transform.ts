import { Transform } from "assemblyscript/cli/transform";
import {
    Parser,
    DiagnosticCode,
    ExpressionRef,
    Type,
    Constraints,
} from "assemblyscript";
import { BuiltinContext } from "assemblyscript/src/builtins";

/** Evaluates the constant type of a type argument *or* expression. */
function evaluateConstantType(ctx: BuiltinContext): Type | null {
    var compiler = ctx.compiler;
    var operands = ctx.operands;
    var typeArguments = ctx.typeArguments;
    if (operands.length == 0) {
        // requires type argument
        if (!typeArguments || typeArguments.length != 1) {
            compiler.error(
                DiagnosticCode.Expected_0_type_arguments_but_got_1,
                ctx.reportNode.typeArgumentsRange,
                "1",
                typeArguments ? typeArguments.length.toString() : "0"
            );
            return null;
        }
        return typeArguments[0];
    }
    if (operands.length == 1) {
        // optional type argument
        if (typeArguments !== null && typeArguments.length > 0) {
            if (typeArguments.length > 1) {
                compiler.error(
                    DiagnosticCode.Expected_0_type_arguments_but_got_1,
                    ctx.reportNode.typeArgumentsRange,
                    "1",
                    typeArguments.length.toString()
                );
                return null;
            }
            compiler.compileExpression(
                operands[0],
                typeArguments[0],
                Constraints.CONV_IMPLICIT
            );
        } else {
            compiler.compileExpression(operands[0], Type.auto);
        }
        return compiler.currentType;
    }
    if (typeArguments !== null && typeArguments.length > 1) {
        compiler.error(
            DiagnosticCode.Expected_0_type_arguments_but_got_1,
            ctx.reportNode.typeArgumentsRange,
            "1",
            typeArguments.length.toString()
        );
    }
    compiler.error(
        DiagnosticCode.Expected_0_arguments_but_got_1,
        ctx.reportNode.argumentsRange,
        "1",
        operands.length.toString()
    );
    return null;
}

const familyMap = new Map<string, number>();
let familyCount = 0;
function builtin_familyof(ctx: BuiltinContext): ExpressionRef {
    var compiler = ctx.compiler;
    var module = compiler.module;
    var type = evaluateConstantType(ctx);
    compiler.currentType = Type.u32;
    if (!type) return module.unreachable();
    let signatureReference = type.getSignature();
    if (signatureReference) {
        return module.i32(signatureReference.id);
    }
    let classReference = type.getClassOrWrapper(compiler.program);
    if (classReference !== null) {
        let familyId = familyMap.get(classReference.internalName);
        if (familyId == null) {
            familyId = familyCount++;
            familyMap.set(classReference.internalName, familyId);
        }
        return module.i32(familyId);
    }
    compiler.error(
        DiagnosticCode.Operation_0_cannot_be_applied_to_type_1,
        ctx.reportNode.typeArgumentsRange,
        "idof",
        type.toString()
    );
    return module.unreachable();
}

class FamilyOfTransform extends Transform {
    afterParse(_parser: Parser): void {
        this.program.builtins.set(
            "assembly/builtins/familyof",
            builtin_familyof
        );
    }
}

// @ts-ignore
export = FamilyOfTransform;
