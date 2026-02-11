/** @type {import('stylelint').Config} */
export default {
	rules: {},
	overrides: [
		{
			files: ['*.css'],
			extends: ['@opi/stylelint-config'],
			rules: {
				'import-notation': 'string',
				'at-rule-no-unknown': [
					true,
					{
						ignoreAtRules: ['reference', 'apply']
					}
				]
			}
		}
	]
};
