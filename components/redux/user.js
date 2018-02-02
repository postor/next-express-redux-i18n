import request from 'superagent'
import { cookieName } from '../../jwt-config'

export const actionTypes = {
  set: 'set_user',
  clear: 'clear_user',
}

export const reducers = {
  [actionTypes.set]: (state = {}, action = {}) => {
    const { user } = action
    return {
      ...state,
      user,
    }
  },
  [actionTypes.clear]: (state = {}, ) => {
    return {
      ...state,
      user: undefined,
    }
  },
}

/**
 * set user
 */
export const login = (username, password) => dispatch => {
  request.get('/apis/csrf').then((res) => {
    return res.headers['csrf-token']
  }).then((csrf) => {
    return request.post('/apis/unauthed/login').send({
      username,
      password,
    }).set({
      'csrf-token': csrf
    })
  }).then((res) => {
    if (res.body.error) {
      return Promise.reject(res.body.error)
    }
    return res.body.token
  }).then((token) => {
    dispatch({
      type: actionTypes.set,
      user: {
        username,
        token,
      }
    })
  }).catch((e) => {
    console.log(e)
    alert(e)
  })
}


/**
 * set user
 */
export const set = (user) => {
  return {
    type: actionTypes.set,
    user,
  }
}

/**
 * clear user
 */
export const clear = () => {
  document.cookie = `${cookieName}=`
  return {
    type: actionTypes.clear,
  }
}