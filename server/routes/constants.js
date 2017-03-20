const tradeItVersion = 'v1'
const tradeItApiBaseUrl = process.env.NODE_ENV === 'production' ?
    'https://ems.tradingticket.com/api/' + tradeItVersion :
    'https://ems.qa.tradingticket.com/api/' + tradeItVersion;
export default tradeItApiBaseUrl;