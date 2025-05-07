import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['i-lucide'].includes(tag),
        }
      }
    }
  )],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'), 
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './__test__/setup.ts',
  },
})
