import Immutable from 'immutable'
import { authBohe } from './user.actions.js'
import { AUTH_BOHE, BOHE_FAILED, BOHE_LOGIN, BOHE_LOGOUT } from './user.actionTypes.js'
import * as storage from '../../utils/localStorage.js'

const initialState = Immutable.Map({
  tokens: {
    twitter: storage.get('token')
  } /*'manage_account'*/ ,
  fetchingAuth: false
})

function userReducer(state = initialState, action = { type : undefined }) {

  switch (action.type) {
    case AUTH_BOHE:
      return state.set('fetchingAuth', true)
    case BOHE_FAILED:
      return state.set('fetchingAuth', false)
    case BOHE_LOGIN:
      storage.setItem('token', action.data.twitter.token)
      return state.merge(state, { tokens: { twitter: action.data.twitter.token }, fetchingAuth: false})
    case BOHE_LOGOUT:
      return state.merge(state, { tokens: { twitter: {} }})
    default:
      return state
  }
}

export default userReducer
