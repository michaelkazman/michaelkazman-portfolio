module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react",
    // '@typescript-eslint',
  ],
  rules: {
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ], // https://stackoverflow.com/q/39114446/2771889
    "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }], // https://stackoverflow.com/q/55614983/
    "react/prop-types": 0,
  },
};
