import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { imagetools } from "vite-imagetools";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        imagetools(),
        VueI18nPlugin(
            {
                /* options */
                // locale messages resource pre-compile option
                include: resolve(
                    dirname(fileURLToPath(import.meta.url)),
                    "./src/locales/**"
                ),
            },
            VitePWA({ registerType: "autoUpdate" })
        ),
    ],

    alias: {
        "@": path.resolve(__dirname, "src"),
    },
});
