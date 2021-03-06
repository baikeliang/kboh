import Immutable from 'immutable'
import Promise from 'bluebird'
import getApiIp from 'backend/util/apiinterface.js'
import { error_table } from 'backend/redux/config/error_table.js'

const LOAD = 'bohe/user_patient/LOAD';
const LOAD_SUCCESS = 'bohe/user_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_patient/LOAD_FAIL';

const LOAD_DETAIL_BASEINFO = 'bohe/user_patient/LOAD_DETAIL_BASEINFO';
const LOAD_DETAIL_BASEINFO_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_BASEINFO_SUCCESS';
const LOAD_DETAIL_BASEINFO_FAIL = 'bohe/user_patient/LOAD_DETAIL_BASEINFO_FAIL';

const LOAD_DETAIL_HISTORY = 'bohe/user_patient/LOAD_DETAIL_HISTORY';
const LOAD_DETAIL_HISTORY_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_HISTORY_SUCCESS';
const LOAD_DETAIL_HISTORY_FAIL = 'bohe/user_patient/LOAD_DETAIL_HISTORY_FAIL';

const LOAD_DETAIL_ORAL = 'bohe/user_patient/LOAD_DETAIL_ORAL';
const LOAD_DETAIL_ORAL_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_ORAL_SUCCESS';
const LOAD_DETAIL_ORAL_FAIL = 'bohe/user_patient/LOAD_DETAIL_ORAL_FAIL';

const BASICINFO_SAVE_BEGIN = 'bohe/user_patient/BASICINFO_SAVE_BEGIN';
const BASICINFO_SAVE = 'bohe/user_patient/BASICINFO_SAVE';
const BASICINFO_SAVE_FAIL = 'bohe/user_patient/BASICINFO_SAVE_FAIL';

const BASICINFO_EDIT = 'bohe/user_patient/BASICINFO_EDIT';

const HISTORY_SAVE = 'bohe/user_patient/HISTORY_SAVE';
const HISTORY_EDIT_ADD = 'bohe/user_patient/HISTORY_EDIT_ADD';
const HISTORY_EDIT_DEL = 'bohe/user_patient/HISTORY_EDIT_DEL';

const UPDATE_HISTORY_BEGIN = 'bohe/user_patient/UPDATE_HISTORY_BEGIN'
const HISTORY_FLUSH = 'bohe/user_patient/HISTORY_FLUSH';
const UPDATE_HISTORY_FAIL = 'bohe/user_patient/UPDATE_HISTORY_FAIL'

const HISTORY_CHANGE_TIME = 'bohe/user_patient/HISTORY_CHANGE_TIME';


const ORAL_EDIT_ADD = 'bohe/user_patient/ORAL_EDIT_ADD';
const UPDATE_ORAL_BEGIN = 'bohe/user_patient/UPDATE_ORAL_BEGIN'
const ORAL_FLUSH = 'bohe/user_patient/ORAL_FLUSH';
const UPDATE_ORAL_FAIL = 'bohe/user_patient/UPDATE_ORAL_FAIL';
const ORAL_CHANGE_TIME = 'bohe/user_patient/ORAL_CHANGE_TIME';
const ORAL_EDIT_DEL = 'bohe/user_patient/ORAL_EDIT_DEL';

const SET_USER_TOSHOWINFO = 'bohe/user_patient/SET_USER_TOSHOWINFO'

const NEXT_GROUP_USERS =    'bohe/user_patient/NEXTGROUPUSERS'

const CREATE_USER_BEGIN =   'bohe/user_patient/CREATE_USER_BEGIN'

const CREATE_USER_SUCCESS =   'bohe/user_patient/CREATE_USER_SUCCESS'

const CREATE_USER_FAIL =    'bohe/user_patient/CREATE_USER_FAIL'

const CREATE_HISTORY_BEGIN = 'bohe/user_patient/CREATE_HISTORY_BEGIN'

const CREATE_HISTORY_SUCCESS = 'bohe/user_patient/CREATE_HISTORY_SUCCESS'

const CREATE_HISTORY_FAIL = 'bohe/user_patient/CREATE_HISTORY_FAIL'

const CREATE_ORAL_BEGIN = 'bohe/user_patient/CREATE_ORAL_BEGIN'

