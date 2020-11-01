module.exports = {
  moduleNameMapper : {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: ['**/tests/**/*.spec.[jt]s?(x)'],
};
