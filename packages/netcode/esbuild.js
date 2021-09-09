const builder = require("esbuild");
const rimarf = require("rimraf");

const timeRecord = Date.now();
const pkg = require("./package.json");

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

const commonOption = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    define: {
        ...commonDefine,
        "process.env.NODE_ENV": "production",
    },
    sourcemap: true,
    external: Object.keys(pkg.dependencies),
    // minify: true,
    plugins: [],
};

function run() {
    const prom = [
        // builder.buildSync({
        //     entryPoints: ["src/index.ts"],
        //     bundle: true,
        //     format: "cjs",
        //     outfile: "dist/netcodejs.dev.cjs.js",
        //     define: {
        //         ...commonDefine,
        //         "process.env.NODE_ENV": "development",
        //     },
        //     sourcemap: true,
        // }),
        builder.build({
            ...commonOption,
            format: "cjs",
            outfile: "dist/netcodejs.prod.cjs.js",
        }),
        builder.build({
            ...commonOption,
            format: "esm",
            outfile: "dist/netcodejs.esm.js",
        }),
    ];

    Promise.all(prom)
        .then(() => {
            console.log(
                `Build finish! The time used is  ${Date.now() - timeRecord}ms`
            );
        })
        .catch((e) => {
            console.error(e);
            process.exit(1);
        });
}
