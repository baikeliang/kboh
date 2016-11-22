import Immutable from 'immutable'
import Promise from 'bluebird'

const LOAD = 'bohe/user_patient/LOAD';
const LOAD_SUCCESS = 'bohe/user_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_patient/LOAD_FAIL';

const LOAD_DETAIL = 'bohe/user_patient/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/user_patient/LOAD_DETAIL_FAIL';

const SET_USER_TOSHOWINFO = 'bohe/user_patient/SHOWINFO'

const NEXT_GROUP_USERS = 'bohe/user_patient/NEXTGROUPUSERS'

const initialState = Immutable.Map({
    loaded: false,
    loading: false,
    showbegin: 0
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            var allres;
            console.log('111DDDDDDDDDD!!!!!')
            if(Immutable.List.isList(state.get('users'))){
                if(!action.refresh){

                    allres = state.get('users').toJS().concat(action.result)

                }else if(action.refresh.resolve){

                    action.refresh.resolve()

                }
            }
            console.log(allres)
            console.log('TTTTTTTTT')
            if(allres){
              if(action.showUsersBegin)
                return state.merge({showbegin:action.showUsersBegin ,loading: false, loaded: true, users: allres })
              else
                return state.merge({loading: false, loaded: true, users: allres })
            }
            else{
              if(action.showUsersBegin)
                return state.merge({showbegin:action.showUsersBegin , loading: false, loaded: true, users: action.result })
              else
                return state.merge({loading: false, loaded: true, users: action.result })
            }
        case LOAD_FAIL:
            if(action.refresh && action.refresh.reject){
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.id){
                      return user.merge({loading: true})
                    }
                    return user
            }))
        case LOAD_DETAIL_SUCCESS:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.result.id){
                    return user.merge({loading:false,loaded:true, ...action.result})
                    }
                    return user
            }))


        case LOAD_DETAIL_FAIL:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.error.id){
                    return user.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return user
            }))
        case SET_USER_TOSHOWINFO:
            return state.merge({ frontuserinfo: action.result } )
        case NEXT_GROUP_USERS:
            return state.merge({ showbegin:action.result })
        default:
            return state
    }
}

export function frontUserForInfo({ idx,id }){
     return {
        type: SET_USER_TOSHOWINFO,
        result:{ idx,id }
     }

}

export function nextGroupUsers(begin){
    return {
        type:NEXT_GROUP_USERS,
        result: begin
    }
}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['user_patient','loaded'])){
        loaded = state.getIn(['user_patient','loaded'])
    }
    if(state.hasIn(['user_patient','loading'])){
        loading = state.getIn(['user_patient','loading'])
    }
    return loaded || loading
}

/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({
    user,
    num,
    begin,
    req,
    refresh,
    showUsersBegin
}) {
    var params = {};

    if ((typeof window === 'undefined') || (window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {

            params = { num: req.query.num, begin: req.query.begin }
            params.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    } else {
        params = { num, begin }
    }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://192.168.10.10/user_patient/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.users)

                } else {
                    //var err = { info: 'auth' }
                    return Promise.reject({ info: 'notvalid' })
                }
            },
            error: function(err) {
                return Promise.reject({ info: 'wire' })
            }
        }),
        refresh,
        showUsersBegin
    };

}



export function load_detail({ id }) {
    var params = {}
    params.id = id

    console.log('load_detail!!!!!!!!!!!')
    console.log(id)
    return {
        types: [ LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL ],
        promise: (client) => client.GET('http://192.168.10.10/patient/info/rest?', { params }, {
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

                    return Promise.resolve(res.user)

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
        id
    };

}
