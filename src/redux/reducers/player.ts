import { Action } from 'redux'
import { DIRECTIONS } from '../../constants'

export interface IPlayerReducer {
  movement: {
    position: number[]
    direction: DIRECTIONS
  }
}

const initialState: IPlayerReducer = {
  movement: {
    position: [0, 0],
    direction: DIRECTIONS.LEFT,
  },
}

export default function playerReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return { ...state }
  }
}
