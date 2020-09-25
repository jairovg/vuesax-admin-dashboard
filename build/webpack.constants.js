const path = require('path');

const PATHS = {
  app: path.join(__dirname, '../', 'src', 'index.js'),
  src: path.join(__dirname, '../', 'src'),
  build: path.join(__dirname, '../', 'dist'),
  index: path.join(__dirname, '../', 'src', 'index.html'),
};

module.exports = {
  PATHS,
};
