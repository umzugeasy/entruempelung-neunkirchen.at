const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_site/js'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new WebpackAssetsManifest({
      output: path.resolve(__dirname, 'src/_data') + '/manifest.json',
      merge: true
    })
  ],
};