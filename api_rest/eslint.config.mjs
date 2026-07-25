import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js
    },
    extends: [
      "js/recommended"
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    // 💡 AS REGRAS QUE O PROFESSOR PASSAR ENTRAM AQUI:
    rules: {
      "no-console": "off",
      "semi": ["error", "always"],
      "class-methods-use-this": "off"
    }
  }
]);
