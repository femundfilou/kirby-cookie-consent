/// <reference types="vitest" />

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// Isomorphic dirname
const _dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

// Config
export default defineConfig({
  build: {
    lib: {
      entry: resolve(_dirname, "src/index.ts"),
      name: "CookieConsentComponent",
      fileName: (format) => { return `cookie-consent.${format === 'es' ? 'mjs' : 'js' }`; },
      formats: ["es", "umd"],
    },
    outDir: resolve(__dirname, 'assets/js')
  },
  plugins: [svelte({ hot: !process.env.VITEST }), cssInjectedByJsPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
