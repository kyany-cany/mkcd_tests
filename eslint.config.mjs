import js from "@eslint/js";
import customRules from "./eslint-rules/index.js";

export default [
  {
    files: ["extracted/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        player: "readonly",
        agent: "readonly",
        FORWARD: "readonly",
        UP: "readonly",
        DOWN: "readonly",
        RIGHT: "readonly",
        LEFT: "readonly",
        SNOW: "readonly",
        JACK_O_LANTERN: "readonly",
      },
    },
    plugins: {
      custom: customRules,
    },
    rules: {
      ...js.configs.recommended.rules,
      "custom/require-for-loop": "error",
    },
  },
];
