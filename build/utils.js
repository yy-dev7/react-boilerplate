var path = require('path');
var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = function(_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(env) {
  var isProd = (env === 'production');
  var cssLoaders = [];

  if (isProd) {
    cssLoaders = [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract([
        "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]",
        "postcss-loader"
      ])
    }, {
      test: /\.(scss|sass)$/,
      loader: ExtractTextPlugin.extract([
        "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]",
        "postcss-loader",
        "sass-loader?sourceMap",
      ])
    }]
  } else {
    cssLoaders = [{
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
        'postcss-loader',
      ]
    }, {
      test: /\.(scss|sass)$/,
      loaders: [
        'style-loader?sourceMap',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    }];
  }

  return cssLoaders;
}
