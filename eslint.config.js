// eslint.config.js (ESLint 9 - flat config)
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import ts from 'typescript-eslint';

export default [
  { ignores: ['dist', 'node_modules'] },

  // Base + TS + React
  ...ts.config(
    js.configs.recommended,
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      languageOptions: {
        parser: ts.parser,
        parserOptions: { ecmaVersion: 2022, sourceType: 'module', ecmaFeatures: { jsx: true } },
      },
      plugins: {
        react,
        'react-hooks': reactHooks,
        import: importPlugin,
        'simple-import-sort': simpleImportSort,
      },
      settings: {
        react: { version: 'detect' },
        'import/resolver': { typescript: true },
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/order': ['error', { 'newlines-between': 'always' }],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'import/newline-after-import': ['error', { count: 1 }],
        'import/no-duplicates': 'error',
      },
    },

    {
      files: ['**/*.d.ts'],
      rules: { '@typescript-eslint/no-empty-object-type': 'off' },
    },
  ),

  prettier,
];
