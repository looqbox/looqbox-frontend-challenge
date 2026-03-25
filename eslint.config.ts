import js from '@eslint/js'
import { Linter } from 'eslint'
import configPrettier from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
// @ts-expect-error - No types available
import pluginImportHelpers from 'eslint-plugin-import-helpers'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
// @ts-expect-error - No types available
import pluginStyledComponentsA11y from 'eslint-plugin-styled-components-a11y'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const reactConfig = pluginReact.configs.flat.recommended

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...(Array.isArray(reactConfig) ? reactConfig : []),
  configPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
      import: pluginImport,
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
      'import-helpers': pluginImportHelpers,
      'styled-components-a11y': pluginStyledComponentsA11y,
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'camelcase': 'off',
      'class-methods-use-this': 'off',
      'import/prefer-default-export': 'off',
      'no-shadow': 'off',
      'no-console': 'off',
      'no-useless-constructor': 'off',
      'no-empty-function': 'off',
      'lines-between-class-members': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'unused-imports/no-unused-imports': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-use-before-define': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-case-declarations': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: '.',
        },
      },
    },
  },
] as Linter.Config[]
