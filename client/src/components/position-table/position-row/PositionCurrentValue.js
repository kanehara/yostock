import React from 'react'
import {ValueSummary} from './ValueSummary'

export function PositionCurrentValue(props) {
  const style = {
    flexGrow: 2
  }

  const perShareValue = props.position.lastPrice ?
      props.position.lastPrice.toFixed(2) :
      'N/A';
  const totalValue = props.position.lastPrice * props.position.quantity ?
      props.position.lastPrice.toFixed(2) :
      'N/A';
  return (
      <div style={style}>
        <h3>Current Value:</h3>
        <ValueSummary perShareValue={perShareValue} totalValue={totalValue}/>
      </div>
  )
}