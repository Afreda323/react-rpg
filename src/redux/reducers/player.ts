import { Action } from 'redux'
import { DIRECTIONS, PLAYER, MAP } from '../../constants'
import { PLAYER_ACTIONS } from '../actions/player'

export interface IPlayerReducer {
  movement: {
    position: [number, number]
    direction: DIRECTIONS
    isMoving: boolean
  }
}

const initialState: IPlayerReducer = {
  movement: {
    position: [0, 0],
    direction: DIRECTIONS.LEFT,
    isMoving: false,
  },
}

export default function playerReducer(state = initialState, action: any) {
  switch (action.type) {
    case PLAYER_ACTIONS.MOVE_PLAYER:
      const newPosition = getNewPosition(state.movement.position, action.direction)
      return {
        ...state,
        movement: {
          ...state.movement,
          position: newPosition,
          direction:
            action.direction === DIRECTIONS.UP ||
            action.direction === DIRECTIONS.DOWN
              ? state.movement.direction
              : action.direction,
          isMoving: newPosition !== state.movement.position,
        },
      }
    case PLAYER_ACTIONS.STOP_PLAYER: {
      return {
        ...state,
        movement: {
          ...state.movement,
          isMoving: false,
        },
      }
    }
    default:
      return { ...state }
  }
}

function getNewPosition(
  oldPos: [number, number],
  direction: DIRECTIONS,
): [number, number] {
  let newPos = [...oldPos] as [number, number]
  switch (direction) {
    case DIRECTIONS.RIGHT:
      newPos = [oldPos[0] + PLAYER.WIDTH, oldPos[1]]
      break
    case DIRECTIONS.LEFT:
      newPos = [oldPos[0] - PLAYER.WIDTH, oldPos[1]]
      break
    case DIRECTIONS.UP:
      newPos = [oldPos[0], oldPos[1] - PLAYER.HEIGHT]
      break
    case DIRECTIONS.DOWN:
      newPos = [oldPos[0], oldPos[1] + PLAYER.HEIGHT]
      break
    default:
      break
  }
  return isOnMap(newPos) ? newPos : oldPos
}

function isOnMap(pos: [number, number]) {
  return (
    pos[0] <= MAP.WIDTH - PLAYER.WIDTH &&
    pos[0] >= 0 &&
    pos[1] <= MAP.HEIGHT - PLAYER.HEIGHT &&
    pos[1] >= 0
  )
}
