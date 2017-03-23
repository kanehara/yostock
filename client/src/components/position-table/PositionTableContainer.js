import React from 'react'
import services from '../../services'
import { PositionTable } from './PositionTable'

export class PositionTableContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      positions: services.PositionService.getPositions()
    }
  }

  render() {
    return (
        <PositionTable positions={this.state.positions}/>
    )
  }
}