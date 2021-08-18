import builder from "esbuild";
import rimarf from "rimraf";

const ensureJIT = process.env.ENSURE_JIT && JSON.parse(process.env.ENSURE_JIT);

const commonDefine = {
    "process.env.ENABLE_JIT": !!ensureJIT,
    "process.env.DISABLE_RUNTIME_JIT": typeof ensureJIT !== "undefined",
};

console.log(commonDefine);

async function run() {
    const timeRecord = Date.now();

    await rimarf.sync("dist/");
    await Promise.all([
        builder.buildSync({
            entryPoints: ["src/index.ts"],
            bundle: true,
            format: "cjs",
            outfile: "dist/netcodejs.prod.cjs.js",
            define: {
                ...commonDefine,
                "process.env.NODE_ENV": "production",
            },
            minify: true,
            sourcemap: true,
        }),
        builder.buildSync({
            entryPoints: ["src/index.ts"],
            bundle: true,
            format: "esm",
            outfile: "dist/netcodejs.esm.js",
            define: {
                ...commonDefine,
                "process.env.NODE_ENV": "production",
            },
            sourcemap: true,
            minify: true,
        }),
    ]);
    `Build finish! The time used is  ${Date.now() - timeRecord}ms`;
}

run();
