import React from 'react';
import { PositionSymbol } from './position-row';
import { PositionRow } from "./position-row/PositionRow";

export function PositionTable(props) {
  const style = {
    margin: '50px'
  }

  const positionRows = props.positions.map(position => {
    return <PositionRow position = { position } key = { position.symbol }/>
  })

  return (
      <div style={style}>
        { positionRows }
      </div>
  )
}