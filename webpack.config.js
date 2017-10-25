const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const devConfig = require('./app/src/config/config.dev.js');
const prodConfig = require('./app/src/config/config.prod.js');

const config = isProduction ? prodConfig : devConfig;

const extractSass = new ExtractTextPlugin({
  filename: "app.css",
  // disable: process.env.NODE_ENV === "development"
});

const plugins = [
  new webpack.DefinePlugin({
    'process.env': Object.assign({}, { NODE_ENV: JSON.stringify(nodeEnv) }, config)
  }),
];

if (isProduction) {
  plugins.push(
    extractSass,
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true
      }
    })
    // new ExtractTextPlugin({
    //   filename: `${path.resolve(__dirname, 'app/dist')}/app.css`,
    //   allChunks: true,
    // })
  )
} else {
  plugins.push(
    extractSass
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
  }
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
            url: false
          },
        },
        'autoprefixer-loader',
      ],
    }
  )
} else {
  loaders.push(
    {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false,
            minimize: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            url: false,
            minimize: true,
            data: "$IMG_DIR: 'images'; $FONT_DIR: 'fonts';"
          },
        }],
        // use style-loader in development
        fallback: 'style-loader'
      })
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
