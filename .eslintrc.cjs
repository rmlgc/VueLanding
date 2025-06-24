/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	env: {
		node: true,
		commonjs: true,
		browser: true
	},
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript'
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		'vue/max-attributes-per-line': ['error', {
			singleline: 10,
			multiline: 1
		}],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	},
	ignorePatterns: [
		"dist/**/*",
		"node_modules/**/*"
	]
};
