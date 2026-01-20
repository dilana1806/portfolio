import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // ⚠️ Обязательно — говорит Vite, что проект МУЛЬТИСТРАНИЧНЫЙ,
  // и нужно отдавать каждый HTML отдельно, без кеширования
  appType: "mpa",

   base: "./",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "index-en.html"),
        fr: resolve(__dirname, "index-fr.html"),
        ro: resolve(__dirname, "index-ro.html"),
      },
    },

    // Можно убрать — Vite сам создаёт dist/
    outDir: "dist",
  },
});