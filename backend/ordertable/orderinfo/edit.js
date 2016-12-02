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
    load as loadDoctors,
    load_OndutyDoctors,
    load_detail as load_detail_doctor,
    load_onduty_detail
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
    }, { pushState: push,orderEdit,load_OndutyDoctors,load_onduty_detail } )
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
    change(ev,key){
        this.props.orderEdit([{key,val:ev.target.value}]);
    }
    chooseDoctor(ev){
        let id =  ev.target.value;
        this.props.orderEdit([{key:'doctor_id',val:ev.target.value}]);

        this.props.doctorRepo.get('dutydoctors').map((doctor)=>{
               if(doctor.get('id') == id){
                  this.props.orderEdit([{key:'clinic_name',val:doctor.get('clinic_name')}])
               }

        })
        this.props.load_onduty_detail({ id });
    }
    chooseProject(ev){
        let visit_time;
        if(visit_time = this.props.detailEdit.getIn(['data','visit_time'])){
            this.props.orderEdit([{key:'service_id',val:ev.target.value}])
            this.props.load_OndutyDoctors({visit_time,service_id})
        }else{
            this.props.orderEdit([{key:'service_id',val:ev.target.value}])
        }
    }
    showDateModal(){
        console.log(this.dateModal);
        this.dateModal.display == 'block'?this.dateModal.display='none':this.dateModal={...this.dateModal,display:'block',position:'absolute',left:150+'px',top:35+'px'};
        console.log(this.dateModal);
        this.setState({...this.state,refresh:0});
    }
    handleSelectDate(date){
        console.log(this.dateModal.display);
        console.log(date.format('DD/MM/YY').toString());
        this.dateModal.display = 'none';
        this.setState({...this.state,refresh:0});
        let service_id;
        if(service_id = this.props.detailEdit.getIn(['data','service_id'])){
            this.props.orderEdit([{key:'visit_time',val:date.format('DD/MM/YY').toString()}])
            this.props.load_OndutyDoctors({visit_time:date.format('DD/MM/YY').toString(),service_id})
        }else{
            this.props.orderEdit([{key:'visit_time',val:date.format('DD/MM/YY').toString()}])
        }
    }
    render(){
        let orderdata = this.props.detailEdit.get('data')?this.props.detailEdit.get('data').toJS():{};
        let doctors   = this.props.doctorRepo.get('dutydoctors')?this.props.doctorRepo.get('dutydoctors').toJS():[];
        let companys  = this.props.companyRepo.get('companys')?this.props.companyRepo.get('companys').toJS():[];
        let projects  = this.props.projectRepo.get('projects')?this.props.projectRepo.get('projects').toJS():[];
        let timeRange = [];
        let doctor_id = this.props.detailEdit.getIn(['data','doctor_id']);

        doctors.forEach(( doctor )=>{
           if(doctor.id == doctor_id){
              timeRange = doctor.time_arr;
           }
        });

        console.log('AAAAAAAAAAAAAA');
        console.log(timeRange);

        return EditOrder({
            ...orderdata,
            handleSelectDate:(::this.handleSelectDate),
            dateModal:(this.dateModal),
            showDateModal:(::this.showDateModal),
            change:(::this.change),
            doctors,
            companys,
            projects,
            timeRange,
            chooseDoctor:(::this.chooseDoctor),
            chooseProject:(::this.chooseProject)
        })
    }
}