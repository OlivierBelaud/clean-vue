module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  // preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
