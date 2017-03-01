import React from 'react'
import { PositionSymbol } from './PositionSymbol'
import { PositionBasisValue } from './PositionBasisValue'
import { PositionCurrentValue } from './PositionCurrentValue'
import { PositionTotalGainLoss } from './PositionTotalGainLoss'

export function PositionRow(props) {
  const style = {
    display: 'flex',
    alignItems: 'stretch'
  }

  return (
      <div style={style}>
        <PositionSymbol position={props.position}></PositionSymbol>
        <PositionBasisValue position={props.position}></PositionBasisValue>
        <PositionCurrentValue position={props.position}></PositionCurrentValue>
        <PositionTotalGainLoss position={props.position}></PositionTotalGainLoss>
      </div>
  )
}