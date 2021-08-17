const builder = require("esbuild");

const commonDefine = {
    "process.env.ENABLE_JIT": false,
    "process.env.DISABLE_RUNTIME_JIT": false,
};

builder.buildSync({
    entryPoints: ["example/index.ts"],
    bundle: true,
    format: "iife",
    outfile: "example/bundle.js",
    define: {
        ...commonDefine,
        "process.env.NODE_ENV": "production",
    },
    globalName: "netcode",
    sourcemap: true,
});
