import builder from "esbuild";
import rimarf from "rimraf";

const commonOption = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    sourcemap: true,
    // external: ["@netcodejs/util", "@netcode/loki-buffer"],
    // minify: true,
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
