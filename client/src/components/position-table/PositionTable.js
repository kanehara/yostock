import React from 'react';
import { PositionSymbol } from './position-row';
import { PositionRow } from "./position-row/PositionRow";

export function PositionTable(props) {

  const positionRows = props.positions.map(position => {
    return <PositionRow position = { position } key = { position.symbol }/>
  })

  return (
      <div>
        { positionRows }
      </div>
  )
}