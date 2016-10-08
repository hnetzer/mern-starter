// Import Actions
import { FETCH_COUNTER_RECEIVED, FETCH_COUNTER_FAILED, INCREMENT_COUNTER_RECEIVED, INCREMENT_COUNTER_FAILED } from './CounterActions'

// Initial State
const initialState = {
  count: 0,
  error: null,
}

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTER_RECEIVED:
      return {
        count: action.count,
      }

    case FETCH_COUNTER_FAILED:
      return {
        error: 'Failed to fetch count.',
      }

    case INCREMENT_COUNTER_RECEIVED:
      return {
        count: action.count,
      }

    case INCREMENT_COUNTER_FAILED:
      return {
        error: 'Failed to increment counter.',
      }

    default:
      return state
  }
}

// Export Reducer
export default CounterReducer
