import Immutable from 'immutable'
import Promise from 'bluebird'

const LOAD = 'bohe/order_patient/LOAD';
const LOAD_SUCCESS = 'bohe/order_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/order_patient/LOAD_FAIL';
const LOGIN = 'bohe/order_patient/LOGIN';
const LOGIN_SUCCESS = 'bohe/order_patient/LOGIN_SUCCESS';
const LOGIN_FAIL = 'bohe/order_patient/LOGIN_FAIL';
const LOGOUT = 'bohe/order_patient/LOGOUT';
const LOGOUT_SUCCESS = 'bohe/order_patient/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'bohe/order_patient/LOGOUT_FAIL';

const initialState = Immutable.Map({
    loaded: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loaded: true })
        case LOAD_SUCCESS:
            return state.merge({ loading: false, loaded: true, orders: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        default:
            return state
    }
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({ user, num }) {
    var params = {}
    params.num = num


    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/patient/orders/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                console.log('>>>>>>>>>>>>>>>>')
                return response.json();
            },
            done: function(res) {
                console.log('MMMMMM' + orders);
                console.log('<>>>>')
                console.log('>>>>>>')

                if (res.valid == 1) {

                    return Promise.resolve(res.orders)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject(res.err)
                }
            },
            error: function(err) {
                console.log(err)
                console.log('GGGGGGGGGGGGGG')
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}
