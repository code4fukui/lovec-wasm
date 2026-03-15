# lovec-wasm

Cで実装したWebAssembly(wasm)のテストプロジェクトです。

## デモ

[code4fukui.github.io/lovec-wasm/](https://code4fukui.github.io/lovec-wasm/)でデモを確認できます。

## 機能

- Cで書かれたコードをWebAssemblyにコンパイルしてブラウザで実行する
- 引数を渡して関数を呼び出し、結果を表示する

## 必要環境

- [clang](https://students-tech.blog/post/install-clang.html)のインストール
- [Deno](https://deno.com/)のインストール

## 使い方

1. `love.c`を編集する
2. `sh c.sh`を実行してWebAssemblyファイルを生成する
3. `deno run -A love.js`を実行するか、`index.html`をブラウザで開く

## ライセンス

MIT License