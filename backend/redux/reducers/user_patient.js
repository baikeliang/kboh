import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp  from 'backend/util/apiinterface.js'


const LOAD = 'bohe/user_patient/LOAD';
const LOAD_SUCCESS = 'bohe/user_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_patient/LOAD_FAIL';

const LOAD_DETAIL_BASEINFO = 'bohe/user_patient/LOAD_DETAIL_BASEINFO';
const LOAD_DETAIL_BASEINFO_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_BASEINFO_SUCCESS';
const LOAD_DETAIL_BASEINFO_FAIL = 'bohe/user_patient/LOAD_DETAIL_BASEINFO_FAIL';

const LOAD_DETAIL_HISTORY = 'bohe/user_patient/LOAD_DETAIL_HISTORY';
const LOAD_DETAIL_HISTORY_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_HISTORY_SUCCESS';
const LOAD_DETAIL_HISTORY_FAIL = 'bohe/user_patient/LOAD_DETAIL_HISTORY_FAIL';


const BASICINFO_SAVE = 'bohe/user_patient/BASICINFO_SAVE';
const BASICINFO_EDIT = 'bohe/user_patient/BASICINFO_EDIT';

const HISTORY_SAVE = 'bohe/user_patient/HISTORY_SAVE';
const HISTORY_EDIT_ADD = 'bohe/user_patient/HISTORY_EDIT_ADD';
const HISTORY_EDIT_DEL = 'bohe/user_patient/HISTORY_EDIT_DEL';
const HISTORY_FLUSH = 'bohe/user_patient/HISTORY_FLUSH';
const HISTORY_CHANGE_TIME = 'bohe/user_patient/HISTORY_CHANGE_TIME';



const SET_USER_TOSHOWINFO = 'bohe/user_patient/SHOWINFO'

const initialState = Immutable.Map({
    loaded: false,
    loading: false
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

                    allres = state.get('users').pop().toJS().concat(action.result)

                }else if(action.refresh.resolve){
                    action.refresh.resolve()
                }
            }
            if(allres){
              allres.push({flag:true})
              return state.merge({ loading: false, loaded: true, users: allres })
            }
            else{
                console.log('DDDDDDDDDD!!!!!')
              action.result.push({ flag:true })
              return state.merge({ loading: false, loaded: true, users: action.result })
            }
        case LOAD_FAIL:
            if(action.refresh && action.refresh.reject){
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })
        case SET_USER_TOSHOWINFO:
            return state.merge({ frontuserinfo: action.result } )
        case LOAD_DETAIL_BASEINFO:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.id){
                      return user.merge({loading: true,baseinfoedit:{}})
                    }
                    return user
            }))
        case LOAD_DETAIL_BASEINFO_SUCCESS:

            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.result.id){
                    return user.merge({loading:false,loaded:true,baseinfo:action.result})
                    }
                    return user
            }))
        case LOAD_DETAIL_BASEINFO_FAIL:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.error.id){
                    return user.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return user
            }))
        case BASICINFO_EDIT:
             var idx = state.getIn(['frontuserinfo','idx']);
             var pairs = action.result;
             var baseinfoedit = {};
             pairs.forEach((pair) => {
                 baseinfoedit[pair.key] = pair.val;
             })
             var meta_info = state.getIn(['users',idx,'baseinfoedit']);
             return state.setIn(['users',idx,'baseinfoedit'],meta_info.merge(baseinfoedit)); 
        case BASICINFO_SAVE:
             var idx = state.getIn(['frontuserinfo','idx']); 
             var infotomerge = state.getIn(['users',idx,'baseinfoedit']);
             var metainfo = state.getIn(['users',idx,'baseinfo']);
             return state.setIn(['users',idx,'baseinfo'],metainfo.merge(infotomerge)); 
        case LOAD_DETAIL_HISTORY:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.id){
                      return user.merge({hisloading: true,historyedit:{}})
                    }
                    return user
            }))
        case LOAD_DETAIL_HISTORY_SUCCESS:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.result.id){
                        console.log("QQQQQQQQQQQQQQQQQQQQQQQ")

                    var historyedit = {history:{body_condition:[],allergy:[],family_history:[],infection:[],medicine:[],surgery:[]},time:'',timelist:[]};

                    var metahistory = action.result.allhistory?action.result.allhistory[action.result.allhistory.length-1]:undefined;

                    if(metahistory){
                       
                       historyedit.history = {...historyedit.history, ...metahistory.history}
                    
                       historyedit.time = metahistory.time;

                       var timelist = action.result.allhistory.map((history) => { return history.time })

                       console.log(historyedit)
                       console.log("LLLHH")
                       historyedit.timelist = timelist;
                       historyedit.idx = action.result.allhistory.length-1;

                    }
                    return user.merge({hisloading:false,hisloaded:true,historyedit,allhistory:action.result.allhistory})
                    }
                    return user
            }))
        case LOAD_DETAIL_HISTORY_FAIL:
            return state.updateIn(['users'], list => list.map(user => {
                    if(user.get('id') == action.error.id){
                    return user.merge({hisloading:false,hisloaded:false, error: action.error.info})
                    }
                    return user
            }))
        case HISTORY_FLUSH:
            var idx = state.getIn(['frontuserinfo','idx']); 

            var historytomerge = state.getIn(['users',idx,'historyedit','history']);

            var historyidx = state.getIn(['users',idx,'historyedit','idx']);
            console.log('WWWWWWWWWWWWWW');
            console.log(historyidx);
            if(historyidx>=0){
              console.log("TTTTTTTTTTTTTTRRRRRRR")
              return state.setIn(['users',idx,'allhistory',historyidx,'history'],historytomerge);
            }
            else
              return state
        case HISTORY_EDIT_ADD:
            var idx = state.getIn(['frontuserinfo','idx']);
            var pair = action.result;

            console.log("UUU")
            console.log(pair.key)
            console.log(pair.val)
            var index = state.getIn(['users',idx,'historyedit','history',pair.key]).findIndex( value => value.get('name') == pair.val.name)
            console.log("UUU2")
            console.log(index)
            if(index>=0){
              console.log("EEEEEEEEQQQQQQQQ")  
              let i=0;
              console.log(state.getIn(['users',idx,'historyedit','history',pair.key]).toJS())
              return state.updateIn(['users',idx,'historyedit','history',pair.key], list => list.map(item => {
                    i++;
                    console.log('ADD!!!!!!')
                    console.log(item)
                    if(i==(index+1)){
                         return item.merge(pair.val);
                    } else{
                         return item;
                    }
               }))
            }
            else
              return state.setIn(['users',idx,'historyedit','history',pair.key],state.getIn(['users',idx,'historyedit','history',pair.key]).push(Immutable.Map(pair.val)));
        
        case HISTORY_EDIT_DEL:
            var idx = state.getIn(['frontuserinfo','idx']);
            var pair = action.result;
            console.log("UUU3")
            console.log(pair)
            var index = state.getIn(['users',idx,'historyedit','history',pair.key]).findIndex( value => value.get('name') == pair.val.name)
            console.log(index)
            if(index>=0)
              return state.setIn(['users',idx,'historyedit','history',pair.key],state.getIn(['users',idx,'historyedit','history',pair.key]).remove(index));
            else
              return state
        case HISTORY_CHANGE_TIME:
            var pos = action.result;
            var idx = state.getIn(['frontuserinfo','idx']); 
            var timelist = state.getIn(['users',idx,'historyedit','timelist']);
            if (pos.idx>=0) {
                console.log('PpPPPPPPPP');
                console.log(pos.idx);
                console.log(timelist);
                console.log(state.getIn(['users',idx,'allhistory',pos.idx]).toJS())
                return  state.setIn(['users',idx,'historyedit'],state.getIn(['users',idx,'allhistory',pos.idx])).setIn(['users',idx,'historyedit','timelist'],timelist).setIn(['users',idx,'historyedit','idx'],pos.idx);
            } else {
                return state
            }

        default:
            return state
    }
}
export function basicInfoSave(){

    return {
        type: BASICINFO_SAVE       
    }

}

