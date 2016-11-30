import React , { Component } from 'react';

import {
    push
} from 'react-router-redux';


import {
    connect
} from 'react-redux';


import {
  isLoaded as isAuthLoaded,
  load     as loadAuth,
  logout
} from 'backend/redux/reducers/auth';

import {
  LoadedorLoadingUser_History as successorLoading,
  historyFlush,
  historyEditADD,
  historyEditDEL,
  load_detail_history,
  changeTime,
} from 'backend/redux/reducers/user_patient'

import {
    asyncConnect
} from 'redux-connect'

import {
  HistoryEdit
} from './view/history/historyedit'

import {
  HistoryShow
} from './view/history/historyshow'

import { table as historytable } from 'backend/useradmin/userinfo/config/historytable.js';

var __asyncEvent = function({ dispatch, getState }) {

    let state = getState();
    let id = state.getIn(['user_patient', 'frontuserinfo','id']); 
    return dispatch(load_detail_history({ id }))

}
export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())){
          console.log("his login!!!!!!!!!!!!!!!!!!11")
            return dispatch(loadAuth(params)).then(function() {
                if (!(successorLoading(getState()))){
                      console.log("his login!!!!!!!!!!!!!!!!!!22")
                      return __asyncEvent({ dispatch, getState })
                }
                else
                    return Promise.resolve();
            })
        }else{
            console.log("his login!!!!!!!!!!!!!!!!!!33")
             if (!(successorLoading(getState()))){
                          console.log("his login!!!!!!!!!!!!!!!!!!44")
                  return __asyncEvent({ dispatch, getState });
             }
             else
                   return Promise.resolve();
        }
    }
}];

@asyncConnect(asyncEvent)
@connect(
    state => {
        var idx = state.getIn(['user_patient', 'frontuserinfo','idx']);
        return {
            auth : state.get('auth'),
            historyedit:  state.getIn(['user_patient','users',idx,'historyedit'])
        }
    }, { pushState: push,historyFlush,historyEditADD,historyEditDEL,changeTime})
export default  class History extends Component{
   constructor(props) {
       // code
       super(props);
       this.state = { check: true, edit: false, add: false ,refresh:0 };
   }
   toAdd() {

       var addtime = this.props.historyedit.get('time');

       this.setState({...this.state, check: false, edit: false, add: true ,addTime:addtime})
   }
   toEdit() {
       this.setState({...this.state, check: false, edit: true, add: false })
   }
   toCheck() {
       this.toSave();
       this.setState({...this.state, check: true, edit: false, add: false })
   }
   toSave(){
       this.props.historyFlush();
   }
   onChangeInfo(key,val,ev) {
    console.log('onChange0000000000');
    console.log(val);
    var value = { name:val.name, describe:ev.target.value}
    this.props.historyEditADD( {key,val:value} )
   }
   onClickInfo(key,val) {
      var value = { name:val.name };
      if(val.check==0){
        console.log("onClickInfo!!!!")
        this.props.historyEditADD( {key,val:value} )
      }else{
        this.props.historyEditDEL( {key,val:value} )
      }
   }
   changeCheckTime(e) {
    console.log('zdhzdhzdhzdh');
      this.props.changeTime({ idx: e.target.value -1 })
   }
   changeEditTime(e) {
    console.log('zdhzdhzdhzdh');
      this.props.changeTime({ idx: e.target.value -1 })
   }
   showDateModalBodyCon( item ){
      item.dateUI.display == 'none'?item.dateUI.display='block':item.dateUI.display='none';
      this.setState({...this.state,refresh:0});
   }
   handleSelectDateBodyCon(item,date){
        item.dateUI.display == 'none'?item.dateUI.display='block':item.dateUI.display='none';
        console.log("handleSelectDateBodyCon!!!!!!")
        console.log(item)
        item.date = date.format('DD/MM/YY').toString();
        this.setState({...this.state,refresh:0});
        this.props.historyEditADD( {key:'body_condition',val:item } )
   }
   render(){

      if(this.props.auth.get('user')){

        var historyedit=this.props.historyedit.toJS();
        return  (
            <div>
              { HistoryHead({
                           historyedit,
                           edit: (this.state.edit),
                           check: (this.state.check),
                           add: (this.state.add),
                           addTime:(this.state.addTime),
                           toEdit: (::this.toEdit),
                           toAdd: (::this.toAdd),
                           toCheck: (::this.toCheck),
                           changeCheckTime: (::this.changeCheckTime),
                           changeEditTime: (::this.changeEditTime)

                       }) }
              {
                           this.state.check ? HistoryShow({
                              historyedit
                           }) : HistoryEdit({
                              historytable:historytable,
                              historyedit,
                              change: (::this.onChangeInfo),
                              click: (::this.onClickInfo),
                              handleSelectDateBodyCon:(::this.handleSelectDateBodyCon),
                              showDateModalBodyCon:(::this.showDateModalBodyCon),
                              dateModalBodyTest:(this.state.dateModalBodyTest),
                              dateModalToothWash:(this.state.dateModalToothWash)
                              //dateToothWash:
                           })
              }

            </div>
          )
      }
    }

}

export const HistoryHead = ({
  historyedit,
  edit,
  check,
  add,
  addTime,
    toAdd,
    toEdit,
    toCheck,
    changeCheckTime,
    changeEditTime
}) => {
            if(check){
               let index=0;
                 return (<div className="time z_time_edit" style={{top:'215px'}}>
                          <div className="z_time_btn" style={{border:'none'}}>
                              <p>
                                <b>更新记录：</b>
                                  <select onChange={ (e)=>{ changeCheckTime(e) } }>
                                     {historyedit.timelist.map((time)=>{
                                      index++;
                                      if((historyedit.idx+1) == index)
                                        return (<option selected='selected' value={ index }>{time}</option>)
                                      else 
                                        return (<option value={ index }>{time}</option>)
                                     })}
                                  </select>
                              </p>

                              <label>
                                  <span onClick={ toAdd } className="default_inputbtn z_add_btn">添加</span>
                                  <span onClick={ toEdit } className="default_inputbtn z_edit_btn">编辑</span>
                              </label>
                          </div>
                        </div>)
             }else if(edit){
              let index = 0;
                 return (<div className="time z_time_edit">
                          <div className="z_time_btn">

                            <p>
                                <b>更新记录：</b>
                                <select onChange={ (e)=>{ changeEditTime(e) } }>
                                     {historyedit.timelist.map((time)=>{
                                      index++;
                                      if((historyedit.idx+1) == index)
                                        return (<option selected='selected' value={ index }>{time}</option>)
                                      else 
                                        return (<option value={ index }>{time}</option>)
                                     })}
                                </select>
                            </p>
                            <label>
                                <span onClick={ toCheck } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }else if(add){
              return (<div className="time z_time_edit">
                          <div className="z_time_btn">
                            <p>
                                <em className="see_page_em">基于最新（<font className="new_time">{addTime}</font>）信息上进行添加</em>
                            </p>
                            <label>
                                <span onClick={toCheck} className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }
}