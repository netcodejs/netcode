const loader = require("@assemblyscript/loader");
const imports = {};
const wasmUrl = require("../build/example.wasm");
const wasmMapUrl = require("../build/example.wasm.map");
console.log(wasmMapUrl);

async function main() {
    const exports = (await loader.instantiateStreaming(fetch(wasmUrl), imports))
        .exports;
    console.log(exports.ecsTest());
}

main();
