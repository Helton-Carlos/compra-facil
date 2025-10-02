// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .prepend(

  )
  .override('nuxt/typescript/setup', {
    rules: {
      '@typescript-eslint/ban-types': 'off',
    }
  })
