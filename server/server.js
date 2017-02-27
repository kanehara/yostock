import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.config.dev.js';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../client/modules/App/App.js';

let app = express();

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
  const AppComponent = React.createFactory(App)
  let initialView = ReactDOMServer.renderToString(AppComponent({ world: "world" }))
  res.send(renderPage(initialView, null));
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
    </html>
  `
}

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
