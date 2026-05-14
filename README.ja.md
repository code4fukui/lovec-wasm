# lovec-wasm

C言語をWebAssembly (Wasm) にコンパイルし、WebブラウザやDenoで実行するシンプルな例です。

## デモ

ブラウザでライブデモをお試しください:

**[https://code4fukui.github.io/lovec-wasm/](https://code4fukui.github.io/lovec-wasm/)**

このデモでは、数値を入力するとWasmモジュールを使用して1を加算します。

## 特徴

- シンプルなC言語の関数（`love.c`）をWebAssemblyモジュール（`love.wasm`）にコンパイルします。
- 以下の2つの異なる環境で、JavaScriptからWasm関数を呼び出す方法を示します:
  - Webブラウザ（`index.html`）
  - Denoランタイム（`love.js`）

## ローカルでの使用方法

### 前提条件

- [clang](https://students-tech.blog/post/install-clang.html)
- [Deno](https://deno.com/)

### 1. ビルド

ビルドスクリプトを実行して、C言語のコードをWebAssemblyモジュールにコンパイルします。このコマンドは `clang` を使用して `love.wasm` を生成します。

```sh
sh c.sh
```

### 2. 実行

コンパイルされたWasmモジュールは、以下の2つの方法で実行できます:

**A) ブラウザで実行**

ローカルの `index.html` ファイルをWebブラウザで開きます。

**B) Denoで実行**

ターミナルからDenoスクリプトを実行し、コマンドライン引数として数値を渡します。

```sh
deno run -A love.js 41
```

期待される出力:
```
42
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
