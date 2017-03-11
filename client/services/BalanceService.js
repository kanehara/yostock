import axios from 'axios';

export const BalanceService = {
  getBalance: function() {

    axios.get('/api');

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

    return mockBalanceResponse
  }
}