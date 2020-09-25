const { styles, utils, images } = require('webpack-lib');
const { merge } = require('webpack-merge');

module.exports = merge([
  { devtool: 'eval-source-map' },
  images.loadImages(),
  styles.loadSASS(),
  utils.webpackDevServer(),
]);
