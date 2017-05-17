const {resolve} = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  devtool: 'cheap-module-source-map',

  entry: [
    './simple-bar-chart/SimpleBarChart'
  ],

  context: resolve(__dirname, 'app'),

  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'build'),
    publicPath: '',
    library: 'react-simple-bar-chart',
    libraryTarget: "umd"
  },

  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
//    new webpack.optimize.UglifyJsPlugin({
//      beautify: false,
//      mangle: {
//        screw_ie8: true,
//        keep_fnames: true
//      },
//      compress: {
//        screw_ie8: true
//      },
//      comments: false
//    }),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}})
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
