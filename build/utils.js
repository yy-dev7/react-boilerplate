var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var isProduction = process.env.NODE_ENV === 'production'

exports.assetsPath = function(_path) {
  var assetsSubDirectory = isProduction ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
  options = options || {}
  var localIdentName = isProduction ? '[hash:base64:5]' : '[name]__[local]__[hash:base64:5]'

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: isProduction,
      sourceMap: options.sourceMap,
      modules: true,
      localIdentName: localIdentName,
      importLoaders: 1
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      plugins: () => [require('autoprefixer')],
      sourceMap: options.sourceMap,
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader, postcssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    if (options.extract) {
      return ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: loaders,
      })
    } else {
      return [{
        loader: 'style-loader'
      }].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

exports.styleLoaders = function(options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
