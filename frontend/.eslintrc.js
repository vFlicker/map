module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "@feature-sliced/eslint-config/rules/import-order",
    "@feature-sliced/eslint-config/rules/layers-slices"
  ],
  "plugins": ["react", "@typescript-eslint/eslint-plugin"],
  "rules": {
    "react/prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "function-declaration",
        "unnamedComponents": "arrow-function"
      }
    ]
  }
}
