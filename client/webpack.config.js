const path = require("path");
const webpack = require("webpack");

const devConfig = {
  entry: path.join(__dirname, "src", "dist"),

  output: {
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ],
  },

  module: {
    rules: [
      {
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
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    }),
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },

  devtool: 'cheap-module-source-map'
}

module.exports = devConfig;