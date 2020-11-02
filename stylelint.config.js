/* eslint-disable import/no-extraneous-dependencies */
const { STYLELINT_EXTENDS } = require('webpack-lib').stylelint;

module.exports = {
  extends: STYLELINT_EXTENDS,
  ignoreFiles: [
    'src/assets/styles/tokens.scss',
  ],
};
