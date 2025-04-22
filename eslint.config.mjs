// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
)
  .prepend(
  )
  .override('nuxt/typescript', {
    rules: {
      '@typescript-eslint/ban-types': 'off',
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error"
    }
  })