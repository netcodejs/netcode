import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

const CONFIG_JIT_REPLACE_STR = `Config.JIT`;
export default [
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.cjs.js",
            format: "cjs",
        },
        plugins: [
            cjs(),
            typescript(),
            replace(
                {
                    preventAssignment: true,
                    [CONFIG_JIT_REPLACE_STR]: false,
                },
                terser()
            ),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.esm.js",
            format: "es",
        },
        plugins: [
            cjs(),
            typescript(),
            replace(
                {
                    preventAssignment: true,
                    [CONFIG_JIT_REPLACE_STR]: false,
                },
                terser()
            ),
        ],
    },
];
