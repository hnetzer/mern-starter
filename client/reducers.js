/**
 * Root Reducer
 */
import { combineReducers } from 'redux'

// Import Reducers
import app from './modules/App/AppReducer'
import counter from './modules/Counter/CounterReducer'

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  counter,
})
