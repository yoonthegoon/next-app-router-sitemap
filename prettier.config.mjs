/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  singleQuote: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}

export default config
