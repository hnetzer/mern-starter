import callApi from '../../util/apiCaller'

// Export Constants
export const FETCH_COUNTER_RECEIVED = 'FETCH_COUNTER_RECEIVED'
export const FETCH_COUNTER_FAILED = 'FETCH_COUNTER_FAILED'
export const INCREMENT_COUNTER_RECEIVED = 'INCREMENT_COUNTER_RECEIVED'
export const INCREMENT_COUNTER_FAILED = 'INCREMENT_COUNTER_FAILED'

// Export Actions
export function fetchCount() {
  return (dispatch) => {
    return callApi('counter')
    .then((response) => dispatch(getCounterReceived(response)))
    .catch(() => dispatch(getCounterFailed()))
  }
}

function getCounterReceived(response) {
  return {
    type: FETCH_COUNTER_RECEIVED,
    count: response.value,
  }
}

function getCounterFailed() {
  return {
    type: FETCH_COUNTER_FAILED,
  }
}

export function fetchIncrementCounter() {
  return (dispatch) => {
    return callApi('counter/increment', 'post')
    .then((response) => dispatch(incrementCounterReceived(response)))
    .catch(() => dispatch(incrementCounterFailed()))
  }
}

export function incrementCounterReceived(response) {
  return {
    type: INCREMENT_COUNTER_RECEIVED,
    count: response.value,
  }
}

export function incrementCounterFailed() {
  return {
    type: INCREMENT_COUNTER_FAILED,
  }
}
