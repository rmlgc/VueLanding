/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  // /* env added for avoid process.env from playWright*/
  env: {
    node: true,
    commonjs: true,
  },
  root: true,
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.eslint.json"],
  },
};
