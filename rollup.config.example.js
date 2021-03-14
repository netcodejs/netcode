import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";

export default {
    input: "example/index.ts",
    output: {
        file: "example/bundle.js",
        format: "iife",
        name: "StateSync",
    },
    plugins: [
        cjs(),
        typescript({
            tsconfigOverride: { compilerOptions: { declaration: false } },
        }),
    ],
};
