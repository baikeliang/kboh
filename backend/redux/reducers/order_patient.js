import Immutable from 'immutable'
import Promise from 'bluebird'
import  getApiIp  from 'backend/util/apiinterface.js'

const LOAD = 'bohe/order_patient/LOAD';
const LOAD_SUCCESS = 'bohe/order_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/order_patient/LOAD_FAIL';

const LOAD_DETAIL = 'bohe/order_patient/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/order_patient/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/order_patient/LOAD_DETAIL_FAIL';

const ORDERINFO_EDIT = 'bohe/order_patient/ORDERINFO_EDIT'
const ORDER_FLUSH = 'bohe/order_patient/ORDER_FLUSH'
const ORDER_ADD = 'bohe/order_patient/ORDER_ADD'


const SET_ORDER_TOSHOW = 'bohe/order_patient/SHOW'
const NEXT_GROUP_ORDERS = 'bohe/order_patient/NEXTGROUPORDERS'

const initialState = Immutable.Map({
    loaded: false,
    loading: false,
    showbegin: 0,
    detailedit:{}
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
              if(action.showOrdersBegin)
                return state.merge({ showbegin:action.showOrdersBegin , loading: false, loaded: true, users: action.result })
              else
                return state.merge({ loading: false, loaded: true, orders: action.result })
        case LOAD_FAIL:
            if(action.refresh && action.refresh.reject){
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL:
            return state.updateIn(['orders'], list => list.map(order => {
                    if(order.get('id') == action.id){
                      return order.merge({loading: true})
                    }
                    return order
            }))
        case LOAD_DETAIL_SUCCESS:
            if( !action.extract )
              return state.updateIn(['orders'], list => list.map(order => {
                    if(order.get('id') == action.result.id){
                        return order.merge({loading:false, loaded:true, ...action.result})
                    }
                        return order
              }))
           else
              return state.updateIn(['orders'], list => list.map(order => {
                    if(order.get('id') == action.result.id){
                        return order.merge({loading:false, loaded:true, ...action.result})
                    }
                        return order
              })).merge({ detailedit:{ idx:action.idx, data:action.result }})
        case LOAD_DETAIL_FAIL:
            return state.updateIn(['orders'], list => list.map(order => {
                    if(order.get('id') == action.error.id){
                    return order.merge({loading:false,loaded:false, error: action.error.info})
                    }
                    return order
            }))
        case ORDERINFO_EDIT:
             var pairs = action.result;
             var data = {};
             pairs.forEach((pair) => {
                 data[pair.key] = pair.val;
             })
             var detailedit ={ data }
             return state.mergeDeep({detailedit});
        case ORDER_FLUSH:
             var idx = state.getIn(['detailedit','idx']);
             var order = state.getIn(['orders',idx]).toJS();
             var datatomerge = state.getIn(['detailedit','data']).toJS();
             order = {...order,...datatomerge};
             console.log(order);
            return  state.setIn(['orders',idx],Immutable.Map(order));
        case ORDER_ADD:
            var newdata = state.getIn(['detailedit','data']);
            return state.updateIn(['orders'], list => list.push(newdata));
        case SET_ORDER_TOSHOW:
            return state.merge({ frontorder: action.result })
        default:
            return state
    }
}

export function frontOrder({ idx,id }){
     return {
        type: SET_ORDER_TOSHOW,
        result:{ idx,id }
     }

}

export function nextGroupOrders(begin){
    return {
        type:NEXT_GROUP_ORDERS,
        result: begin
    }
}

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['order_patient','loaded'])){
        loaded = state.getIn(['order_patient','loaded'])
    }
    if(state.hasIn(['order_patient','loading'])){
        loading = state.getIn(['order_patient','loading'])
    }
    return loaded || loading
}

export function LoadedorLoading_order(state,idx,id){
    var loaded = false
    var loading = false

    let order = state.getIn(['order_patient','orders',idx])

    if(order){
            loading = order.get('loading');
            loaded = order.get('loaded');
    }
    return loaded || loading
}

export function orderEdit(pairs){

    return {
        type:   ORDERINFO_EDIT,
        result: pairs
    }

}

export function orderFlush(pairs){

    return {
        type: ORDER_FLUSH
    }

}

export function orderADD(pairs){
    return {
        type: ORDER_ADD
    }
}



/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({
    user,
    num ,
    begin,
    req,
    refresh,
    showOrdersBegin
}) {
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
        promise: (client) => client.GET('http://'+getApiIp()+'/patient/orders/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.orders)

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


export function load_detail({
    id,
    idx,
    extract
}) {
    var params = {}
    params.id = id

    console.log('load_detail!!!!!!!!!!!')
    console.log(id)
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

                    return Promise.resolve(res.order)

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
