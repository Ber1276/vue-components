/// <reference types="vitest"/>

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueDevTools from "vite-plugin-vue-devtools"
import postcssPresetEnv from "postcss-preset-env"
// const postcssEach = require("postcss-each")
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
