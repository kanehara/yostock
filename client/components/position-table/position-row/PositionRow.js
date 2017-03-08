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
        <PositionSymbol position={props.position}/>
        <PositionBasisValue position={props.position}/>
        <PositionCurrentValue position={props.position}/>
        <PositionTotalGainLoss position={props.position}/>
      </div>
  )
}