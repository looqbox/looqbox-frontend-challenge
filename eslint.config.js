import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig({
	plugins: {
		js,
		'@typescript-eslint': tsPlugin,
		react: reactPlugin,
	},
	extends: [
		'js/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	languageOptions: {
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
		parserOptions: {
			ecmaVersion: 'latest',
			ecmaFeatures: { jsx: true },
		},
		globals: {
			...globals.browser,
			...globals.es2021,
		},
	},
	settings: {
		react: { version: 'detect' },
	},
});
