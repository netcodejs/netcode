const esbuild = require("esbuild");
const pkg = require("./package.json");

esbuild.buildSync({
    entryPoints: ["src/index.ts"],
    outdir: "lib",
    bundle: true,
    platform: "node",
    external: Object.keys(pkg.dependencies),
});
