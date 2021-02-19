import typescript from 'rollup-plugin-typescript2'

export default {
    input: "src/index.ts",
    output: {
        file: "dist/netcode.js",
        format: "es"
    },
    plugins: [typescript()]
}