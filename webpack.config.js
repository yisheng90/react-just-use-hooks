const package = require('./package.json');
const rules = require('./configs/rules.config');

module.exports = {
  entry: './src/index',
  output: {
    filename: package.main,
    library: '',
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules
  }
};
