import React from "react";
import {ValueSummary} from "./ValueSummary";

export function PositionBasisValue(props) {
  const style = {
    flexGrow: 2
  }

  const perShareValue = (props.position.costbasis / props.position.quantity) ?
      (props.position.costbasis / props.position.quantity).toFixed(2) :
      'N/A';
  const costBasis = props.position.costbasis ?
      props.position.costbasis.toFixed(2) :
      'N/A'
  return (
      <div style={style}>
        <h3>Cost Basis</h3>
        <ValueSummary perShareValue={perShareValue} totalValue={costBasis}/>
      </div>
  )
}