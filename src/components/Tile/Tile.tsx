import React, { FunctionComponent } from 'react'
import { Wrapper } from './styled'

interface IProps {
  tileCode: number
}

/**
 * Renders different tiles based on number code
 * If the number is less than 100, it can be walked through
 * If greater then 200 and less then 300 it cant be walked through
 * If greater then 300 it can be interacted with
 */
const Tile: FunctionComponent<IProps> = props => {
  return <Wrapper>{props.tileCode}</Wrapper>
}

export default Tile
