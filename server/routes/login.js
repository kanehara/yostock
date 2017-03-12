import express from 'express';

let loginRouter = express.Router();

loginRouter.use((req, res, next) => {
  console.log('login route');
});

loginRouter.get('/login', (req, res) => {

})