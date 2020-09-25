const { merge } = require('webpack-merge');
const { styles, images } = require('webpack-lib');
const { ENV_PROD } = require('webpack-lib').constants;
const glob = require('glob');
const { build } = require('./webpack.constants').PATHS;

const imgWpLoaderOpts = images.DEFAULT_IMAGE_WP_OPTIONS;
const urlLoaderOpts = { limit: 6000, name: '[name].[ext]' };

module.exports = ({ paths }) => merge([
  {
    output: {
      path: build,
      filename: '[name]_[hash].js',
    },
  },
  images.loadImages({ urlLoaderOpts, imgWpLoaderOpts }),
  styles.extractSASS({ filename: '[name]_[hash].css' }),
  styles.purgeCSS({ paths: glob.sync(`${paths}/**/*.{html,vue,jsx}`, { nodir: true }) }),
]);
