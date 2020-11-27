const path = require('path');
const { merge } = require('webpack-merge');

module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
  ],
  webpackFinal: (config) => merge([
    {
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '..', 'src'),
        },
      },
    },
    config,
  ]),
};
