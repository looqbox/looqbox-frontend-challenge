module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "indent": [
     "error",
     "tab"
    ],
    "semi": [
     "error",
     "always"
    ],
    "arrow-spacing": [
     "error",
     {
      "before": true,
      "after": true
     }
    ],
    "quotes": [
     "error",
     "single"
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off"
  },
}
