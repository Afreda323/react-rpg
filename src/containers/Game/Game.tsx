import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import { connect } from 'react-redux'
import { IRootReducer } from '../../redux/reducers'
import { Wrapper } from './styled'
import { movePlayer } from '../../redux/actions/player'
import { getKey } from '../../utils/keypress'
import { DIRECTIONS } from '../../constants'
import { Action } from 'redux'
import throttle from 'lodash/throttle'

interface IProps {
  children: ReactNode
  movePlayer: (direction: DIRECTIONS) => Action
}

const Game: FunctionComponent<IProps> = props => {
  const handleKey = throttle(
    (e: KeyboardEvent) => props.movePlayer(getKey(e.keyCode)),
    500,
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  })

  return <Wrapper>{props.children}</Wrapper>
}

function mapStateToProps(state: IRootReducer) {
  return {}
}

export default connect(
  mapStateToProps,
  { movePlayer },
)(Game)
