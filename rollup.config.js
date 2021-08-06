import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode-runtime.cjs.js",
            format: "cjs",
        },
        plugins: [cjs(), typescript()],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode-runtime.esm.js",
            format: "es",
        },
        plugins: [cjs(), typescript()],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode-jit.cjs.js",
            format: "cjs",
        },
        plugins: [
            cjs(),
            typescript(),
            replace({
                "typeof eval && typeof Function": true,
                preventAssignment: true,
            }),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode-jit.esm.js",
            format: "es",
        },
        plugins: [
            cjs(),
            typescript(),
            replace({
                "typeof eval && typeof Function": true,
                preventAssignment: true,
            }),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/netcode.cjs.js",
            format: "cjs",
        },
        plugins: [
            cjs(),
            typescript(),
            replace({
                "typeof eval && typeof Function": false,
                preventAssignment: true,
            }),
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
            replace({
                "typeof eval && typeof Function": false,
                preventAssignment: true,
            }),
        ],
    },
];
