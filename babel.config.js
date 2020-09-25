const { getDevelopmentConfig, getTestConfig, presetVue } = require('webpack-lib').babel;
const { ENV_DEV } = require('webpack-lib').constants;

/**
 * Setup babel based on environment
 * @see {@link https://babeljs.io/docs/en/options#env}
 */
module.exports = {
  env: {
    [ ENV_DEV ]: {
      presets: presetVue(),
    },
    test: {
      presets: [getTestConfig()],
    },
  },
};
