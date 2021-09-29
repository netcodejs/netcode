import builder from "esbuild";
import rimarf from "rimraf";

const timeRecord = Date.now();

rimarf("dist/", (err) => {
    if (err) {
        return console.error(err);
    }
    run();
});

const commonOption = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    define: {
        "process.env.NODE_ENV": "production",
    },
    minify: true,
    sourcemap: true,
};
function run() {
    const prom = [
        builder.buildSync({
            ...commonOption,
            format: "cjs",
            outfile: "dist/util.cjs.js",
        }),
        builder.buildSync({
            ...commonOption,
            outfile: "dist/util.esm.js",
            format: "esm",
            define: {
                "process.env.NODE_ENV": "production",
            },
        }),
    ];

    Promise.all(prom).then(() => {
        console.log(
            `Build finish! The time used is  ${Date.now() - timeRecord}ms`
        );
    });
}
