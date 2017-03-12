import express from 'express'
const apiRouter = express.Router()

const tradeItVersion = 'v1'
const tradeItHost = process.env.NODE_ENV === 'production' ?
    'https://ems.tradingticket.com/api/' + tradeItVersion :
    'https://ems.qa.tradingticket.com/api/' + tradeItVersion

apiRouter.use((req, res, next) => {
  console.log('api route');
  next();
})

// TODO complete
apiRouter.get('/balance/getAccountOverview', (req, res) => {
  const endpoint = tradeItHost + '/balance/getAccountOverview';
  console.log('getBalance called');

  const mockBalanceResponse = {
    "availableCash": 0,
    "buyingPower": 1452.02,
    "dayAbsoluteReturn": 2.34,
    "dayPercentReturn": 0.12,
    "longMessages": null,
    "shortMessage": "Account Overview successfully fetched",
    "status": "SUCCESS",
    "token": "c8e6c20b3b7843028332e1e522cb89b8",
    "marginCash": "-5.43",
    "totalAbsoluteReturn": -16.89,
    "totalPercentReturn": -0.009969542428106,
    "totalValue": 1694.16
  }

  res.send(mockBalanceResponse);
})

export default apiRouter;