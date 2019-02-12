import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IRootReducer } from '../../redux/reducers'
import { IPlayerReducer } from '../../redux/reducers/player'
import { Hero } from './styled'

interface IProps extends IPlayerReducer {}

const Player: FunctionComponent<IProps> = props => {
  const [lastPos, setLastPos] = useState(props.movement.position)
  const [isWalking, setIsWalking] = useState(false)

  useEffect(() => {
    setLastPos(props.movement.position)
    setIsWalking(lastPos !== props.movement.position)
  }, [props.movement.position])

  return (
    <Hero
      direction={props.movement.direction}
      position={props.movement.position}
      isWalking={isWalking}
    />
  )
}

function mapStateToProps(state: IRootReducer) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps)(Player)