export function basicInfoEdit(pairs){

    return {
        type: BASICINFO_EDIT,
        result: pairs       
    }

}

export function historyFlush(){

    return {
        type: HISTORY_FLUSH       
    }

}

export function historyEditADD(pair){

    return {
        type: HISTORY_EDIT_ADD,
        result: pair      
    }

}

export function historyEditDEL(pair){

    return {
        type: HISTORY_EDIT_DEL,
        result: pair     
    }

}


export function frontUserForInfo({ idx,id }){
     return {
        type: SET_USER_TOSHOWINFO,
        result:{ idx,id }
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
export function LoadedorLoadingUser(state){
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient',"frontuserinfo",'idx']);
    if(state.hasIn(['user_patient','users',idx,'loaded'])){
        loaded = state.getIn(['user_patient','users',idx,'loaded'])
    }
    if(state.hasIn(['user_patient','users',idx,'loading'])){
        loading = state.getIn(['user_patient','users',idx,'loading'])
    }
    return loaded || loading
}

export function LoadedorLoadingUser_History(state){
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient',"frontuserinfo",'idx']);
    if(state.hasIn(['user_patient','users',idx,'loaded'])){
        loaded = state.getIn(['user_patient','users',idx,'hisloaded'])
    }
    if(state.hasIn(['user_patient','users',idx,'loading'])){
        loading = state.getIn(['user_patient','users',idx,'hisloading'])
    }
    return loaded || loading
}

export function changeTime(pos){
     return {
        type: HISTORY_CHANGE_TIME,
        result:pos
     }
}


/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({ user, num ,begin, req, refresh }) {
    var params = {};

    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {

            params = { num:req.query.num, begin:req.query.begin }
            params.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }else{
        params = { num, begin }
    }
    return {

        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_patient/rest?', { params }, {
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
        refresh
    };

}

// 基础信息。。。。。。。。。。。。。。。。。。。。。
export function load_detail_baseinfo({ id }) {
    var params = {}
    params.id = id

    console.log('load_detail!!!!!!!!!!!')
    console.log(id)
    return {
        types: [ LOAD_DETAIL_BASEINFO, LOAD_DETAIL_BASEINFO_SUCCESS, LOAD_DETAIL_BASEINFO_FAIL ],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_patient/basicinfo/rest?', { params }, {
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

                    return Promise.resolve(res.baseinfo)

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
//既往史。。。。。。。。。。。。
export function load_detail_history({ id }) {
    var params = {}
    params.id = id

    console.log('load_detail!!!!!!!!!!!')
    console.log(id)
    return {
        types: [ LOAD_DETAIL_HISTORY, LOAD_DETAIL_HISTORY_SUCCESS, LOAD_DETAIL_HISTORY_FAIL ],
        promise: (client) => client.GET('http://'+getApiIp()+'/user_patient/history/rest?', { params }, {
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
                    console.log(res.allhistory)
                    return Promise.resolve(res)

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

