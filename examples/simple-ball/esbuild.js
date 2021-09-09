const { buildSync } = require("esbuild");
const rimraf = require("rimraf");
rimraf.sync("./dist");
buildSync({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "browser",
    outfile: "dist/netcode.js",
    globalName: "netcode",
});
