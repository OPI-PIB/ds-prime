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
  },
  prettier,
  { ignores: ['dist/**'] },
];
