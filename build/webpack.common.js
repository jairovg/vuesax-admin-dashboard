const wpMerge = require('webpack-merge');
const { utils, styles, javascript } = require('webpack-lib');
const { build, index } = require('./webpack.constants').PATHS;

/**
 * Setup meta headers for the page
 */
const meta = {
  viewport: 'width=device-width, initial-scale=1.0',
  'X-UA-Compatible': { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' }
};

module.exports = wpMerge([
  {
    output: {
      path: build,
      filename: '[name].js'
    },
  },
  utils.htmlPlugin({
    title: 'Puremedia',
    meta,
    template: index,
  }),
  styles.stylelintPlugin({ files: '**/*.(s?(a|c)ss|vue)' }),
  javascript.eslintPlugin({ files: './src/**/*.{js,jsx,vue}' }),
  javascript.loadVue(),
  javascript.loadJS(),
]);
