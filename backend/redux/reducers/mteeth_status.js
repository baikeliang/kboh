import Immutable from 'immutable'
import Promise from 'bluebird'
import getApiIp from 'backend/util/apiinterface.js'

const LOAD = 'bohe/mteeth_status/LOAD';
const LOAD_SUCCESS = 'bohe/mteeth_status/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/mteeth_status/LOAD_FAIL';


const SWITCH_TEETH = 'bohe/mteeth_status/SWITCHTEETH';
const SWITCH_ACHE = 'bohe/mteeth_status/SWITCHACHE';
const SWITCH_TOOTH = 'bohe/mteeth_status/SWITCHTOOTH';

const ADD_TEETH = 'bohe/mteeth_status/ADD_TEETH';

const  FLUSH_GRAPHY_DATA = 'bohe/mteeth_status/FLUSHGRAPHYDATA';
const  FLUSH_NEW_GRAPHY_DATA = 'bohe/mteeth_status/FLUSHNEWGRAPHYDATA';

const  CREATE_TEETH_BEGIN = 'bohe/mteeth_status/CREATE_TEETH_BEGIN';
const  CREATE_TEETH_SUCCESS = 'bohe/mteeth_status/CREATE_TEETH_SUCCESS';
const  CREATE_TEETH_FAIL = 'bohe/mteeth_status/CREATE_TEETH_BEGIN';

const  UPDATE_TEETH_BEGIN = 'bohe/mteeth_status/UPDATE_TEETH_BEGIN';
const  UPDATE_TEETH_SUCCESS = 'bohe/mteeth_status/UPDATE_TEETH_SUCCESS';
const  UPDATE_TEETH_FAIL = 'bohe/mteeth_status/UPDATE_TEETH_FAIL';

var teeth_ui = {
	        size: 0,
	        ache_list:[
            {
              name:'C:龋坏',
              bool:false
            },
            {
              name:'M:缺失',
              bool:false
            },
            {
              name:'F:填充物',
              bool:false
            },
            {
              name:'R:扭转牙',
              bool:false
            },
            {
              name:'U:未见萌出',
              bool:false
            },
            {
              name:'IT:种植牙',
              bool:false
            },
            {
              name:'IM:阻生牙',
              bool:false
            },
            {
              name:'CP:部分冠',
              bool:false
            },
            {
              name:'CF:全冠',
              bool:false
            },
            {
              name:'GO:金合金高嵌体',
              bool:false
            },
            {
              name:'CV:瓷贴面',
              bool:false
            },
            {
              name:'RV:树脂贴面',
              bool:false
            },
            {
              name:'FP:固定桥',
              bool:false
            },
            {

              name:'RP:可摘局部义齿',
              bool:false
            },
            {

              name:'RP:可摘局部义齿',
              bool:false
            },
            {

              name:'DCP:畸形中央尖',
              bool:false
            },
            {

              name:'TC:牙隐裂',
              bool:false
            }
        ],
        teeth:[
            {
              name:11,
              ache:[
              ]
            },
            {
              name:12,
              ache:[

              ]
            },
            {
              name:13,
              ache:[

              ]
            },
            {
              name:14,
              ache:[

              ]
            },
            {
              name:15,
              ache:[

              ]
            },
            {
              name:16,
              ache:[

              ]
            },
            {
              name:17,
              ache:[

              ]
            },
            {
              name:18,
              ache:[

              ]
            },
            {
              name:21,
              ache:[

              ]
            },
            {
              name:22,
              ache:[

              ]
            },
            {
              name:23,
              ache:[

              ]
            },
            {
              name:24,
              ache:[

              ]
            },
            {
              name:25,
              ache:[

              ]
            },
            {
              name:26,
              ache:[

              ]
            },
            {
              name:27,
              ache:[

              ]
            },
            {
              name:28,
              ache:[

              ]
            },
            {
              name:41,
              ache:[

              ]
            },
            {
              name:42,
              ache:[

              ]
            },
            {
              name:43,
              ache:[

              ]
            },
            {
              name:44,
              ache:[

              ]
            },
            {
              name:45,
              ache:[

              ]
            },
            {
              name:46,
              ache:[

              ]
            },
            {
              name:47,
              ache:[

              ]
            },
            {
              name:48,
              ache:[

              ]
            },
            {
              name:31,
              ache:[

              ]
            },
            {
              name:32,
              ache:[

              ]
            },
            {
              name:33,
              type:0,
              ache:[

              ]
            },
            {
              name:34,
              ache:[

              ]
            },
            {
              name:35,
              ache:[

              ]
            },
            {
              name:36,
              ache:[

              ]
            },
            {
              name:37,
              ache:[

              ]
            },
            {
              name:38,
              ache:[

              ]
            }
          ]
      };


