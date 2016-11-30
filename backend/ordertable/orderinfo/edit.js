import React , { Component,PropTypes } from 'react';

import Promise from 'bluebird'

import {
    push
} from 'react-router-redux';

import {
  isLoaded as isAuthLoaded,
  load as loadAuth,
  logout
} from 'backend/redux/reducers/auth';

import { EditOrder } from './view/edit.js'

import {
   load_detail,
   LoadedorLoading,
   LoadedorLoading_order
} from 'backend/redux/reducers/order_patient.js'

import {
    LoadedorLoading as successorLoading_company ,
    load as loadCompanys
} from 'backend/redux/reducers/user_company';

import {
    LoadedorLoading as successorLoading_doctor ,
    load as loadDoctors
} from 'backend/redux/reducers/user_doctor';

import {
    connect
} from 'react-redux';

import {
    asyncConnect
} from 'redux-connect'

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        var state = getState();
        let id = state.getIn(['order_patient', 'frontorder', 'id']);
        let idx = state.getIn(['order_patient', 'frontorder', 'idx']);
        if (!isAuthLoaded(state))
            return dispatch(loadAuth(params)).then(function() {
                if (!LoadedorLoading_order(state, idx, id))
                    return dispatch(load_detail({ id, idx, extract: true }))
                else
                    return Promise.resolve();
            })
        else
        if (!LoadedorLoading_order(state, idx, id))
            return dispatch(load_detail({ id, idx, extract: true }))
        else
            return Promise.resolve();
    }
}, {
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_company(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadCompanys({ user }));
                } else
                    return Promise.resolve();
            })
        } else {
                if (!successorLoading_company(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadCompanys({ user }));
                } else
                    return Promise.resolve();
        }
    }
},{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_doctor(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadDoctors({ user }));
                } else
                    return Promise.resolve();
            })
        } else {
                if (!successorLoading_doctor(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadDoctors({ user }));
                } else
                    return Promise.resolve();
        }
    }
}]


@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
            auth : state.get('auth'),
            detailEdit:  state.getIn(['order_patient','detailedit'])
            doctorRepo:  state.get('user_doctor'),
            companyRepo: state.get('user_company')
        }
    }, { pushState: push } )
export default  class Edit extends Component{
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
    change(){

    }
    render(){
        let orderdata = this.props.detailEdit.get('data').toJS();
        return EditOrder({...orderdata,change:(::this.change)})
    }

}