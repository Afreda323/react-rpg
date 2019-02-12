import { combineReducers } from 'redux'
import playerReducer, { IPlayerReducer } from './player'

export interface IRootReducer {
  player: IPlayerReducer
}

const rootReducer = combineReducers<IRootReducer>({
  player: playerReducer,
})

export default rootReducer