const initialState = Immutable.Map({
    loaded: false,
    loading: false,
    teeth_ui
  }
);

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            var _data = {};
            var teethlist = action.result;

            _data[action.index.toString()] = teethlist;

            var tooth_ui = (teethlist.length > 0) ? teethlist[teethlist.length - 1] : {}

            var timelist =  teethlist.map( (teeth) => {
                return  teeth.time;
            })
            console.log(timelist)
            console.log('tttttt!!!!!!!!!!!eee')
            console.log(_data)
            var teeth_ui = (teethlist.length > 0) ? { idx: teethlist.length - 1, useridx: action.index.toString(), timelist, size: teethlist.length, ...tooth_ui }:{};

            return state.mergeDeep({ loading: false, loaded: true, teeth_ui, allUserTeeth: _data })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
        case ADD_TEETH:
            return state.setIn(['teeth_ui','idx'],'add').setIn(['teeth_ui','time'],'testadd');
        case FLUSH_GRAPHY_DATA:
            var useridx = state.getIn(['teeth_ui', 'useridx'])
            var idx = state.getIn(['teeth_ui', 'idx'])
            var newteeth  = state.getIn(['teeth_ui','teeth']);
            console.log("RRRRRRRRwwwqqqqq")
            console.log(newteeth)
            return  state.setIn(['allUserTeeth',useridx,idx,'teeth'],newteeth)
        case FLUSH_NEW_GRAPHY_DATA:
            var newteeth  = state.getIn(['teeth_ui','teeth']);
            var time = state.getIn(['teeth_ui','time']);
            var useridx = state.getIn(['teeth_ui','useridx']);
            var newteeth_imu =  Immutable.Map({ time });
            newteeth_imu = newteeth_imu.setIn(['teeth'],newteeth)
            let idx=-1;
            if(!state.getIn(['allUserTeeth',useridx])){
                state = state.setIn(['allUserTeeth',useridx],Immutable.List([]));
            }
            if((idx = state.getIn(['allUserTeeth',useridx]).findIndex(value => value.get('time') == time))>=0){
                 return state.setIn(['allUserTeeth',useridx,idx],newteeth_imu);
            }else{
                 return state.updateIn(['allUserTeeth',useridx],list => list.push(newteeth_imu));
            }
        case SWITCH_TEETH:
            var pos = action.result;
            var teeth;
            var dataToShow;
            if (pos.useridx) {
                teeth = state.get('allUserTeeth').get(pos.useridx).get(pos.idx).toJS();
                dataToShow = {...pos, size: state.get('allUserTeeth').get(pos.useridx).size, teeth: teeth }
            } else {
                teeth = state.get('allUserTeeth').get(state.getIn(['teeth_ui', 'useridx'])).get(pos.idx).toJS();
                dataToShow = {...pos, teeth: teeth }
            }
            return state.mergeDeep({ teeth_ui: dataToShow })
        case SWITCH_ACHE:
            var achetoAdd = action.result;
            if (achetoAdd.status) {
                return state.updateIn(['teeth_ui', 'teeth'], list => list.map(tooth => {
                    if (tooth.get('name') == achetoAdd.curToothName){
                        return tooth.updateIn(['ache'],list => list.push(achetoAdd.acheidx));
                    }
                    return tooth;
                })).setIn(['teeth_ui', 'ache_list',achetoAdd.acheidx,'bool'],achetoAdd.status)
            }else{

                var curtoothindex = state.getIn(['teeth_ui', 'teeth']).findIndex(tooth => tooth.get('name') === achetoAdd.curToothName)
                var acheindex = state.getIn(['teeth_ui', 'teeth',curtoothindex,'ache']).findIndex(ache => ache === achetoAdd.acheidx)
                return state.removeIn(['teeth_ui', 'teeth',curtoothindex,acheindex]).setIn(['teeth_ui', 'ache_list',achetoAdd.acheidx,'bool'],achetoAdd.status)
            }
         case SWITCH_TOOTH:
             var toothname = action.toothname;
             var index = state.getIn(['teeth_ui', 'teeth']).findIndex(tooth => tooth.get('name') === toothname);
             var toothJs = state.getIn(['teeth_ui', 'teeth', index]).toJS()
             var idx = 0;
             return state.mergeDeep({'teeth_ui':{ toothname }}).updateIn(['teeth_ui', 'ache_list'], list => list.map(ache => {
                 var flag = false;
                 toothJs.ache.map(i => {
                     if (i == idx) {
                       flag = true;
                     }
                 })
                 idx++;
                 return ache.merge({ 'bool': flag })
             }));


        default:
            return state

    }
}

