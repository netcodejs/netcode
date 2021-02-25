import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.cjs.js",
            format: "cjs",
        },
        plugins: [cjs(), typescript()],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.esm.js",
            format: "es",
        },
        plugins: [cjs(), typescript()],
    },
];
