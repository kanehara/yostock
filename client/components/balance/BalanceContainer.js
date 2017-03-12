import React from 'react'
import services from '../../services'
import { Balance } from './Balance'

export class BalanceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { balance: null };
    services.BalanceService.getBalance()
        .then(( {data: balance} ) => {
          this.setState({balance})
        });
  }

  render() {
    if (this.state.balance)
      return (<Balance balance={this.state.balance}/>)
    else
      return (<div>Loading...</div>)
  }
}