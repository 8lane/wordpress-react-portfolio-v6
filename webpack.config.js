const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/src/js/app.jsx'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app/dist')
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ]
  }
};
