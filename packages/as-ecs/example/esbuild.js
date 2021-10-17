const esbuild = require("esbuild");
const fs = require("fs");

esbuild.serve(
    {
        port: 8889,
        servedir: __dirname + "/www",
        onRequest: console.log,
    },
    {
        entryPoints: {
            "js/index": __dirname + "/index.js",
        },
        loader: {
            ".wasm": "file",
            ".wasm.map": "file",
        },
        outdir: __dirname + "/www",
        bundle: true,
        assetNames: "[name]",
    }
);
