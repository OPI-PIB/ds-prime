import angular from '@opi/prettier-config/angular';

/**
 * @type {import("prettier").Config}
 */
export default {
  ...angular,
  plugins: ['prettier-plugin-tailwindcss'],
};
