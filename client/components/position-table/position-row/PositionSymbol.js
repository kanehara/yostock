import React from 'react';
import { GainLoss } from './GainLoss'

export function PositionSymbol(props) {
  const style = {
    flexGrow: '1'
  }

  return (
    <div style={style}>
      <h2>{ props.position.symbol }</h2>
      <div>{ props.position.quantity } shares</div>
      <div>Day:</div>
      <GainLoss
          gainLossDollar = { props.position.todayGainLossDollar }
          gainLossPercentage = { props.position.todayGainLossPercentage }
      ></GainLoss>
    </div>
  )
}