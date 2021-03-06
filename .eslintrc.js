/* eslint-disable import/no-extraneous-dependencies */
const { ESLINT_VUE_EXTENDS, ESLINT_VUE_PARSER } = require('webpack-lib').eslint;

module.exports = {
  extends: ESLINT_VUE_EXTENDS,
  ignorePatterns: [
    '**/node_modules/**',
    'build/lib/**',
    'src/assets/tokens.js',
  ],
  parser: ESLINT_VUE_PARSER,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
        env: {
          NODE_ENV: 'production',
          production: true,
        },
      },
    },
  },
};
