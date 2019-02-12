import { combineReducers } from 'redux'
import playerReducer, { IPlayerReducer } from './player'
import mapReducer, { IMapReducer } from './map'

export interface IRootReducer {
  player: IPlayerReducer
  map: IMapReducer
}

const rootReducer = combineReducers<IRootReducer>({
  player: playerReducer,
  map: mapReducer,
})

export default rootReducer
