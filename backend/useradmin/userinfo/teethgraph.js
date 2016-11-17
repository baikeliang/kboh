import React , { Component } from 'react';

import {
    push
} from 'react-router-redux';

import { login } from 'backend/redux/reducers/auth.js'

import {
    connect
} from 'react-redux';

import Nav from './nav.js'
import { Header } from './view/header.js'

import {
	isLoaded as isAuthLoaded,
	load     as loadAuth,
	logout
} from 'backend/redux/reducers/auth';

import {
    LoadedorLoading as successorLoadingm,
    load as loadMteeth,
    switchteeth as switchteethm,
    switchache as switchachem,
    switchtooth as switchtoothm
} from 'backend/redux/reducers/mteeth_status';

import {
    LoadedorLoading as successorLoadingc,
    load as loadCteeth,
    switchteeth as switchteethc,
    switchache as switchachec,
    switchtooth as switchtoothc
} from 'backend/redux/reducers/cteeth_status';



import {
    asyncConnect
} from 'redux-connect'

import {
	TeethShow
}  from './view/teethshow.js'

import {
	TeethEdit
}  from './view/teethedit.js'

import {
	TeethHeader
}  from './view/teethheader.js'

var __asyncEvent = function({ dispatch, getState }) {

    let state = getState();
    let user = state.getIn(['auth', 'user']).toJS();
    let index = state.getIn(['user_patient', 'frontuserinfo','idx']);
    let patient =  state.getIn(['user_patient','users']).get(index).toJS();
    if (patient.teethtype == 'M')
        return dispatch(loadMteeth({ user, patient, index, refresh: { flag: true } }));
    else if (patient.teethtype == 'C')
        return dispatch(loadCteeth({ user, patient, index, refresh: { flag: true } }));
    else {
        return Promise.all([dispatch(loadMteeth({ user, patient, index, refresh: { flag: true } })), dispatch(loadCteeth({ user, patient, index, refresh: { flag: true } }))])
    }

}

export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())){
            return dispatch(loadAuth(params)).then(function() {
                if (!(successorLoadingm(getState())||successorLoadingc(getState()))){
                      return __asyncEvent({ dispatch, getState })
                }
                else
                    return Promise.resolve();
            })
        }else{
             if (!(successorLoadingm(getState())||successorLoadingc(getState()))){
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
        return {
        	  auth : state.get('auth'),
            mteeth_status: state.get('mteeth_status'),
            cteeth_status: state.get('cteeth_status')
        }
    }, { pushState: push ,switchteethm,switchteethc,switchachem,switchachec,switchtoothm,switchtoothc })
export default  class TeethGraph extends Component{
   constructor(props) {
       // code
       super(props);
       this.state = { check: true, edit: false, add: false };
   }
   toMteeth() {

   }
   toCteeth() {

   }
   toAdd() {
       var teeth_status = (this.props.teethtype == 'M') ? this.props.mteeth_status : this.props.cteeth_status;
       var addtime = teeth_status.getIn(['teeth_ui', 'time']);
       this.setState({...this.state, check: false, edit: false, add: true, addtime })
   }
   toEdit() {
       this.setState({...this.state, check: false, edit: true, add: false })
   }
   toCheck() {

       this.setState({...this.state, check: true, edit: false, add: false })
   }
   changeEditTime(ev) {
       (this.state.teethtype == 'M') ? this.props.switchteethm({ idx: ev.target.value }): this.props.switchteethc({ idx: ev.target.value })

   }
   changeCheckTime(ev) {
       (this.state.teethtype == 'M') ? this.props.switchteethm({ idx: ev.target.value }): this.props.switchteethc({ idx: ev.target.value })

   }
   componentWillMount() {

       var teethtype = ((this.props.mteeth_status.get('allUserTeeth').size >= 0) ? 'M' : 'C');
       this.setState({...this.state, teethtype })
   }
   componentWillUpdate() {

   }
   componentWillReceiveProps(nextProps){
       var teethtype = ((nextProps.mteeth_status.get('allUserTeeth').size >= 0) ? 'M' : 'C');
       var curToothName = (nextProps.mteeth_status.get('allUserTeeth').size >= 0)? nextProps.mteeth_status.getIn(['teeth_ui','toothname']):nextProps.cteeth_status.getIn(['teeth_ui','toothname'])
       if(curToothName)
         this.setState({...this.state, teethtype,curToothName })
       else
         this.setState({...this.state, teethtype })
   }
   clickOnTooth(ev, toothname) {
       if(this.state.teethtype == 'M'){
           this.props.switchtoothm({ toothname })
       }else{
           this.props.switchtoothc({ toothname })
       }
       //this.setState({...this.state, curToothName: toothname })

   }
   clickOnMAche(ev, acheidx, curToothName,status) {
       this.props.switchachem({ acheidx, curToothName,status })
   }
   clickOnCAche(ev, acheidx, curToothName,status) {
       this.props.switchachec({ acheidx, curToothName,status })
   }

   render(){

   	  if(this.props.auth.get('user')){
        return  (<div>
                   {
                       TeethHeader({
                           edit: (this.state.edit),
                           check: (this.state.check),
                           add: (this.state.add),
                           addTime: (this.state.addtime),
                           teeth_status: ((this.state.teethtype == 'M') ? this.props.mteeth_status.toJS() : this.props.cteeth_status.toJS()),
                           toAdd: (::this.toAdd),
                           toEdit: (::this.toEdit),
                           toCheck: (::this.toCheck),
                           changeCheckTime: (::this.changeCheckTime),
                           changeEditTime: (::this.changeEditTime)
                       })
                   } {
                       this.state.check ? TeethShow({
                           teethtype: this.state.teethtype,
                           mteeth_status: this.props.mteeth_status ? this.props.mteeth_status.toJS() : [],
                           cteeth_status: this.props.cteeth_status ? this.props.cteeth_status.toJS() : [],
                           toMteeth: (::this.toMteeth),
                           toCteeth: (::this.toCteeth)
                       }) : TeethEdit({
                           teethtype: this.state.teethtype,
                           mteeth_status: this.props.mteeth_status ? this.props.mteeth_status.toJS() : [],
                           cteeth_status: this.props.cteeth_status ? this.props.cteeth_status.toJS() : [],
                           toMteeth: (::this.toMteeth),
                           toCteeth: (::this.toCteeth),
                           clickOnTooth:(::this.clickOnTooth),
                           curToothName:(this.state.curToothName),
                           clickOnMAche:(::this.clickOnMAche),
                           clickOnCAche:(::this.clickOnCAche)
                       })

                   }


                </div>)

    }
   }

}


