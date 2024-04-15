const fn = "love.wasm";
const wasmbin = new Uint8Array(await Deno.readFile(fn));
const wasm = await WebAssembly.instantiate(wasmbin);
const love = wasm.instance.exports.love;

console.log(love(Deno.args[0]));
