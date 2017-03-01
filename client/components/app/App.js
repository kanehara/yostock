import React from 'react'
import { PositionTableContainer } from '../position-table/PositionTableContainer'
import { BalanceContainer } from '../balance/BalanceContainer'

export function App(props) {
  const style = {
    margin: '50px'
  }

  return (
    <div style={style}>
      <BalanceContainer/>
      <PositionTableContainer/>
    </div>
  );
}
