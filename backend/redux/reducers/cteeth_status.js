import Immutable from 'immutable'
import Promise from 'bluebird'
import getApiIp from 'backend/util/apiinterface.js'

const LOAD = 'bohe/cteeth_status/LOAD';
const LOAD_SUCCESS = 'bohe/cteeth_status/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/cteeth_status/LOAD_FAIL';

const LOAD_DETAIL = 'bohe/cteeth_status/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'bohe/cteeth_status/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'bohe/cteeth_status/LOAD_DETAIL_FAIL';

const SWITCH_TEETH = 'bohe/cteeth_status/SWITCHTEETH';
const SWITCH_ACHE = 'bohe/cteeth_status/SWITCHACHE';
const SWITCH_TOOTH = 'bohe/cteeth_status/SWITCHTOOTH';

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
              name:'PFS:窝沟封闭',
              bool:false
            },
            {
              name:'CF:全冠',
              bool:false
            },
            {
              name:'U:未见萌出',
              bool:false
            },
            {
              name:'F:填充物',
              bool:false
            },
            {
              name:'RT:根管治疗后',
              bool:false
            },
            {
              name:'SR:间隙保持器',
              bool:false
            }
          ],
    teeth:[
            {
              name:51,
              ache:[

              ]
            },
            {
              name:52,
              ache:[

              ]
            },
            {
              name:53,
              ache:[

              ]
            },
            {
              name:54,
              ache:[

              ]
            },
            {
              name:55,
              ache:[

              ]
            },
            {
              name:61,
              ache:[

              ]
            },
            {
              name:62,
              ache:[

              ]
            },
            {
              name:63,
              ache:[

              ]
            },
            {
              name:64,
              ache:[

              ]
            },
            {
              name:65,
              ache:[

              ]
            },
            {
              name:81,
              ache:[

              ]
            },
            {
              name:82,
              ache:[

              ]
            },
            {
              name:83,
              ache:[

              ]
            },
            {
              name:84,
              ache:[

              ]
            },
            {
              name:85,
              ache:[

              ]
            },
            {
              name:71,
              ache:[

              ]
            },
            {
              name:72,
              ache:[

              ]
            },
            {
              name:73,
              ache:[

              ]
            },
            {
              name:74,
              ache:[

              ]
            },
            {
              name:75,
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
  )

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            var _data = {};
            var teethlist = action.result;

            _data[action.index] = teethlist;

            var tooth_ui = (teethlist.length > 0) ? teethlist[teethlist.length - 1] : {}

            var timelist =  teethlist.map((teeth) => {
                return  teeth.time;
            })

            var teeth_ui = { idx: teethlist.length - 1, useridx: action.index, timelist, size: teethlist.length, ...tooth_ui }

            return state.mergeDeep({ loading: false, loaded: true, teeth_ui, allUserTeeth: _data })
        case LOAD_FAIL:
            return state.merge({ loading: false, loaded: false, error: action.error })
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

export function LoadedorLoading(state){
    var loaded = false
    var loading = false
    if(state.hasIn(['cteeth_status','loaded'])){
        loaded = state.getIn(['cteeth_status','loaded'])
    }
    if(state.hasIn(['cteeth_status','loading'])){
        loading = state.getIn(['cteeth_status','loading'])
    }
    return loaded || loading
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
        promise: (client) => client.GET('http://'+getApiIp()+'/user_patient/cteeth/rest?', { params }, {
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


