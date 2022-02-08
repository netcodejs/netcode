import builder from "esbuild";
import rimarf from "rimraf";

const ensureJIT = process.env.ENSURE_JIT && JSON.parse(process.env.ENSURE_JIT);

const commonDefine = {
    "process.env.ENABLE_JIT": !!ensureJIT,
    "process.env.DISABLE_RUNTIME_JIT": typeof ensureJIT !== "undefined",
};

console.log(commonDefine);

const commonOption = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    define: {
        ...commonDefine,
        "process.env.NODE_ENV": "production",
    },
    sourcemap: true,
    external: ["@netcodejs/util", "@netcode/loki-buffer"],
    minify: true,
};

async function run() {
    await rimarf.sync("dist/");
    await Promise.all([
        builder.buildSync({
            ...commonOption,
            format: "cjs",
            outfile: "dist/netcodejs.prod.cjs.js",
        }),
        builder.buildSync({
            ...commonOption,
            format: "esm",
            outfile: "dist/netcodejs.esm.js",
        }),
    ]);
}

run();
