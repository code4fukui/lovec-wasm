clang --target=wasm32 -nostdlib -Wl,--no-entry -Wl,--export=love -Wl,--export=love2 -Wl,--allow-undefined love.c -o love.wasm
