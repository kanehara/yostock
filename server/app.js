import express from "express";
import React from "react";
import apiRouter from "./routes/api";
import init from "./middleware";


let app = express();

// Init middleware
init(app);

// TEST ENDPIONT
// TODO: authorization
app.get('/login', (req, res, next) => {
  console.log(req.originalUrl);
  res.cookie('sessionToken', '123', { httpOnly: true, signed: true});
  res.send();
  next();
})

/**
 * The API endpoint
 */
app.use('/api', apiRouter);

/**
 * Server side rendering
 */
// TODO: Server Side React Rendering
app.use('/home', (req, res, next) => {
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

export default app;
