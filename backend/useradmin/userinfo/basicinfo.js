import React , { Component } from 'react';

import {
    push
} from 'react-router-redux';


import {
    connect
} from 'react-redux';

import Nav from './nav.js'
import { Header } from './view/baseinfo/header.js'

import {
	isLoaded as isAuthLoaded,
	load     as loadAuth,
	logout
} from 'backend/redux/reducers/auth';

import {
  LoadedorLoadingUser as successorLoading,
  load_detail_baseinfo,
  basicInfoEdit,
  basicInfoSave
} from 'backend/redux/reducers/user_patient'

import {
    asyncConnect
} from 'redux-connect'

import {
  BaseInfoEdit
} from './view/baseinfo/baseinfoedit'

import {
  BaseInfoShow
} from './view/baseinfo/baseinfoshow'

var __asyncEvent = function({ dispatch, getState }) {

    let state = getState();
    let id = state.getIn(['user_patient', 'frontuserinfo','id']); 
    return dispatch(load_detail_baseinfo({ id }))

}
export const BaseInfoHead = ({
  edit,
  check,
  add,
    toEdit,
    toSave,
}) => {
            if(check){
               var index=0;
                 return (<div className="time z_time_edit" style={{top:'215px'}}>
                          <div className="z_time_btn" style={{border:'none'}}>
                              <label>
                                  <span onClick={ toEdit } className="default_inputbtn z_edit_btn">编辑</span>
                              </label>
                          </div>
                        </div>)
             }else if(edit){
                 return (<div className="time z_time_edit">
                          <div className="z_time_btn">
                            <label>
                                <span onClick={ toSave } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }

}
export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())){
            return dispatch(loadAuth(params)).then(function() {
                if (!(successorLoading(getState()))){
                      return __asyncEvent({ dispatch, getState })
                }
                else
                    return Promise.resolve();
            })
        }else{
             if (!(successorLoading(getState()))){
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
            user:  state.getIn(['user_patient','users',idx])
        }
    }, { pushState: push,basicInfoEdit,basicInfoSave})    
export default  class BasicInfo extends Component{
   constructor(props) {
       // code
       super(props);
       this.state = { check: true, edit: false,dateModal:{display:"none"}};
   }
   toEdit() {
       this.setState({...this.state, check: false, edit: true})
   }
   toSave() {
       this.props.basicInfoSave();
       this.setState({...this.state, check: true, edit: false})
   }
   onChangeInfo(ev,key) {
       this.props.basicInfoEdit([{key,val:ev.target.value}])
   }
   onClickInfo(key,val) {
      console.log(key)
      console.log(val)      
       this.props.basicInfoEdit([{key,val}])
   }

   showDateModal(){
      this.state.dateModal.display == 'block'?this.setState({...this.state,dateModal:{display:'none'}}):this.setState({...this.state,dateModal:{display:'block',position:'absolute'}});
   }
   hangleSelectDate(date){  

      var dated = new Date();
      var nowYear = dated.getFullYear();
      var age = nowYear-date.format('Y');
      this.props.basicInfoEdit([{key:'birthdate',val:date.format('DD/MM/YY').toString()},{key:'age',val:age}])

   }
   render(){

   	  if(this.props.auth.get('user')){

        var baseinfo=this.props.user.get('baseinfo').toJS();
        var baseinfoedit=this.props.user.get('baseinfoedit').toJS();
        return  (
            <div>
              { BaseInfoHead({
                           edit: (this.state.edit),
                           check: (this.state.check),
                           toEdit: (::this.toEdit),
                           toSave: (::this.toSave),
                       }) }
              {
                           this.state.check ? BaseInfoShow({
                              ...baseinfo
                           }) : BaseInfoEdit({
                              ...baseinfoedit,
                              change: (::this.onChangeInfo),
                              click: (::this.onClickInfo),
                              hangleSelectDate:(::this.hangleSelectDate),
                              showDateModal:(::this.showDateModal),
                              dateModal:(this.state.dateModal),
                              birthdate:(this.props.user.getIn(['baseinfoedit','birthdate']))

                           })
              }

            </div> 
          )
      }
    }

}