const CREATE_ORAL_SUCCESS = 'bohe/user_patient/CREATE_ORAL_SUCCESS'

const CREATE_ORAL_FAIL = 'bohe/user_patient/CREATE_ORAL_FAIL'


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
            if (action.showUsersBegin)
                return state.merge({ showbegin: action.showUsersBegin, loading: false, loaded: true, users: action.result })
            else
                return state.merge({ loading: false, loaded: true, users: action.result })
        case LOAD_FAIL:
            if (action.refresh && action.refresh.reject) {
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL_BASEINFO:
            return state.updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.id) {
                    return user.merge({ loading: true, baseinfoedit: { id:action.id } })
                }
                return user
            }))
        case LOAD_DETAIL_BASEINFO_SUCCESS:

            return state.updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.result.id) {
                    return user.mergeDeep({ loading: false, loaded: true, baseinfo: action.result ,baseinfoedit: action.result})
                }
                return user
            }))
        case LOAD_DETAIL_BASEINFO_FAIL:
            return state.merge({ error: action.error }).updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.id) {
                    return user.merge({ loading: false, loaded: false })
                }
                return user
            }))
        case BASICINFO_EDIT:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pairs = action.result;
            var baseinfoedit = {};
            pairs.forEach((pair) => {
                baseinfoedit[pair.key] = pair.val;
            })
            if (idx != 'add') {
                var meta_info = state.getIn(['users', idx, 'baseinfoedit']);
                return state.setIn(['users', idx, 'baseinfoedit'], meta_info.merge(baseinfoedit));
            } else {
                var meta_info = state.getIn(['newuser', 'baseinfoedit']);
                return state.setIn(['newuser', 'baseinfoedit'], meta_info.merge(baseinfoedit));
            }
        case BASICINFO_SAVE_BEGIN:
             return state;
        case BASICINFO_SAVE:
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == action.id)
            if (idx >= 0) {
                let infotomerge = state.getIn(['users', idx, 'baseinfoedit']);
                let metainfo = state.getIn(['users', idx, 'baseinfo']);
                return state.setIn(['users', idx, 'baseinfo'], metainfo.merge(infotomerge)).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
            } else {
                let infotomerge = state.getIn(['newuser', 'baseinfoedit']);
                return state.setIn(['newuser', 'baseinfo'], infotomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
            }
        case BASICINFO_SAVE_FAIL:
             return  state.merge({ error:action.error });
        case CREATE_USER_BEGIN:
             return state.mergeDeep({ newuser:{ loading:true, loaded:false } });
        case CREATE_USER_SUCCESS:
             var infotomerge = state.getIn(['newuser', 'baseinfoedit']);
             var idx = state.getIn(['frontuserinfo','idx']);
             if(idx == 'add')
               return state.mergeDeep({ newuser:{ loading:false, loaded:true } }).setIn(['newuser','id'],action.result.userid).setIn(['frontuserinfo', 'id'],action.result.userid).setIn(['newuser', 'baseinfo'], infotomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
             else
               return state.mergeDeep({ newuser:{ loading:false, loaded:true } }).setIn(['newuser','id'],action.result.userid).setIn(['newuser', 'baseinfo'], infotomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
        case CREATE_USER_FAIL:
             return  state.setIn( ['error'],action.error ).setIn(['newuser','loading'],false),setIn(['newuser','loaded'],false);
        case LOAD_DETAIL_HISTORY:
            if(state.getIn(['newuser','id']) == action.userid)
                return state.mergeDeep({'newuser':{ hisloading: true, historyedit: { userid:action.userid } }})
            else if(state.hasIn(['users']))
                return state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.merge({ hisloading: true, historyedit: { userid:action.userid} })
                    }
                    return user
                }))
            else
                return state;
        case LOAD_DETAIL_HISTORY_SUCCESS:
            if(state.getIn(['newuser','id']) == action.result.userid){
                    var historyedit = { userid:action.result.userid, history: { body_condition: [], allergy: [], family_history: [], infection: [], medicine: [], surgery: [] }, time: '', timelist: [] };
                    var metahistory = action.result.allhistory ? action.result.allhistory[action.result.allhistory.length - 1] : undefined;

                    if (metahistory) {

                        historyedit.history = {...historyedit.history, ...metahistory.history }
                        historyedit.userid =  historyedit.userid;
                        historyedit.time = metahistory.time;
                        var timelist = action.result.allhistory.map((history) => {
                            return history.time
                        })

                        historyedit.timelist = timelist;
                        historyedit.idx = action.result.allhistory.length - 1;
                    }
                    let newuser = state.getIn(['newuser']).merge({ hisloading: false, hisloaded: true, historyedit, allhistory: action.result.allhistory })
                    return  state.merge({ newuser });
            }else if(state.hasIn(['users'])){
                return state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.result.userid) {

                        var historyedit = { userid:action.result.userid,history: { body_condition: [], allergy: [], family_history: [], infection: [], medicine: [], surgery: [] }, time: '', timelist: [] };

                        var metahistory = action.result.allhistory ? action.result.allhistory[action.result.allhistory.length - 1] : undefined;

                        if (metahistory) {

                            historyedit.history = {...historyedit.history, ...metahistory.history }
                            historyedit.userid =  historyedit.userid;
                            historyedit.time = metahistory.time;

                            var timelist = action.result.allhistory.map((history) => {
                                return history.time
                            })

                            historyedit.timelist = timelist;
                            historyedit.idx = action.result.allhistory.length - 1;

                        }
                        return user.merge({ hisloading: false, hisloaded: true, historyedit, allhistory: action.result.allhistory })
                    }
                    return user
                }))
            }else
              return state;
        case LOAD_DETAIL_HISTORY_FAIL:
            if(state.getIn(['newuser','id']) == action.userid){
                return state.mergeDeep({ newuser:{ hisloading: false,hisloaded: false }}).merge({ error: action.error })
            }
            else if(state.hasIn(['users'])){
                return state.merge({ error: action.error }).updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.merge({ hisloading: false, hisloaded: false })
                    }
                    return user

                }
            ))}
            else
                return state
        case SET_USER_TOSHOWINFO:
            if (action.result.idx == 'add') {
                return state.merge({ frontuserinfo: action.result, newuser: { baseinfo: {}, baseinfoedit: {}, historyinfo: {}, historyedit: { history: { body_condition: [], allergy: [], family_history: [], infection: [], medicine: [], surgery: [] }, time: '', timelist: [] }, oraledit: { oral: { teetharound: [], mucosa: [], surgery: [], repairhis: [] }, time: '', timelist: [] } } })
            } else {
                return state.merge({ frontuserinfo: action.result })
            }
        case NEXT_GROUP_USERS:
            return state.merge({ showbegin: action.result })
        case CREATE_HISTORY_BEGIN:
            return state;
        case CREATE_HISTORY_SUCCESS:
            var idx = state.hasIn(['users'])?state.getIn(['users']).findIndex(value => value.get('id') == action.id):-1;
            if (idx >= 0 ) {
                let historyidx = state.getIn(['users', idx, 'allhistory']).size;
                let historytomerge = state.getIn(['users', idx, 'historyedit']).setIn(['idx'],historyidx).setIn(['time'],action.result.time).updateIn(['timelist'],list=>list.push(action.result.time));
                let oldidx = state.getIn(['users',idx,'allhistory']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let historytomerge = state.getIn(['users',idx,'historyedit']).setIn(['idx'],oldidx).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['users', idx,'historyedit'],historytomerge).setIn(['users', idx, 'allhistory',oldidx],historytomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let historytomerge = state.getIn(['users',idx, 'historyedit']).setIn(['idx'],historyidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['users', idx,'historyedit'],historytomerge).updateIn(['users', idx, 'allhistory'],list=>list.push(historytomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            } else if(state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )) {
                let historyidx = state.getIn(['newuser', 'allhistory']).size ;
                let oldidx = state.getIn(['newuser','allhistory']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let historytomerge = state.getIn(['newuser', 'historyedit']).setIn(['idx'],(oldidx)).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['newuser','historyedit'],historytomerge).setIn(['newuser', 'allhistory',oldidx],historytomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let historytomerge = state.getIn(['newuser', 'historyedit']).setIn(['idx'],historyidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['newuser','historyedit'],historytomerge).updateIn(['newuser', 'allhistory'],list=>list.push(historytomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            }else
              return state;
        case CREATE_HISTORY_FAIL:
            return state.setIn(['error'],action.error);
        case HISTORY_FLUSH:
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == action.id)
            if(idx >=0 ){
                let historytomerge = state.getIn(['users', idx, 'historyedit', 'history']);
                let historyidx = state.getIn(['users', idx, 'historyedit', 'idx']);
                if (historyidx >= 0) {
                    return state.setIn(['users', idx, 'allhistory', historyidx, 'history'], historytomerge);
                } else
                    return state
            }else if( state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )){
                let historytomerge = state.getIn(['newuser', 'historyedit', 'history']);
                let historyidx = state.getIn(['newuser', 'historyedit', 'idx']);
                if(historyidx>=0)
                    return state.setIn(['newuser', 'allhistory',historyidx,'history'], historytomerge);
                else
                    return state;
            }
        case HISTORY_EDIT_ADD:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            if (idx != 'add') {
                var index = state.getIn(['users', idx, 'historyedit', 'history', pair.key]).findIndex(value => value.get('name') == pair.val.name)

                if (index >= 0) {
                    let i = 0;
                    return state.updateIn(['users', idx, 'historyedit', 'history', pair.key], list => list.map(item => {
                        i++;
                        if (i == (index + 1)) {
                            return item.merge(pair.val);
                        } else {
                            return item;
                        }
                    }))
                } else
                    return state.setIn(['users', idx, 'historyedit', 'history', pair.key], state.getIn(['users', idx, 'historyedit', 'history', pair.key]).push(Immutable.Map(pair.val)));
            } else {
                var index = state.getIn(['newuser', 'historyedit', 'history', pair.key]).findIndex(value => value.get('name') == pair.val.name)
                if (index >= 0) {

                    let i = 0;
                    return state.updateIn(['newuser', 'historyedit', 'history', pair.key], list => list.map(item => {
                        i++;
                        if (i == (index + 1)) {
                            return item.merge(pair.val);
                        } else {
                            return item;
                        }
                    }))
                } else
                    return state.setIn(['newuser', 'historyedit', 'history', pair.key], state.getIn(['newuser', 'historyedit', 'history', pair.key]).push(Immutable.Map(pair.val)));
            }
        case HISTORY_EDIT_DEL:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            if (idx != 'add') {
                var index = state.getIn(['users', idx, 'historyedit', 'history', pair.key]).findIndex(value => value.get('name') == pair.val.name)
                if (index >= 0)
                    return state.setIn(['users', idx, 'historyedit', 'history', pair.key], state.getIn(['users', idx, 'historyedit', 'history', pair.key]).remove(index));
                else
                    return state
            } else {
                var index = state.getIn(['newuser', 'historyedit', 'history', pair.key]).findIndex(value => value.get('name') == pair.val.name)
                if (index >= 0)
                    return state.setIn(['newuser', 'historyedit', 'history', pair.key], state.getIn(['newuser', 'historyedit', 'history', pair.key]).remove(index));
                else
                    return state
            }
        case HISTORY_CHANGE_TIME:
            var pos = action.result;
            var id = state.getIn(['frontuserinfo', 'id']);
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == id);
            if(idx>=0){
                var timelist = state.getIn(['users', idx, 'historyedit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['users', idx, 'historyedit'], state.getIn(['users', idx, 'allhistory', pos.idx]).setIn(['userid'],id)).setIn(['users', idx, 'historyedit', 'timelist'], timelist).setIn(['users', idx, 'historyedit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }else if(state.getIn(['newuser','id'])==id){
                var timelist = state.getIn(['newuser', 'historyedit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['newuser', 'historyedit'], state.getIn(['newuser', 'allhistory', pos.idx]).setIn(['userid'],id)).setIn(['newuser', 'historyedit', 'timelist'], timelist).setIn(['newuser', 'historyedit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }
            return state;
        case LOAD_DETAIL_ORAL:
            if(state.getIn(['newuser','id']) == action.userid){
                return state.mergeDeep( { newuser: { oralloading: true }}).setIn(['newuser','oraledit'],Immutable.Map({ userid:action.userid }));
            }else{
                return state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.mergeDeep({ oralloading: true }).setIn(['oraledit'],Immutable.Map({ userid:action.userid }))
                    }
                    return user
                }))
            }
        case LOAD_DETAIL_ORAL_SUCCESS:
            if(state.getIn(['newuser','id']) == action.result.userid){
                  var oraledit = { userid:action.result.userid, oral: { teetharound: [], mucosa: [], surgery: [], repairhis: [] }, time: '', timelist: [] };
                  var metaoral = action.result.alloral ? action.result.alloral[action.result.alloral.length - 1] : undefined;
                  if (metaoral) {

                        oraledit.oral = {...oraledit.oral, ...metaoral.oral }

                        oraledit.time = metaoral.time;

                        var timelist = action.result.alloral.map((oral) => {
                            return oral.time
                        })
                        oraledit.timelist = timelist;
                        oraledit.idx = action.result.alloral.length - 1;
                    }
                    let newuser = state.getIn(['newuser']).merge({ oralloading: false, oralloaded: true, oraledit, alloral: action.result.alloral })
                    return  state.merge({ newuser });
            }

            return state.updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.result.userid) {
                    var oraledit = { userid:action.result.userid, oral: { teetharound: [], mucosa: [], surgery: [], repairhis: [] }, time: '', timelist: [] };

                    var metaoral = action.result.alloral ? action.result.alloral[action.result.alloral.length - 1] : undefined;

                    if (metaoral) {

                        oraledit.oral = {...oraledit.oral, ...metaoral.oral }

                        oraledit.time = metaoral.time;

                        var timelist = action.result.alloral.map((oral) => {
                            return oral.time
                        })
                        oraledit.timelist = timelist;
                        oraledit.idx = action.result.alloral.length - 1;
                    }
                    return user.merge({ oralloading: false, oralloaded: true, oraledit, alloral: action.result.alloral })
                }
                return user
            }))
        case LOAD_DETAIL_ORAL_FAIL:
            if(state.getIn(['newuser','id']) == action.userid){
                return state.mergeDeep( { newuser: { oralloading: false, oralloaded: false }} ).merge({ error: action.error })
            }else
                return state.merge({ error: action.error }).updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.merge({ oralloading: false, oralloaded: false })
                    }
                    return user
                }))
        case ORAL_EDIT_ADD:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            var _pairkey = (idx == 'add') ? ['newuser', 'oraledit', 'oral', pair.key] : ['users', idx, 'oraledit', 'oral', pair.key];
            var index = state.getIn(_pairkey).findIndex(value => value.get('name') == pair.val.name)
            if (index >= 0) {
                let i = 0;
                return state.updateIn(_pairkey, list => list.map(item => {
                    i++;
                    if (i == (index + 1)) {
                        var _item_ = item.toJS();
                        let item_val = _item_.val;
                        let _item_val = pair.val.val;
                        _item_.val = {...item_val, ..._item_val }
                        return Immutable.Map(_item_);
                    } else {
                        return item;
                    }
                }))
            } else {
                return state.setIn(_pairkey, state.getIn(_pairkey).push(Immutable.Map(pair.val)));
            }
        case CREATE_ORAL_BEGIN:
            return state;
        case CREATE_ORAL_SUCCESS:
            let idx = state.hasIn(['users'])?state.getIn(['users']).findIndex(value => value.get('id') == action.id):-1;
            if (idx >= 0 ) {
                let oralidx = state.getIn(['users', idx, 'alloral']).size;
                let oraltomerge = state.getIn(['users', idx, 'oraledit']).setIn(['idx'],oralidx).setIn(['time'],action.result.time).updateIn(['timelist'],list=>list.push(action.result.time));
                let oldidx = state.getIn(['users',idx,'alloral']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let oraltomerge = state.getIn(['users',idx,'oraledit']).setIn(['idx'],oldidx).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['users', idx,'oraledit'],oraltomerge).setIn(['users', idx, 'alloral',oldidx],oraltomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let oraltomerge = state.getIn(['users',idx, 'oraledit']).setIn(['idx'],oralidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['users', idx,'oraledit'],oraltomerge).updateIn(['users', idx, 'alloral'],list=>list.push(oraltomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            } else if(state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )) {
                let oralidx = state.getIn(['newuser', 'alloral']).size;
                let oldidx = state.getIn(['newuser','alloral']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let oraltomerge = state.getIn(['newuser', 'oraledit']).setIn(['idx'],oldidx).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['newuser','oraledit'],oraltomerge).setIn(['newuser', 'alloral',oldidx],oraltomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let oraltomerge = state.getIn(['newuser', 'oraledit']).setIn(['idx'],oralidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['newuser','oraledit'],oraltomerge).updateIn(['newuser', 'alloral'],list=>list.push(oraltomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            }else
              return state;
        case CREATE_ORAL_FAIL:
            return state.setIn(['error'],action.error);
        case ORAL_FLUSH:
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == action.id)
            if (idx >= 0 ) {
                var oraltomerge = state.getIn(['users', idx, 'oraledit', 'oral']);
                var oralidx = state.getIn(['users', idx, 'oraledit', 'idx']);
                if (oralidx >= 0) {
                    return state.setIn(['users', idx, 'alloral', oralidx, 'oral'], oraltomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
                } else
                    return state
            } else if(state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )) {
                var oraltomerge = state.getIn(['newuser', 'oraledit', 'oral']);
                var oralidx = state.getIn(['newuser', 'oraledit', 'idx']);
                return  state.setIn(['newuser', 'alloral',oralidx,'oral'], oraltomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
            }
        case ORAL_CHANGE_TIME:
            var pos = action.result;
            var id = state.getIn(['frontuserinfo', 'id']);
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == id);
            if(idx>=0){
                var timelist = state.getIn(['users', idx, 'oraledit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['users', idx, 'oraledit'], state.getIn(['users', idx, 'alloral', pos.idx]).setIn(['userid'],id)).setIn(['users', idx, 'oraledit', 'timelist'], timelist).setIn(['users', idx, 'oraledit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }else if(state.getIn(['newuser','id'])==id){
                var timelist = state.getIn(['newuser', 'oraledit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['newuser', 'oraledit'], state.getIn(['newuser', 'alloral', pos.idx]).setIn(['userid'],id)).setIn(['newuser', 'oraledit', 'timelist'], timelist).setIn(['newuser', 'oraledit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }
            return state;
        case ORAL_EDIT_DEL:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            var _pairkey = (idx == 'add') ? ['newuser', 'oraledit', 'oral', pair.key] : ['users', idx, 'oraledit', 'oral', pair.key];
            var index = state.getIn(_pairkey).findIndex(value => value.get('name') == pair.val.name)
            if (index >= 0)
                return state.setIn(_pairkey, state.getIn(_pairkey).remove(index));
            else
                return state
        default:
            return state
    }
}
export function basicInfoSave() {

    return {
        type: BASICINFO_SAVE
    }

}

export function basicInfoEdit(pairs) {

    return {
        type: BASICINFO_EDIT,
        result: pairs
    }

}

export function historyFlush() {

    return {
        type: HISTORY_FLUSH
    }

}

export function historyEditADD(pair) {

    return {
        type: HISTORY_EDIT_ADD,
        result: pair
    }

}

export function historyEditDEL(pair) {

    return {
        type: HISTORY_EDIT_DEL,
        result: pair
    }

}

export function oralEditDEL(pair) {

    return {
        type: ORAL_EDIT_DEL,
        result: pair
    }

}

export function oralEditADD(pair) {

    return {
        type: ORAL_EDIT_ADD,
        result: pair
    }

}

export function oralFlush() {

    return {
        type: ORAL_FLUSH
    }

}


export function frontUserForInfo({ idx, id }) {
    return {
        type: SET_USER_TOSHOWINFO,
        result: { idx, id }
    }

}

export function nextGroupUsers(begin) {
    return {
        type: NEXT_GROUP_USERS,
        result: begin
    }
}

export function LoadedorLoading(state) {
    var loaded = false
    var loading = false
    if (state.hasIn(['user_patient', 'loaded'])) {
        loaded = state.getIn(['user_patient', 'loaded'])
    }
    if (state.hasIn(['user_patient', 'loading'])) {
        loading = state.getIn(['user_patient', 'loading'])
    }
    return loaded || loading
}
export function LoadedorLoadingUser(state) {
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient', "frontuserinfo", 'idx']);
    if (state.hasIn(['user_patient', 'users', idx, 'loaded'])) {
        loaded = state.getIn(['user_patient', 'users', idx, 'loaded'])
    }
    if (state.hasIn(['user_patient', 'users', idx, 'loading'])) {
        loading = state.getIn(['user_patient', 'users', idx, 'loading'])
    }
    return loading
}

export function LoadedorLoadingUser_History(state) {
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient', "frontuserinfo", 'idx']);
    if (state.hasIn(['user_patient', 'users', idx, 'loaded'])) {
        loaded = state.getIn(['user_patient', 'users', idx, 'hisloaded'])
    }
    if (state.hasIn(['user_patient', 'users', idx, 'loading'])) {
        loading = state.getIn(['user_patient', 'users', idx, 'hisloading'])
    }
    return loading
}

export function LoadedorLoadingUser_Oral(state) {
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient', "frontuserinfo", 'idx']);
    if (state.hasIn(['user_patient', 'users', idx, 'loaded'])) {
        loaded = state.getIn(['user_patient', 'users', idx, 'oralloaded'])
    }
    if (state.hasIn(['user_patient', 'users', idx, 'loading'])) {
        loading = state.getIn(['user_patient', 'users', idx, 'oralloading'])
    }
    return loading
}

export function changeTime(pos) {
    return {
        type: HISTORY_CHANGE_TIME,
        result: pos
    }
}

export function changeOralTime(pos) {
    return {
        type: ORAL_CHANGE_TIME,
        result: pos
    }
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
        promise: (client) => client.GET('http://' + getApiIp() + '/user_patient/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {
                if (res.valid == 1) {
                    return Promise.resolve(res.users)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.load = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','load'] } )
                }
            },
            error: function(err) {
                error_table.user_patient.load = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','load'] } )
            }
        }),
        refresh,
        showUsersBegin
    };

}

// 基础信息。。。。。。。。。。。。。。。。。。。。。
export function load_detail_baseinfo({ id }) {
    var params = {}
    params.id = id

    return {
        types: [LOAD_DETAIL_BASEINFO, LOAD_DETAIL_BASEINFO_SUCCESS, LOAD_DETAIL_BASEINFO_FAIL],
        promise: (client) => client.GET('http://' + getApiIp() + '/user_patient/basicinfo/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.valid == 1) {

                    return Promise.resolve(res.baseinfo)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.loaddetail.baseinfo[id] = {msg:'notvalid'};
                    return Promise.reject({ pos: ['user_patient','loaddetail','baseinfo',id]})
                }
            },
            error: function(err) {
                error_table.user_patient.loaddetail.baseinfo[id] = {msg:'wire'};
                return Promise.reject({ pos: ['user_patient','loaddetail','baseinfo',id]})
            }
        }),
        id
    };

}
//既往史。。。。。。。。。。。。
export function load_detail_history({ userid }) {
    var params = {}
    params.userid = userid

    return {
        types: [LOAD_DETAIL_HISTORY, LOAD_DETAIL_HISTORY_SUCCESS, LOAD_DETAIL_HISTORY_FAIL],
        promise: (client) => client.GET('http://' + getApiIp() + '/user_patient/history/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {

                if (res.valid == 1) {
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.loaddetail.history[userid] = { msg:'notvalid'}
                    return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
                }
            },
            error: function(err) {
                error_table.user_patient.loaddetail.history[userid] = { msg:'wire'}
                return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
            }
        }),
        userid
    };

}

