import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";
import serve from "rollup-plugin-serve";

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
            tsconfig: "./example/tsconfig.json",
            tsconfigOverride: { compilerOptions: { declaration: false } },
        }),
        serve({
            open: true,
            contentBase: "example",
        }),
    ],
};
