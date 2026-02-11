import opi from '@opi/eslint-config';
import opiTypescript from '@opi/eslint-config-typescript';
import assertions from '@opi_pib/eslint-plugin-assertions';
import prettier from 'eslint-config-prettier';

/** @type {import("eslint").Linter.Config[]} */
export default [
	opi,
	{ files: ['**/*.{js,jsx,cjs,mjs}'] },
	{
		files: ['**/*.{ts,tsx,cts,mts}'],
		...opiTypescript,
		rules: {
			...opiTypescript.rules,
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
						}
					]
				}
			]
		}
	},
	prettier,
	{ ignores: ['.angular/**', 'dist/**'] }
];
