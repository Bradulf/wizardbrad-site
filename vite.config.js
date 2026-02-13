import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        archive: resolve(__dirname, "field-notes/index.html"),
        note001: resolve(__dirname, "field-notes/001-the-sigil/index.html"),
      },
    },
  },
});
