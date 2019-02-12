import { Action } from 'redux'
import { DIRECTIONS, PLAYER } from '../../constants'
import { PLAYER_ACTIONS } from '../actions/player'

export interface IPlayerReducer {
  movement: {
    position: [number, number]
    direction: DIRECTIONS
  }
}

const initialState: IPlayerReducer = {
  movement: {
    position: [0, 0],
    direction: DIRECTIONS.LEFT,
  },
}

export default function playerReducer(state = initialState, action: any) {
  switch (action.type) {
    case PLAYER_ACTIONS.MOVE_PLAYER:
      return {
        ...state,
        movement: {
          ...state.movement,
          position: getNewPosition(state.movement.position, action.direction),
          direction:
            action.direction === DIRECTIONS.UP || action.direction === DIRECTIONS.DOWN
              ? state.movement.direction
              : action.direction
        },
      }
    default:
      return { ...state }
  }
}

function getNewPosition(
  oldPos: [number, number],
  direction: DIRECTIONS,
): [number, number] {
  switch (direction) {
    case DIRECTIONS.RIGHT:
      return [oldPos[0] + PLAYER.WIDTH, oldPos[1]]
    case DIRECTIONS.LEFT:
      return [oldPos[0] - PLAYER.WIDTH, oldPos[1]]
    case DIRECTIONS.UP:
      return [oldPos[0], oldPos[1] - PLAYER.HEIGHT]
    case DIRECTIONS.DOWN:
      return [oldPos[0], oldPos[1] + PLAYER.HEIGHT]
    default:
      return oldPos
  }
}
