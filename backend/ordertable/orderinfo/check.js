import React , { Component,PropTypes } from 'react';

import Promise from 'bluebird'

import {
    push
} from 'react-router-redux';

import { CheckOrder } from './view/check.js'

import  EditOrder,{ asyncEvent as asyncEventCheck } from './edit.js'

import {
   load_detail,
   LoadedorLoading,
   LoadedorLoading_order
} from 'backend/redux/reducers/order_patient.js'

import {
  isLoaded as isAuthLoaded,
  load as loadAuth,
  logout
} from 'backend/redux/reducers/auth';

import {
    connect
} from 'react-redux';

import {
    asyncConnect
} from 'redux-connect'

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        var state = getState();
        let id  = state.getIn(['order_patient','frontorder','id']);
        let idx = state.getIn(['order_patient','frontorder','idx']);
        if(!isAuthLoaded(state))
           return dispatch(loadAuth(params)).then(function(){
              if(!LoadedorLoading_order(state,idx,id))
                 return dispatch(load_detail({ id, idx, extract:true }))
              else
                 return Promise.resolve();
           })
        else
              if(!LoadedorLoading_order(state,idx,id))
                 return dispatch(load_detail({ id, idx, extract:true }))
              else
                 return Promise.resolve();
    }
}]

@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
            auth : state.get('auth'),
            detailEdit: state.getIn(['order_patient','detailedit'])
        }
    }, { pushState: push } )
export default  class Check extends Component{
    constructor(props) {
        // code
      super(props);
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    static contextTypes = {
        showRight: PropTypes.func.isRequired
    };
    toEdit(){

        this.context.showRight({
            asyncProcess:asyncEventCheck,
            comCreater:function(){
               return <EditOrder/>
            }
        })
    }
    render(){
        let orderdata = this.props.detailEdit.get('data').toJS();
        return CheckOrder({...orderdata,toEdit:(::this.toEdit)})
    }

}


