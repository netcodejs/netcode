// interface TsdxOptions {
//     // path to file
//     input: string;
//     // Name of package
//     name: string;
//     // JS target
//     target: "node" | "browser";
//     // Module format
//     format: "cjs" | "umd" | "esm" | "system";
//     // Environment
//     env: "development" | "production";
//     // Path to tsconfig file
//     tsconfig?: string;
//     // Is error extraction running?
//     extractErrors?: boolean;
//     // Is minifying?
//     minify?: boolean;
//     // Is this the very first rollup config (and thus should one-off metadata be extracted)?
//     writeMeta?: boolean;
//     // Only transpile, do not type check (makes compilation faster)
//     transpileOnly?: boolean;
// }
const replace = require("@rollup/plugin-replace");
module.exports = {
    rollup(config, options) {
        config.plugins.push(
            replace({
                preventAssignment: true,
                [CONFIG_JIT_REPLACE_STR]: false,
            })
        );
        console.log(config);
        return config;
    },
};
