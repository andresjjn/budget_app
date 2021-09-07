import { Statistic } from 'semantic-ui-react'

function DisplayBalance(props) {
  const { size, color, style, label, value} = props
  return(
    <Statistic size={size} color={color}>
      <Statistic.Label style={style}>
        {label}
      </Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  )
}

export default DisplayBalance