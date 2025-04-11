import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

/**
 * @see https://eslint.org/docs/latest/integrations/configuring
 * @type {import("eslint").Linter.Config[]}
 */
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  prettier,
])
