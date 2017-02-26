import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: 'index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: 'http://0.0.0.0:3000/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules'
    ],
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx*$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, /.+\.config.js/]
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: [/node_modules/]
    }, ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],
}
