import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').FlatConfig[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  pluginJs.configs.recommended,

  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
  },

  {
    files: ["cypress/**/*.js", "**/*.cy.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
  },
];
