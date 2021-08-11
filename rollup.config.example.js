import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";

const isWatchMode = !!process.env.ROLLUP_WATCH;
/**
 * @type {import("rollup").RollupOptions}
 */
const obj = {
    input: "example/index.ts",
    output: {
        file: "example/bundle.js",
        format: "iife",
        name: "netcode",
        sourcemap: true,
    },
    watch: {
        buildDelay: 1000,
        include: ["src/**", "example/**"],
    },
    plugins: [
        cjs(),
        typescript({
            tsconfig: "./example/tsconfig.json",
            tsconfigOverride: { compilerOptions: { declaration: false } },
        }),
        terser(),
    ],
};
if (isWatchMode) {
    obj.plugins.push(
        serve({
            open: true,
            contentBase: "example",
            port: 8889,
        })
    );
}

export default obj;
