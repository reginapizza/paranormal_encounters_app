'use strict'

const webpack = require('webpack')
const clone = require('clone')

// clone the webpack config to separate configuration of webpack and dev server
const webpackConfig = clone(require('./webpack').options)

// Path module provides utilities for working with file and directory path
const path = require('path')

// Turns any callback into a Webpack Plugin
const WebpackOnBuildPlugin = require('on-build-webpack')

// Opens a new browser tab when Webpack loads, will be used in
// WebpackOnBuildPlugin callback
const opn = require('opn')

// allows `opn` to only open the browser on the first build
let firstBuild = true

// port for development server
const port = 7165

// make `jQuery` and `$` available in the development console
webpackConfig.module.rules.push({
  test: require.resolve('jquery'),
  use: [{
    loader: 'expose-loader',
    options: 'jQuery'
  }, {
    loader: 'expose-loader',
    options: '$'
  }]
})

module.exports = {
  options: {
    port,
    inline: true, // reload on change
    webpack: webpackConfig,
    publicPath: '/public/',
    contentBase: [ path.join(__dirname, '/../') ],
    watchContentBase: true
  },

  start: {
    webpack: {
      devtool: 'source-map',
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true
        }),
        new WebpackOnBuildPlugin(function () {
          if (firstBuild) {
            opn('http://localhost:' + port)
          }
          firstBuild = false
        })
      ]
    }
  }
}
