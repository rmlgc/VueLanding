/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	globals: {
		globalThis: 'readonly',
	},
	ignorePatterns: [
		'dist/**/*',
		'node_modules/**/*',
		'build/**/*',
		'coverage/**/*',
		'.git/**/*',
		'.nuxt/**/*',
		'.next/**/*',
		'public/**/*',
		'*.d.ts'
	],
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		// 'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}],
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],
		'vue/component-definition-name-casing': ['error', 'kebab-case'],
		'vue/multi-word-component-names': ['error'],
		'no-empty': ['error', { 'allowEmptyCatch': true }],
		'no-unused-vars': ['error', { 'varsIgnorePattern': '^(t|r|i|n|e|s|o|D|Q|I|N|ge)$' }],
		'no-prototype-builtins': 'warn',
		'no-cond-assign': ['error', 'except-parens'],
		'no-useless-escape': 'warn',
		'no-setter-return': 'warn',
	},
};