//口腔情况。。。。。。。。。。。。
export function load_detail_oral({ userid }) {
    var params = {}
    params.userid = userid
    return {
        types: [LOAD_DETAIL_ORAL, LOAD_DETAIL_ORAL_SUCCESS, LOAD_DETAIL_ORAL_FAIL],
        promise: (client) => client.GET('http://' + getApiIp() + '/user_patient/oral/rest?', { params }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.valid == 1) {
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.loaddetail.oral[userid] = {msg : 'notvalid'};
                    return Promise.reject({ pos: ['user_patient','loaddetail','oral',userid] })
                }
            },
            error: function(err) {
                error_table.user_patient.loaddetail.oral[userid] = {msg : 'wire'};
                return Promise.reject({ pos: ['user_patient','loaddetail','oral',userid] })
            }
        }),
        userid
    };

}

///////post

export function create_user({
  user,
  baseinfoedit,
  post_success
}){
    var data = baseinfoedit;
    return {
        types:[ CREATE_USER_BEGIN, CREATE_USER_SUCCESS, CREATE_USER_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/user_patient/rest?', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res)

                } else {
                    error_table.user_patient.create.baseinfo = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','create','baseinfo'] } )
                }
            },
            error: function(err) {
                error_table.user_patient.create.baseinfo = {msg:'notvalid'};
                return Promise.reject( { pos: ['user_patient','create','baseinfo'] } )
            }
        }),
        post_success
    }
}


