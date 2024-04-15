clang -Wno-all --target=wasm32 -nostdlib -Wl,--no-entry -Wl,--export=love -Wl,--allow-undefined love.c -o love.wasm
