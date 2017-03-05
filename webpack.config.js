'use strict';

const path = require('path');

const PATHS = {
  dev: path.join(__dirname, 'dev/js'),
  devSass: path.join(__dirname, 'dev/sass/**/*.scss'),
  public: path.join(__dirname, 'public/js')
};

module.exports = {
  entry: {
    dev: PATHS.dev
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap'],
        // loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ],
        // include: PATHS.devSass
      },
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        loaders: ['babel-loader?cacheDirectory'],
        // include PATHS.dev
      }
    ]
  }
};
