const loader = require("@assemblyscript/loader");
const fs = require("fs");
const { WASI } = require("wasi");
const wasi = new WASI();
const imports = {
    wasi_snapshot_preview1: wasi.wasiImport,
};

async function main() {
    const result = loader.instantiateSync(
        fs.readFileSync(__dirname + "/build/example.wasm"),
        imports
    );
    wasi.start(result.instance);
    const exports = result.exports;
    console.log(exports.ecsTest());
}

main();
