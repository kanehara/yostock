import React from 'react'export function ValueSummary(props) {  return (    <div>      <div>Per share:</div>      <div>{ props.perShareValue }</div>      <div>Total:</div>      <div>{ props.totalValue }</div>    </div>  )}