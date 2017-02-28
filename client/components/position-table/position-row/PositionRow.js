import React from 'react'
import { PositionSymbol } from './PositionSymbol'

export function PositionRow(props) {
  return (
      <PositionSymbol
          symbol = { props.position.symbol }
          quantity = { props.position.quantity }
          todayGainLossDollar = { props.position.todayGainLossDollar }
          todayGainLossPercentage = { props.position.todayGainLossPercentage }
      ></PositionSymbol>
  )
}