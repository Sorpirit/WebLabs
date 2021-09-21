module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["google", "plugin:sonarjs/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/no-identical-expressions": "error",
    "cognitive-complexity": "error",
    "cognitive-complexity": ["error", 15],
  },
  plugins: ["sonarjs"],
};
