import React from 'react'
import services from '../../services'
import { Balance } from './Balance'

export class BalanceContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: services.BalanceService.getBalance()
    }
  }

  render() {
    return (
        <Balance balance={this.state.balance}/>
    )

  }
}