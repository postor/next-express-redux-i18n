import reduxHelper from 'next.js-redux-helper'
import reduxWrapper from 'next.js-redux-helper/dest/wrapper'
import { reducers as userReducers } from './user'

const reducers = {
  ...userReducers,
}

var initialState = {
}

if (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  initialState = window.__REDUX_DEVTOOLS_EXTENSION__()
}

/**
 * get initStore function
 */
export const initStore = reduxHelper(reducers, initialState)

export const wrapper = reduxWrapper(initStore)