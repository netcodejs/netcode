const loader = require("@assemblyscript/loader");
const imports = {};
const wasmUrl = require("../build/untouched.wasm");
const wasmMapUrl = require("../build/untouched.wasm.map");
console.log(wasmMapUrl);

async function main() {
    const wasmModule = (
        await loader.instantiateStreaming(fetch(wasmUrl), imports)
    ).exports;
    console.log(wasmModule.ecsTest());
}

main();
