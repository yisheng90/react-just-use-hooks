const package = require('./package.json');
const rules = require('./configs/rules.config');
const alias = require('./configs/aliases.config');

module.exports = {
  entry: './src/index',
  output: {
    filename: package.main,
    library: '',
    libraryTarget: 'commonjs'
  },
  resolve: {
    alias: alias.aliases,
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules
  }
};
