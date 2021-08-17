const builder = require("esbuild");
const rimarf = require("rimraf");

const timeRecord = Date.now();

rimarf("dist/", (err) => {
    if (err) {
        return console.error(err);
    }
    run();
});

const ensureJIT = process.env.ENSURE_JIT && JSON.parse(process.env.ENSURE_JIT);

const commonDefine = {
    "process.env.ENABLE_JIT": !!ensureJIT,
    "process.env.DISABLE_RUNTIME_JIT": typeof ensureJIT !== "undefined",
};

console.log(commonDefine);

function run() {
    const prom = [
        builder.buildSync({
            entryPoints: ["src/index.ts"],
            bundle: true,
            format: "cjs",
            outfile: "dist/netcodejs.dev.cjs.js",
            define: {
                ...commonDefine,
                "process.env.NODE_ENV": "development",
            },
        }),
        builder.buildSync({
            entryPoints: ["src/index.ts"],
            bundle: true,
            format: "cjs",
            outfile: "dist/netcodejs.prod.cjs.js",
            define: {
                ...commonDefine,
                "process.env.NODE_ENV": "production",
            },
            minify: true,
        }),
        builder.buildSync({
            entryPoints: ["src/index.ts"],
            bundle: true,
            format: "esm",
            outfile: "dist/netcodejs.esm.js",
            define: {
                ...commonDefine,
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
