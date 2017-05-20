var path = require('path');
var config = require('../config');
var utils = require('./utils');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   loader: 'eslint-loader',
    //   include: projectRoot,
    //   exclude: /node_modules/
    // }],
    // loaders: [{
    //   test: /\.jsx?$/,
    //   exclude: /node_modules/,
    //   include: projectRoot,
    //   loader: 'babel-loader',
    // }, {
    //   test: /\.json?$/,
    //   loader: 'json-loader'
    // }, {
    //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    //   loader: 'url-loader',
    //   query: {
    //     limit: 10000,
    //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
    //   }
    // }, {
    //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    //   loader: 'url-loader',
    //   query: {
    //     limit: 10000,
    //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    //   }
    // }]
  }
  // postcss: [
  //   require('autoprefixer')({
  //     browsers: ['last 2 versions']
  //   })
  // ]
}
