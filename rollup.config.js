import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.cjs.js",
            format: "cjs",
        },
        plugins: [cjs(), typescript(), terser()],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.esm.js",
            format: "es",
        },
        plugins: [cjs(), typescript(), terser()],
    },
];
