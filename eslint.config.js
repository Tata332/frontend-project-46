import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      globals: { 
        ...globals.browser, // Оставляем поддержку браузера
        ...globals.node, // Добавляем поддержку Node.js
      } 
    } 
  },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
]);
