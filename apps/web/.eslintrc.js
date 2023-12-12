/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@bahag-wuj/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
