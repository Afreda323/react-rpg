import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { IRootReducer } from '../../redux/reducers'
import { IPlayerReducer } from '../../redux/reducers/player'
import { Hero } from './styled'

interface IProps extends IPlayerReducer {}

const Player: FunctionComponent<IProps> = props => {
  return (
    <Hero
      direction={props.movement.direction}
      position={props.movement.position}
      isWalking={props.movement.isMoving}
    />
  )
}

function mapStateToProps(state: IRootReducer) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps)(Player)
