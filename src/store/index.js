import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user'
import test from './reducers/test'

let store = createStore(combineReducers({
  user,
  test
}), applyMiddleware(thunk))

export default store