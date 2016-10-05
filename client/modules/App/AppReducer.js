// Import Actions
import { TOGGLE_CLICK } from './AppActions'

// Initial State
const initialState = {
  toggle: false,
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CLICK:
      return {
        toggle: !state.toggle,
      }

    default:
      return state
  }
}

// Export Reducer
export default AppReducer
