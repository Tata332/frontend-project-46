import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      globals: { 
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      } 
    },
    plugins: { jest },
    rules: jest.configs.recommended.rules,
  },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
]);
