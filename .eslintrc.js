module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "airbnb", "prettier"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "airbnb",
        "airbnb-typescript",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./webpack.config.js"],
      },
      rules: {
        "react/jsx-filename-extension": 1,
        "react/no-unescaped-entities": "off",
        "react/function-component-definition": [
          2,
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "no-console": "off",
    "import/no-unresolved": "off",
  },
};
