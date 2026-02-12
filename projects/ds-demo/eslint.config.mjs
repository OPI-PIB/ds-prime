import opi from '@opi/eslint-config';
import opiTypescript from '@opi/eslint-config-typescript';
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
              group: 'internal',
            },
          ],
        },
      ],
    },
  },
  prettier,
  { ignores: ['.angular/**', 'dist/**'] },
];
