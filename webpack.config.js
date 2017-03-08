const path = require('path');

const rootDir = path.resolve(__dirname);
const SRC_DIR = path.join(rootDir, 'src');
const JS_DIR = path.join(SRC_DIR, 'js');
const buildDir = './build';

const config = {
  entry: {
      app: path.join(JS_DIR, 'index.js')
  },
  output: {
      path: buildDir,
      filename: '[name].js'
  },
  module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [
            path.resolve(__dirname, 'node_modules')
        ],
      }]
  }
};

module.exports = config;
