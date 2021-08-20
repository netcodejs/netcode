const builder = require("esbuild");
const rimarf = require("rimraf");

const timeRecord = Date.now();

rimarf("dist/", (err) => {
    if (err) {
        return console.error(err);
    }
    run();
});
function run() {
    const prom = [
        builder.buildSync({
            entryPoints: ["src/index.ts"],
            bundle: true,
            format: "cjs",
            outfile: "dist/util.cjs.js",
            define: {
                "process.env.NODE_ENV": "production",
            },
            minify: true,
            sourcemap: true,
        }),
        builder.buildSync({
            entryPoints: ["src/index.ts"],
            bundle: true,
            format: "esm",
            outfile: "dist/util.esm.js",
            define: {
                "process.env.NODE_ENV": "production",
            },
            sourcemap: true,
            minify: true,
        }),
    ];

    Promise.all(prom).then(() => {
        console.log(
            `Build finish! The time used is  ${Date.now() - timeRecord}ms`
        );
    });
}
