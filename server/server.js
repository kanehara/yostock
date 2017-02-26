var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require("webpack");
var webpackConfig = require("../config/webpack.config.dev.js");

var app = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

// TODO: Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  res.send('hello world1');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
