const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

console.log('NODEENV: ', nodeEnv)

const devConfig = {
  IMG_DIR: JSON.stringify('./wp-content/themes/tc-portfolio-v6/app/dist/images'),
};

const prodConfig = {
  IMG_DIR: JSON.stringify('./wordpress/wp-content/themes/tc-portfolio-v6/app/dist/images'),
};

const config = isProduction ? prodConfig : devConfig;

const plugins = [
  new webpack.DefinePlugin({
    'process.env': Object.assign({}, { 'NODE_ENV': JSON.stringify(nodeEnv) }, config)
  }),
];

if (isProduction) {
  plugins.push(
    new ExtractTextPlugin({
      filename: `${path.resolve(__dirname, 'app/dist')}/app.css`,
      allChunks: true,
    })
  )
}

const loaders = [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack-loader',
    ],
  },
  {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  },
  {
    test: /\.(png|jpg|svg)$/,
    loader: 'url-loader'
  },
];

if (!isProduction) {
  loaders.push(
    // {
    //   test: /\.jsx?$/,
    //   exclude: /node_modules/,
    //   loader: "eslint-loader",
    // },
    // ],
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            url: false,
          },
        },
        'autoprefixer-loader',
      ],
    }
  )
}

if (isProduction) {
  loaders.push(
    { // sass / scss loader for webpack
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
    }
  )
}

module.exports = {
  entry: [path.resolve(__dirname, 'app/src/js/app.jsx'), path.resolve(__dirname, 'app/src/scss/app.scss')],
  output: {
    filename: 'app.js',
    publicPath: 'http://localhost:8080/app/dist/',
    path: path.resolve(__dirname, 'app/dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'], // when building webpack prod  " $ webpack -p "
    // extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins,
  module: {
    rules: loaders
  },
};
