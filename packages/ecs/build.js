const esbuild = require("esbuild");
const { dtsPlugin } = require("esbuild-plugin-d.ts");
const rimarf = require("rimraf");

const common = {
    entryPoints: ["src/index.ts"],
    bundle: true,
};
async function run() {
    rimarf.sync("dist");
    await Promise.all([
        esbuild.build({
            ...common,
            outfile: "dist/index.mjs",
            format: "esm",
        }),
        esbuild.build({
            ...common,
            outdir: "dist",
            format: "cjs",
            plugins: [
                dtsPlugin({
                    outdir: "dist",
                }),
            ],
        }),
    ]);
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
