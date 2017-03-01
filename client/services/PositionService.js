export const PositionService = {
  getPositions: function() {

    const mockPositionsResponse = {
      "currentPage": 0,
      "longMessages": null,
      "positions":[
        {
          "costbasis": 43.0,
          "holdingType": "LONG",
          "lastPrice": 0.41,
          "quantity": 100.0,
          "symbol": "AMNL",
          "symbolClass": "EQUITY_OR_ETF",
          "todayGainLossDollar": 0.5,
          "todayGainLossPercentage": 0.012345679012345678,
          "totalGainLossDollar": -2.0,
          "totalGainLossPercentage": -0.046511627906976744
        }, {
          "costbasis": 11633.02,
          "holdingType": "LONG",
          "lastPrice": 116.33,
          "quantity": 100.0,
          "symbol": "APPL",
          "symbolClass": "EQUITY_OR_ETF",
          "todayGainLossDollar": 0.5,
          "todayGainLossPercentage": 0.012345679012345678,
          "totalGainLossDollar": -2.0,
          "totalGainLossPercentage": -0.046511627906976744
        }],
      "shortMessage": "Position successfully fetched",
      "status": "SUCCESS",
      "token": "c8e6c20b3b7843028332e1e522cb89b8",
      "totalPages": 1
    }

    return mockPositionsResponse.positions;
  }
}