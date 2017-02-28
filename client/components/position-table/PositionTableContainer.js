import React from 'react'
import PositionService from '../../service/PositionService'
import { PositionTable } from './PositionTable'

export class PositionTableContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      positions: PositionService.getPositions()
    }
  }

  render() {
    return (
        <PositionTable positions={this.state.positions}></PositionTable>
    )
  }
}