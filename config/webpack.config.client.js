import commonConfig from "./webpack.config.common";
import path from 'path';

// TODO: flesh out client build
module.exports = {
  ...commonConfig,

  name: 'client',
  target: 'web',

  entry: ['babel-polyfill', './client/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  }
}
