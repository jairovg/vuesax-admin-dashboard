/* eslint-disable import/no-extraneous-dependencies */
const { presetVue } = require('webpack-lib').babel;
const { ENV_DEV } = require('webpack-lib').constants;

/**
 * Setup babel based on environment
 * @see {@link https://babeljs.io/docs/en/options#env}
 */
module.exports = {
  env: {
    [ENV_DEV]: {
      presets: presetVue(),
    },
    test: {
      presets: presetVue({
        targets: {
          node: 'current',
        },
      }),
      plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            alias: {
              '~': './src',
            },
          },
        ],
      ],
    },
  },
};
