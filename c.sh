clang --target=wasm32 -nostdlib -Wl,--no-entry -Wl,--export=love love.c -o love.wasm
