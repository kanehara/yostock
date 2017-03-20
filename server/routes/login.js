import express from 'express';
import tradeItBaseUrl from './constants';
import { renderPage } from '../app';

const loginRouter = express.Router();
const oAuthPopUpUrl = tradeItBaseUrl + '/user/getOAuthLoginPopupUrlForWebApp';
const oAuthAccessTokenUrl = tradeItBaseUrl + '/user/getOAuthAccessToken';
const oAuthAuthenticateUrl = tradeItBaseUrl + '/user/authenticate?srv=';

loginRouter.get('/login', (req, res, next) => {
  res.send(renderPage('', null));
  next();
});

export default loginRouter;