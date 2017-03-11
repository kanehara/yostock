/**
 * ENTRY SCRIPT
 */

require('dotenv').config()

// TODO: configure prod build
if (process.env.NODE_ENV === 'production') {
    console.log('PROD MODE!')
} else {
    require('babel-register')
    require('babel-polyfill')
    require('./server/server.js')
}
