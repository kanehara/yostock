require('dotenv').config();
require('babel-register');
import app from './app';

app.listen(3000, function() {
  const host = this.address().address;
  const port = this.address().port;
  console.log(`YoStock listening on http://${host}:${port}`);
});

process.on('uncaughtException', err => console.log('uncaught exception', err));
process.on('uncaughtException', err => console.log('unahndled rejection', err));