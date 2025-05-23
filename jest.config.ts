export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    "#imports": "<rootDir>/.nuxt/imports.d.ts",
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
}
