const { buildSync } = require("esbuild");

const common = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    external: ["netcodejs"],
};
buildSync({
    ...common,
    outfile: "dist/string-data-buffer.cjs.js",
    format: "cjs",
});

buildSync({
    ...common,
    outfile: "dist/string-data-buffer.esm.js",
    format: "esm",
});
