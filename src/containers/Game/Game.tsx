import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'
import throttle from 'lodash/throttle'
import delay from 'lodash/delay'

import { IRootReducer } from '../../redux/reducers'
import { Wrapper } from './styled'
import { movePlayer, stopPlayer } from '../../redux/actions/player'
import { getKey } from '../../utils/keypress'
import { DIRECTIONS } from '../../constants'

interface IProps {
  children: ReactNode
  movePlayer: (direction: DIRECTIONS) => Action
  stopPlayer: () => Action
}

const Game: FunctionComponent<IProps> = props => {
  const handleKeyDown = throttle(
    (e: KeyboardEvent) => props.movePlayer(getKey(e.keyCode)),
    500,
  )
  const handleKeyUp = () =>
    delay((e: KeyboardEvent) => props.stopPlayer(), 1400)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)
    return () => document.removeEventListener('keyup', handleKeyUp)
  })

  return <Wrapper>{props.children}</Wrapper>
}

function mapStateToProps(state: IRootReducer) {
  return {}
}

export default connect(
  mapStateToProps,
  { movePlayer, stopPlayer },
)(Game)
