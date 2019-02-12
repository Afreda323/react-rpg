import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { IRootReducer } from '../../redux/reducers'
import { Wrapper } from './styled'

interface IProps {
  tiles: number[][]
}

const Game: FunctionComponent<IProps> = props => {
  return <Wrapper>{props.tiles.length}</Wrapper>
}

function mapStateToProps(state: IRootReducer) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(
  mapStateToProps,
  {},
)(Game)
