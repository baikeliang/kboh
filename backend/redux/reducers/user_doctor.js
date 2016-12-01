import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD = 'bohe/user_doctor/LOAD';
const LOAD_SUCCESS = 'bohe/user_doctor/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_doctor/LOAD_FAIL';

const LOAD_DETAILS = 'bohe/user_doctor/LOAD_DETAILS';
const LOAD_DETAILS_SUCCESS = 'bohe/user_doctor/LOAD_DETAILS_SUCCESS';
const LOAD_DETAILS_FAIL = 'bohe/user_doctor/LOAD_DETAILS_FAIL';

const LOAD_DETAIL = 'bohe/user_doctor/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/user_doctor/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/user_doctor/LOAD_DETAIL_FAIL';



const initialState = Immutable.Map({
    loaded: false,
    loading: false
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            return state.merge({ loading: false, loaded: true, doctors: action.result })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAILS:
            return state.merge({ loading: true });
        case LOAD_DETAILS_SUCCESS:
            return state.updateIn(['doctors'], list => list.map(doctor => {
                    let _doctors_ = action.result;
                    _doctors_.map((_doctor_)=>{
                         if(doctor.get('id')==_doctor_.id)
                             doctor = doctor.merge(_doctor_);
                    })
                    return doctor;
              }))
        case LOAD_DETAILS_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL:
            return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.id){
                      return doctor.merge({loading: true})
                    }
                    return doctor
            }))
        case LOAD_DETAIL_SUCCESS:
            if( !action.extract )
              return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctors.get('id') == action.result.id){
                        return doctors.merge({loading:false, loaded:true, ...action.result})
                    }
                        return doctors
              }))
           else
              return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.result.id){
                        return doctor.merge({loading:false, loaded:true, ...action.result})
                    }
                        return doctor
              })).merge({ detailedit:{ idx:action.idx, data:action.result }})
        case LOAD_DETAIL_FAIL:
            return state.updateIn(['doctors'], list => list.map(doctor => {
                    if(doctor.get('id') == action.error.id){
                    return doctor.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return doctor
            }))
        default:
            return state
    }
}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['user_doctor','loaded'])){
        loaded = state.getIn(['user_doctor','loaded'])
    }
    if(state.hasIn(['user_doctor','loading'])){
        loading = state.getIn(['user_doctor','loading'])
    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({
    user,
    req
}) {
    var params = {};

    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {
            params.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }else{

    }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_doctor/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.doctors)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({ info: 'notvalid' })
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        })
    };

}

export function load_details({
    user,
    time,
    serviceid,
    req,
    extract
}) {
    var params = {}
    params.time = time;
    params.serviceid = serviceid;
    return {
        types: [ LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL ],
        promise: (client) => client.GET('http://'+getApiIp()+'/patient/orderInfo/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.doctors)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({id, info:'notvalid'})
                }
            },
            error: function(err) {
                console.log(err)
                console.log('GGGGGGGGGGGGGG1')
                return Promise.reject({id, info: 'wire' })
            }
        }),
        id,
        idx,
        extract
    };

}

export function load_detail({
    id,
    idx,
    extract
}) {
    var params = {}
    params.id = id

    return {
        types: [ LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL ],
        promise: (client) => client.GET('http://'+getApiIp()+'/patient/orderInfo/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                console.log('>>>>>>>>>>>>>>>>')
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.doctor)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({id, info:'notvalid'})
                }
            },
            error: function(err) {
                console.log(err)
                console.log('GGGGGGGGGGGGGG1')
                return Promise.reject({id, info: 'wire' })
            }
        }),
        id,
        idx,
        extract
    };

}




