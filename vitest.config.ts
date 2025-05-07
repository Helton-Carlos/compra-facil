import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['VTU_COMPONENT'].includes(tag),
        }
      }
    }
  )],
  base: "/",

  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './__test__/setup.ts',
  },
})
