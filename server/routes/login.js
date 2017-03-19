import express from 'express';

const loginRouter = express.Router();

loginRouter.use((req, res, next) => {
  console.log('login route');
});

loginRouter.get('/login', (req, res) => {

});

export default loginRouter;