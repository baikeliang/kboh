import Immutable from 'immutable'
import Promise from 'bluebird'

const LOAD = 'bohe/auth/LOAD';
const LOAD_SUCCESS = 'bohe/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/auth/LOAD_FAIL';
const LOGIN = 'bohe/auth/LOGIN';
const LOGIN_SUCCESS = 'bohe/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'bohe/auth/LOGIN_FAIL';
const LOGOUT = 'bohe/auth/LOGOUT';
const LOGOUT_SUCCESS = 'bohe/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'bohe/auth/LOGOUT_FAIL';

const initialState =Immutable.Map({
  loaded: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            console.log("LOAD_SUCCESS!!!!!!!!!!")
            console.log(action.result)
            return state.merge({ loading: false, loaded: true, user: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOGIN:
            return state.merge({ loggingIn: true })
        case LOGIN_SUCCESS:
            return state.merge({ loggingIn: false, user: action.result })
        case LOGIN_FAIL:
            return state.merge({ loggingIn: false, user: null, loginError: action.error })

        case LOGOUT:
            return state.merge({ loggingOut: true })
        case LOGOUT_SUCCESS:
            return state.merge({
                loggingOut: false,
                user: null
            })
        case LOGOUT_FAIL:
            return state.merge({
                loggingOut: false,
                logoutError: action.error
            })
        default:
            return state
    }
}


export function isLoaded(globalState) {
  console.log('LLLLLLLLL'+globalState)
  return globalState.has('auth') && globalState.getIn(['auth','loaded']);
}

export function load({ openid,token }) {
    var params = {}
    console.log('YYYYYY '+openid)
    if (typeof window === 'undefined') { ///server side
        console.log("server side ")
        if (openid) ///  微信的鉴权要素是openid
        {
            console.log("server has openid")
            params.openid = openid;

        } else if (token) { /// 浏览器访问的鉴权要素是 cookie token

            params.token = token;

        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }/// client side use cookie token to auth
    console.log("HHHHTT")

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/userinfo/rest?', { params }, {
            format: function(response){
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    console.log('>>>>>>>>>>>>>>>>')
                    return response.json();
            },
            done: function(user) {
                console.log('MMMMMM'+user);
                console.log('<>>>>')
                console.log(user)
                console.log('>>>>>>')
                if (user.valid == 1) {
                    console.log("succed")
                    return Promise.resolve(user)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({ info: 'auth'})
                }
            },
            error: function(err) {
                console.log(err)
                console.log('GGGGGGGGGGGGGG')     
                return  Promise.reject({ info: 'wire' })
            }
        })
    };
}




export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.POST('/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
