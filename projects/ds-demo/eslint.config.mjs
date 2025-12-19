import { js, ts } from '@opi_pib/eslint-config-base';

const ignores = ['.angular/**', 'dist/**'];

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		...js,
		ignores
	},
	{
		...ts,
		languageOptions: {
			...ts.languageOptions,
			parserOptions: {
				...ts.languageOptions.parserOptions,
				project: './tsconfig.eslint.json'
			}
		},
		ignores,
		rules: {
			...ts.rules,
			'@opi_pib/assertions/assertions-code': ['error', '^[a-z0-9]{8}$'],
			'@opi_pib/assertions/assertions-condition': ['error'],
			'import/order': [
				'error',
				{
					alphabetize: { order: 'asc' },
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
					'newlines-between': 'always',
					pathGroupsExcludedImportTypes: ['builtin'],
					pathGroups: [
						{
							pattern: '@{core,translations}/**',
							group: 'internal'
						},
						{
							pattern: '@environment',
							group: 'internal'
						}
					]
				}
			]
		}
	}
];
