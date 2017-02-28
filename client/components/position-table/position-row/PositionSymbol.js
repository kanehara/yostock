import React from 'react';
import { GainLoss } from './GainLoss'

export function PositionSymbol(props) {
  return (
    <div>
      <div>{ props.symbol }</div>
      <div>{ props.quantity } shares</div>
      <div>Day:</div>
      <GainLoss
          gainLossDollar = { props.todayGainLossDollar }
          gainLossPercentage = { props.todayGainLossPercentage }
      ></GainLoss>
    </div>
  )
}