export function update_baseinfo({
  user,
  baseinfoedit,
  post_success
 }){
    var id = baseinfoedit.id;
    var data = { ...baseinfoedit, id };
        return {
            types:[ BASICINFO_SAVE_BEGIN, BASICINFO_SAVE, BASICINFO_SAVE_FAIL ],
            promise: (client) => client.PUT('http://' + getApiIp() + '/user_patient/basicinfo/rest?', { data }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }

                    return response.json();
                },
                done: function(res) {


                    if (res.code == 1) {
                        return Promise.resolve(res)

                    } else {
                        //var err = { info: 'auth' }
                        error_table.user_patient.update.baseinfo[id] = { msg:'notvalid' };
                        return Promise.reject( { pos: ['user_patient','update','baseinfo',id] } )
                    }
                },
                error: function(err) {
                    error_table.user_patient.update.baseinfo[id] = { msg:'wire' };
                    return Promise.reject( { pos: ['user_patient','update','baseinfo',id] } )
                }
            }),
            id,
            post_success
        }
}

export function create_historyinfo({
  user,
  historyedit,
  post_success
}){

    var id = historyedit.userid;
    var data = {};
        data.history = historyedit.history;
        data.id = id;
        return {
            types:[ CREATE_HISTORY_BEGIN, CREATE_HISTORY_SUCCESS, CREATE_HISTORY_FAIL ],
            promise: (client) => client.POST('http://' + getApiIp() + '/user_patient/history/rest?', { data }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }

                    return response.json();
                },
                done: function(res) {


                    if (res.code == 1) {
                        return Promise.resolve(res)

                    } else {
                        error_table.user_patient.create.history = { msg:'notvalid' };
                        return Promise.reject( { pos: ['user_patient','create','history'] } )
                    }
                },
                error: function(err) {
                    error_table.user_patient.create.history = { msg:'wire' };
                    return Promise.reject( { pos: ['user_patient','create','history'] } )
                }
            }),
            id,
            post_success
        }
}

