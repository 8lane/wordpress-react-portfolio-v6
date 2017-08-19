const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/src/js/app.jsx'),
  output: {
    filename: 'app.js',
    publicPath: 'http://localhost:8080/app/dist/',
    path: path.resolve(__dirname, 'app/dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'], // when building webpack prod  " $ webpack -p "
    // extensions: ['', '.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   compress: {
    //     warnings: true, // Suppress uglification warnings
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true,
    //   },
    //   output: {
    //     comments: false,
    //   },
    //   exclude: [/\.min\.js$/gi],
    //   sourceMap: true
    // }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      // },
    ],
  },
};
