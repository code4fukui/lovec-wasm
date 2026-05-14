# lovec-wasm

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple example of compiling C to WebAssembly (Wasm) and running it in a web browser or with Deno.

## Demo

Try the live demo in your browser:

**[https://code4fukui.github.io/lovec-wasm/](https://code4fukui.github.io/lovec-wasm/)**

The demo allows you to input a number, and it will use the Wasm module to add 1 to it.

## Features

- Compiles a simple C function (`love.c`) to a WebAssembly module (`love.wasm`).
- Demonstrates how to call the Wasm function from JavaScript in two different environments:
  - A web browser (`index.html`)
  - The Deno runtime (`love.js`)

## Local Usage

### Prerequisites

- [clang](https://students-tech.blog/post/install-clang.html)
- [Deno](https://deno.com/)

### 1. Build

Run the build script to compile the C code into a WebAssembly module. This command uses `clang` to generate `love.wasm`.

```sh
sh c.sh
```

### 2. Run

You can run the compiled Wasm module in two ways:

**A) In the Browser**

Open the local `index.html` file in your web browser.

**B) With Deno**

Execute the Deno script from your terminal, passing a number as a command-line argument.

```sh
deno run -A love.js 41
```

Expected output:
```
42
```

## License

MIT License — see [LICENSE](LICENSE).