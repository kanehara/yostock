import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.config.client.js';
import React from 'react';
import apiRouter from './api';

let app = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

/**
 * Server side rendering
 */
// TODO: Server Side React Rendering
app.use('/home', (req, res, next) => {
  res.send(renderPage('', null));
});

function renderPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
      <script src='/assets/vendor.js'></script>
      <script src='/assets/bundle.js'></script>
    </html>
  `
}

/**
 * The API
 */
app.use('/api', apiRouter);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
