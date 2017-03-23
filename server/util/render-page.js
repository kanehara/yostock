module.exports = function(html, initialState) {
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
};