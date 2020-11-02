module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/index.js',
    '!src/assets/tokens.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/tests/**/*.spec.[jt]s?(x)'],
};
