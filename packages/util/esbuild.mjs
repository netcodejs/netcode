import builder from "esbuild";
import rimarf from "rimraf";

rimarf("dist/", (err) => {
    if (err) {
        return console.error(err);
    }
    const commonOption = {
        entryPoints: ["src/index.ts"],
        bundle: true,
        define: {
            "process.env.NODE_ENV": "production",
        },
        // minify: true,
        sourcemap: true,
    };

    builder.buildSync({
        ...commonOption,
        format: "cjs",
        outfile: "dist/util.cjs.js",
    }),
    builder.buildSync({
        ...commonOption,
        format: "esm",
        outfile: "dist/util.esm.js",
    });
});
