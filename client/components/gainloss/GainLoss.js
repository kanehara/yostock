import React from 'react';

export function GainLoss(props) {
  return (
    <div>
      <div>${ props.gainLossDollar }</div>
      <div>%{ (props.gainLossPercentage * 100).toFixed(2) }</div>
    </div>
  )
}