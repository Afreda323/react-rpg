import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { IRootReducer } from '../../redux/reducers'
import { IPlayerReducer } from '../../redux/reducers/player'
import styled, { css, keyframes } from 'styled-components'
import { PLAYER } from '../../constants'
import hero from '../../sprites/hero.png'

interface IProps extends IPlayerReducer {}

const Player: FunctionComponent<IProps> = props => {
  return (
    <div>
      <Hero />
    </div>
  )
}

function mapStateToProps(state: IRootReducer) {
  return {
    ...state.player,
  }
}

const idleAnimation = keyframes`
  100% { background-position: ${PLAYER.WIDTH * 12}px 0; }
`

const idleCss = css`
  animation: ${idleAnimation} 2s steps(12) infinite;
`

const Hero = styled.div`
  height: ${PLAYER.HEIGHT}px;
  width: ${PLAYER.WIDTH}px;
  background: url('${hero}') 0px 0px;
  ${idleCss}
`

export default connect(mapStateToProps)(Player)
