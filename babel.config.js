module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/proposal-class-properties", { legacy: true }],
        "babel-plugin-parameter-decorator",
    ],
};
