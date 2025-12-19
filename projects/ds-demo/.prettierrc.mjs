import { ng } from '@opi_pib/prettier-config-base';

/**
 * @type {import("prettier").Config}
 */
export default {
	...ng,
	plugins: ['prettier-plugin-tailwindcss']
};
