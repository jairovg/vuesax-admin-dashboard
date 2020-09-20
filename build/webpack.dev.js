const { styles, utils, images } = require('webpack-lib');
const wpMerge = require('webpack-merge');

module.exports = wpMerge([
  { devtool: 'eval-source-map' },
  images.loadImages(),
  styles.loadSASS(),
  utils.webpackDevServer(),
]);
