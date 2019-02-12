import { applyMiddleware, createStore, } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

export function configStore() {
  return createStore(rootReducer, applyMiddleware(logger))
}
