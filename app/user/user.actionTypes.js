import KeyMirror from 'keymirror'

const actionTypes = KeyMirror({
  AUTH_BOHE: null,
  BOHE_LOGIN: null,
  BOHE_FAILED: null,
  BOHE_LOGOUT: null
})

Object.freeze(actionTypes)

export default(actionTypes)