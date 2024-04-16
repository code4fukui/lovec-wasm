const fn = "love.wasm";
const wasmbin = new Uint8Array(await Deno.readFile(fn));
const importObject = {
  env: {
    putchar: (n) => {
      console.log("putchar:", n, String.fromCharCode(n));
    },
  }
};
const wasm = await WebAssembly.instantiate(wasmbin, importObject);
const love = wasm.instance.exports.love;
const love2 = wasm.instance.exports.love2;

console.log(love(Deno.args[0]));
console.log(love2(Deno.args[0]));
