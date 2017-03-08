const path = require('path');

const rootDir = path.resolve(__dirname);

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
      app: './js/index.js'
  },
  output: {
      path: path.resolve(__dirname, 'dev'),
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
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: [path.join(__dirname, 'build'), path.join(__dirname, 'dev')],
    watchContentBase: true
  }
};

module.exports = config;
