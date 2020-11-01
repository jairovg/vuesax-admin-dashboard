/* eslint-disable import/no-extraneous-dependencies, global-require */
const { merge } = require('webpack-merge');
const { ENV_PROD } = require('webpack-lib').constants;
const { app, src } = require('./build/webpack.constants').PATHS;
const commonConfig = require('./build/webpack.common');

module.exports = (mode) => {
  const envConfig = mode === ENV_PROD
    ? require('./build/webpack.prod')({ paths: src })
    : require('./build/webpack.dev');
  return merge([
    {
      mode,
      // Entry accepts a path or an object of entries.
      // We'll be using the latter form given it's
      // convenient with more complex configurations.
      entry: {
        app,
      },
    },
    commonConfig,
    envConfig,
  ]);
};