export function flushgraphydata(){
   return {
      type: FLUSH_GRAPHY_DATA
   }
}

export function flushnewgraphydata(){
   return {
      type: FLUSH_NEW_GRAPHY_DATA
   }
}


export function switchtooth({ toothname }) {
    return {
        type: SWITCH_TOOTH,
        toothname
    }
}

export function switchteeth(pos){
     return {
        type: SWITCH_TEETH,
        result:pos
     }
}

export function switchache({acheidx,curToothName,status}){
     return {
        type: SWITCH_ACHE,
        result:{acheidx,curToothName,status}
     }
}

export function LoadedorLoading(state,useridx){
    var loaded = false
    var loading = false
    if(state.hasIn(['mteeth_status','loaded'])&&(useridx == state.getIn(['teeth_ui','useridx']))){
        loaded = state.getIn(['mteeth_status','loaded'])
    }
    if(state.hasIn(['mteeth_status','loading'])&&(useridx == state.getIn(['teeth_ui','useridx']))){
        loading = state.getIn(['mteeth_status','loading'])
    }
    return loaded || loading
}

export function add_user_teeth({id}){
     return {
        type: ADD_TEETH,
        id
     }
}

export function load({ user,patient,index,req,refresh}) {
    var params = {};

    if ((typeof window === 'undefined')||(window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {

            params = {}
            params.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    }else{
        params = {}
    }

    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.GET('http://'+getApiIp()+'/patient/mteeth/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.valid == 1) {

                    return Promise.resolve(res.teethlist)

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
        index
    };

}

///////////////post

export function create_teeth({
  user,
  id,
  teeth_ui
}){
   var params = {
    teeth:teeth_ui.teeth
   }

   return {
        types:[ CREATE_TEETH_BEGIN, CREATE_TEETH_SUCCESS, CREATE_TEETH_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/patient/mteeth/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                console.log('>>>>>>>>>>>>>>>>')
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.code == 1) {
                    console.log(res)
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.mteeth_status.create.msg = 'notvalid';
                    return Promise.reject( { pos: ['mteeth_status','create'] } )
                }
            },
            error: function(err) {
                error_table.mteeth_status.create.msg = 'wire';
                return Promise.reject( { pos: ['mteeth_status','create'] } )
            }
        })
    }


}




export function update_teeth(
  user,
  id,
  teeth_ui
){

 var params = {
    teeth:teeth_ui.teeth,
    time:teeth_ui.time,
    id
 }
    return {
        types:[ UPDATE_TEETH_BEGIN, UPDATE_TEETH_SUCCESS, UPDATE_TEETH_FAIL ],
        promise: (client) => client.PUT('http://' + getApiIp() + '/patient/mteeth/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                console.log('>>>>>>>>>>>>>>>>')
                return response.json();
            },
            done: function(res) {

                console.log(res);

                if (res.code == 1) {
                    console.log(res)
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.mteeth_status.update[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['mteeth_status','update',id] } )
                }
            },
            error: function(err) {
                error_table.mteeth_status.update[id] = { msg:'wire' };
                return Promise.reject( { pos: ['mteeth_status','update',id] } )
            }
        }),
        id
    }
}






