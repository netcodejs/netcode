import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.cjs.js",
            format: "cjs",
            sourcemap: true,
        },
        plugins: [
            cjs(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: true,
                    },
                },
            }),
            terser(),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.esm.js",
            format: "es",
            sourcemap: true,
        },
        plugins: [
            cjs(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: true,
                    },
                },
            }),
            terser(),
        ],
    },
];
