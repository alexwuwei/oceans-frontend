'use strict';

const path = require('path');

const PATHS = {
  dev: path.join(__dirname, 'dev/app'),
  devSass: path.join(__dirname, 'dev/sass'),
  public: path.join(__dirname, 'public/js')
};

module.exports = {
  entry: {
    dev: PATHS.dev
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output : {
    path: PATHS.public,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass?sourceMap'],
        // include: PATHS.devSass
      },
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        loaders: ['babel?cacheDirectory'],
        // include PATHS.dev
      }
    ]
  }
};
