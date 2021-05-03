const eslintRules = {
  parser: "babel-eslint",
  extends: ["airbnb", "airbnb/hooks", "eslint-config-prettier"],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    // "__": true
  },
  plugins: ["react", "jsx-a11y", "eslint-plugin-prettier", "eslint-plugin-import-helpers"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "arrow-body-style": ["error", "always"],
    "react/state-in-constructor": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "import/prefer-default-export": ["off"],
    "import-helpers/order-imports": [
      "warn",
      {
        groups: ["/(^react$)/", "module", ["parent", "sibling", "index"]],
        newlinesBetween: "ignore",
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: [
        // ["alias", "module_name"],
      ],
    },
  },
};

module.exports = eslintRules;
