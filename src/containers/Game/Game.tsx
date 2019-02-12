import React, { FunctionComponent, ReactNode } from 'react'
import { connect } from 'react-redux'
import { IRootReducer } from '../../redux/reducers'
import { Wrapper } from './styled'

interface IProps {
  children: ReactNode
}

const Game: FunctionComponent<IProps> = props => {
  return <Wrapper>{props.children}</Wrapper>
}

function mapStateToProps(state: IRootReducer) {
  return {}
}

export default connect(mapStateToProps)(Game)
