// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .prepend(

  )
  .override('nuxt/typescript/setup', {
    rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error', 
      'no-unused-vars': 'off',
    }
  })
