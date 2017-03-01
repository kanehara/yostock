import React from 'react'
import { GainLoss } from './GainLoss'

export function PositionTotalGainLoss(props) {
  const style = {
    flexGrow: 2
  }

  return(
      <div style={style}>
        <h3>Total Gain/Loss</h3>
        <GainLoss
            gainLossDollar={props.position.totalGainLossDollar}
            gainLossPercentage={props.position.totalGainLossPercentage}
        ></GainLoss>
      </div>
  )
}