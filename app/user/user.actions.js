import { AUTH_BOHE, BOHE_LOGIN, BOHE_FAILED, BOHE_LOGOUT } from './user.actionTypes.js'
import fetch from 'isomorphic-fetch'
import * as storage from '../../persistance/storage.js'

export function authBohe() {
  return dispatch => {
    dispatch({ type: AUTH_BOHE })

    // TODO change url generic solution
    return fetch('http://127.0.0.1:8000/profile',{
      credentials: 'same-origin'
    })
      .then(checkStatusCode)
      .then(responseToJson)
      .then(data => {
        if (data._id && data.twitter.token){
          storage.put('token', data.twitter.token)
          dispatch(twitterLogin(data))
          // TODO create more dumb components and move dispatcher to parent -> actionName=dispatch(actionName()) and then child will just call this! :)
          //window.history.pushState(null, null, '/')
        } else {
          handleError()
        }
      })
      .catch(handleError);

    // TODO abstract error handling to separate service
    function responseToJson(res){
      return res.json()
    }

    // TODO abstract error handling to separate service
    function checkStatusCode(res){
      if (res.status >= 400)
        throw new Error("Bad response from server");

      return res
    }

    function handleError(res){
      dispatch(twitterFailed())
      console.log('ended BADD!!! from authTwitter', res)
      //TODO : fix routing not through the window
      //window.history.pushState(null, null, '/login')
    }
  }
}

export function boheLogin(data) {
  return { type: BOHE_LOGIN, data }
}

export function boheFailed(){
  return { type: BOHE_FAILED }
}

export function boheLogout() {
  storage.remove('token')
  return { type: BOHE_LOGOUT }
}