export function update_historyinfo({
  user,
  historyedit,
  post_success
}){
 var id = historyedit.userid;
 var data = {};
    data.history = historyedit.history;
    data.time = historyedit.time;
    data.id = id;
    return {
        types:[ UPDATE_HISTORY_BEGIN, HISTORY_FLUSH, UPDATE_HISTORY_FAIL ],
        promise: (client) => client.PUT('http://' + getApiIp() + '/user_patient/history/rest?', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {
                if (res.code == 1) {
                    return Promise.resolve(res)
                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.history[id] = { msg: 'notvalid' };
                    return Promise.reject( { pos: ['user_patient','update','history',id] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.history[id] = { msg: 'wire' };
                return Promise.reject( { pos: ['user_patient','update','history',id] } )
            }
        }),
        id,
        post_success
    }
}


export function create_oralinfo({
  user,
  oraledit,
  post_success
}){
 var id = oraledit.userid;
 var data = {
    oral:oraledit.oral,
    id
 }
    return {
        types:[ CREATE_ORAL_BEGIN, CREATE_ORAL_SUCCESS, CREATE_ORAL_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/user_patient/oral/rest?', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.create.oral = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','create','oral'] } )
                }
            },
            error: function(err) {
                error_table.user_patient.create.oral = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','create','oral'] } )
            }
        }),
        id,
        post_success
    }
}

export function update_oralinfo({
  user,
  oraledit,
  post_success
}){
 var id = oraledit.userid;
 var data = {
    oral:oraledit.oral,
    time:oraledit.time,
    id
 }
    return {
        types:[ UPDATE_ORAL_BEGIN, ORAL_FLUSH, UPDATE_ORAL_FAIL ],
        promise: (client) => client.PUT('http://' + getApiIp() + '/user_patient/oral/rest?', { data }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        }),
        id,
        post_success
    }
}
