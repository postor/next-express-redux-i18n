import { setTimeout } from "timers";

export const actionTypes = {
  decr: 'decr',
  incr: 'incr',
}

export const reducers = {
  [actionTypes.incr]: (state = {}, action) => {
    const { value = 0 } = state
    return {
      ...state,
      value: value + 1,
    }
  },
  [actionTypes.decr]: (state = {}, action) => {
    const { value = 0 } = state
    return {
      ...state,
      value: value - 1,
    }
  },
}

/**
 * sync incr
 */
export const incr = () => {
  return {
    type: actionTypes.incr
  }
}

/**
 * 
 */
export const decr = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: actionTypes.decr
    })
  }, 1000)
}