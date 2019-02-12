import { DIRECTIONS } from '../../constants'

export enum PLAYER_ACTIONS {
  MOVE_PLAYER = 'MOVE_PLAYER',
}

export const movePlayer = (direction: DIRECTIONS) => ({
  type: PLAYER_ACTIONS.MOVE_PLAYER,
  direction,
})
