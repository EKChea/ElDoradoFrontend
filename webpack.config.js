let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'build');
let APP_DIR = path.resolve(__dirname, 'src');

let config = {

  entry: APP_DIR + '/index.js',

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {'REACT_APP_NODE_ENV': JSON.stringify(process.env.REACT_APP_NODE_ENV)}
    })
  ],

};

module.exports = config;