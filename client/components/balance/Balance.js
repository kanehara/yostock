import React from 'react';
import { GainLoss } from '../gainloss/GainLoss'

export function Balance(props) {
  const style = {
    display: 'flex'
  }

  const smallColStyle = {
    flexGrow: 1
  }
  const largeColStyle = {
    flexGrow: 3
  }

  return (
    <div style={style}>
      <div style={smallColStyle}>{props.balance.availableCash}</div>
      <div style={smallColStyle}>{props.balance.buyingPower}</div>
      <div style={largeColStyle}>
        <GainLoss
            gainLossDollar={props.balance.dayAbsoluteReturn}
            gainLossPercentage={props.balance.dayPercentReturn}/>
      </div>
      <div style={largeColStyle}>
        <GainLoss
            gainLossDollar={props.balance.totalAbsoluteReturn}
            gainLossPercentage={props.balance.totalPercentReturn}/>
      </div>
    </div>
  )
}