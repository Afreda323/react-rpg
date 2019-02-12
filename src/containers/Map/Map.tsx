import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { IRootReducer } from '../../redux/reducers'
import { Wrapper, TileRow } from './styled'
import Tile from '../../components/Tile'

interface IProps {
  tiles: number[][]
}

const Map: FunctionComponent<IProps> = props => {
  return (
    <Wrapper>
      {props.tiles.map((row, i) => (
        <TileRow key={`row_${i}`}>
          {row.map((tile, j) => (
            <Tile key={`tile_${i}_${j}`} tileCode={tile} />
          ))}
        </TileRow>
      ))}
    </Wrapper>
  )
}

function mapStateToProps(state: IRootReducer) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(
  mapStateToProps,
  {},
)(Map)
