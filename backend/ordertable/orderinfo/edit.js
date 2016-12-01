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
   LoadedorLoading_order,
   orderEdit
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
    LoadedorLoading as successorLoading_project ,
    load as loadProjects
} from 'backend/redux/reducers/service_project';


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
},{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_project(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadProjects({ user }));
                } else
                    return Promise.resolve();
            })
        } else {
                if (!successorLoading_project(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadProjects({ user }));
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
            detailEdit:  state.getIn(['order_patient','detailedit']),
            doctorRepo:  state.get('user_doctor'),
            companyRepo: state.get('user_company'),
            projectRepo: state.get('service_project')
        }
    }, { pushState: push,orderEdit } )
export default  class Edit extends Component{
    constructor(props) {
        // code
      super(props);
      this.dateModal = { display:'none'}
      this.state = { refresh:0 }
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    static contextTypes = {
        showRight: PropTypes.func.isRequired
    };
    change(){

    }
    showDateModal(){
        console.log(this.dateModal);
        this.dateModal.display == 'block'?this.dateModal.display='none':this.dateModal={...this.dateModal,display:'block',position:'absolute',left:150+'px',top:35+'px'};
        console.log(this.dateModal);
        this.setState({...this.state,refresh:0});
    }
    hangleSelectDate(date){
        console.log(this.dateModal.display);
        console.log(date.format('DD/MM/YY').toString());
        this.dateModal.display = 'none';
        this.setState({...this.state,refresh:0});
        this.props.orderEdit([{key:'visit_time',val:date.format('DD/MM/YY').toString()}])
    }
    render(){
        let orderdata = this.props.detailEdit.get('data')?this.props.detailEdit.get('data').toJS():{};
        let doctors   = this.props.doctorRepo.get('doctors')?this.props.doctorRepo.get('doctors').toJS():[];
        let companys  = this.props.companyRepo.get('companys')?this.props.companyRepo.get('companys').toJS():[];
        let projects  = this.props.projectRepo.get('projects')?this.props.projectRepo.get('projects').toJS():[];
        console.log('AAAAAAAAAAAAAA');
        console.log(orderdata);
        return EditOrder({
            ...orderdata,
            hangleSelectDate:(::this.hangleSelectDate),
            dateModal:(this.dateModal),
            showDateModal:(::this.showDateModal),
            change:(::this.change),
            doctors,
            companys,
            projects
        })
    }
}