import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { imagetools } from "vite-imagetools";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import { VitePWA } from "vite-plugin-pwa";
import svgLoader from "vite-svg-loader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    imagetools(),
    svgLoader(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
