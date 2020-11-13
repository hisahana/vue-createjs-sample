const webpack = require("webpack");
const path = require('path');

module.exports = {
  configureWebpack: {
    loader: {
      rules: [
        {
          test: '/createjs/',
          loader: 'imports-loader?this=>window!exports-loader?createjs'
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        'createjs': 'createjs'
      })
    ],
    resolve: {
      alias: {
        createjs: path.join(__dirname, 'node_modules', 'createjs', 'builds', '1.0.0', 'createjs.min.js'),
      }
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('imports-loader?this=>window!exports-loader?window_load_createjs')
  //     .test(/createjs/)
  // }
}
