import axios from 'axios';

export const BalanceService = {
  getBalance: async function() {

    let accountOverview = await axios.get('/api/balance/getAccountOverview');

    return accountOverview;
  }
}