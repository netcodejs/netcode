const esbuild = require("esbuild");

esbuild.buildSync({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.web.js",
    format: "iife",
    globalName: "necs",
    // minify: true,
});
