import express from "express";
import React from "react";
import apiRouter from "./routes/api";
import { auth, setupDevMiddleware } from "./middleware";
import cookieParser from "cookie-parser";

let app = express();

/**
 * Webpack Dev Server setup
 */
if (process.env.NODE_ENV === 'development') {
  setupDevMiddleware(app);
}

/**
 * Cookie parser
 */
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

// TEST ENDPIONT
// TODO: authorization
app.get('/login', (req, res, next) => {
  console.log('wee');
  res.cookie('sessionToken', '123', { httpOnly: true, signed: true});
  res.send();
})

/**
 * The API endpoint
 */
app.use('/api', auth, apiRouter);

/**
 * Server side rendering
 */
// TODO: Server Side React Rendering
app.use('/home', auth, (req, res, next) => {
  res.send(renderPage('', null));
  next();
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

app.listen(3000, function() {
  console.log('YoStock listening on port 3000!')
});
