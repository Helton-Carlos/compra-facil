import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('U'),
        },
      }
    }
  )],

  base: "/",

  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '#app': path.resolve(__dirname, './__test__/mocks/utils'),
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './__test__/setup.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
})
