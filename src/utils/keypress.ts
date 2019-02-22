import { DIRECTIONS } from '../constants'

export const getKey = (keyCode: number) => {
  switch (keyCode) {
    case 38:
      return DIRECTIONS.UP
    case 40:
      return DIRECTIONS.DOWN
    case 37:
      return DIRECTIONS.LEFT
    case 39:
      return DIRECTIONS.RIGHT
    default:
      return DIRECTIONS.NONE
  }
}
