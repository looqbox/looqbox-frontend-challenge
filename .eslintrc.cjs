module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "simple-import-sort"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'no-console': "error",
    "react/no-unescaped-entities": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": "latest"
  }
}
