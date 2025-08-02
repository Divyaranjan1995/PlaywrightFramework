import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import playwrightPlugin from "eslint-plugin-playwright";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        process: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      playwright: playwrightPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...playwrightPlugin.configs.recommended.rules,
      // Add any custom rules here
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": "warn",
      "playwright/expect-expect": [
        "warn",
        {
          assertFunctionNames: ["expect", "expect*", "page.waitFor*"],
        },
      ],
      "playwright/no-conditional-in-test": "off", // Turning this off as we need env var checks
    },
  },
];
