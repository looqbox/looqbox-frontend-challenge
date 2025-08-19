module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "unused-imports", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
