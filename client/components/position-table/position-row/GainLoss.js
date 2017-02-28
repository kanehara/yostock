export function GainLoss(props) {
  return (
    <div>{ props.gainLossDollar }</div>
    <div>{ (props.gainLossPercentage * 100).toFixed(2) }</div>
  )
}