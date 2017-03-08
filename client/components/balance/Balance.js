import React from 'react';
import { GainLoss } from '../gainloss/GainLoss'

export function Balance(props) {
  const style = {
    display: 'flex'
  }

  const colStyle = {
    margin: '10px'
  }

  return (
    <div style={style}>
      <div style={colStyle}>
        <h3>Available Cash:</h3>
        {props.balance.availableCash}
      </div>
      <div style={colStyle}>
        <h3>Buying Power:</h3>
        {props.balance.buyingPower}
      </div>
      <div style={colStyle}>
        <h3>Day Gain/Loss:</h3>
        <GainLoss
            gainLossDollar={props.balance.dayAbsoluteReturn}
            gainLossPercentage={props.balance.dayPercentReturn}/>
      </div>
      <div style={colStyle}>
        <h3>Total Gain/Loss:</h3>
        <GainLoss
            gainLossDollar={props.balance.totalAbsoluteReturn}
            gainLossPercentage={props.balance.totalPercentReturn}/>
      </div>
    </div>
  )
}