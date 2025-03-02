import pluginVue from "eslint-plugin-vue"
import vueTsEslintConfig from "@vue/eslint-config-typescript"

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  ...pluginVue.configs["flat/essential"],
  ...vueTsEslintConfig(),
  {
    name: "eslint:recommended",
  },
  {
    name: "prettier",
  },
  {
    rules: {
      semi: ["error", "never"],
      "vue/multi-word-component-names": 0,
      "@typescript-eslint/no-require-imports": 0,
      "@typescript-eslint/no-unsafe-function-type": 0,
      "@typescript-eslint/no-explicit-any": 0,
    },
  },
]
