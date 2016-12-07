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

import { EditDoctor } from './view/edit.js'

import {
    LoadedorLoading as successorLoading_doctors ,
    LoadedorLoading_doctor as successorLoading_doctor,
    load as loadDoctors,
    load_detail as load_detail_doctor,
    detailEdit  as detailEditDoctor,
    doctorFlush
} from 'backend/redux/reducers/user_doctor';

import {
    LoadedorLoading as successorLoading_projects ,
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
        let id = state.getIn(['user_doctor', 'frontuserinfo', 'id']);
        let idx = state.getIn(['user_doctor', 'frontuserinfo', 'idx']);
        if (!isAuthLoaded(state))
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_doctor(state, idx, id))
                    return dispatch(load_detail_doctor({ id, idx, extract: true }))
                else
                    return Promise.resolve();
            })
        else
        if (!successorLoading_doctor(state, idx, id))
            return dispatch(load_detail_doctor({ id, idx, extract: true }))
        else
            return Promise.resolve();
    }
},{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_projects(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadProjects({ user }));
                } else
                    return Promise.resolve();
            })
        } else {
                if (!successorLoading_projects(getState())) {
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
        var idx = state.getIn(['user_doctor', 'frontuserinfo','idx']);
        return {
            auth : state.get('auth'),
            detailEdit:  state.getIn(['user_doctor','doctors',idx,'detailedit']),
            projectRepo: state.get('service_project')
        }
    }, { pushState: push,detailEditDoctor,doctorFlush } )
export default  class Edit extends Component{
    constructor(props) {
        // code
      super(props);
      this.state = { dateModal:{display:"none"} };
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    static contextTypes = {
        showRight: PropTypes.func.isRequired
    };
    click(e,key,val){
        // console.log(time);
        // time = time.split(' ')[0];
        // this.props.orderEdit([{key,val:time+' '+e.target.innerHTML}]);
        this.props.detailEditDoctor([{key,val}])
    }
    change(ev,key){
        this.props.detailEditDoctor([{key,val:ev.target.value}])
    }
    handleSelectDate(date){

    }
    save(){
        console.log('AAAAAAA');
        this.props.doctorFlush();
    }
    chooseBirth(date){
      this.state.dateModal.display = 'none';
      var dated = new Date();
      var nowYear = dated.getFullYear();
      console.log('yyyYYYYYYYWWWEErrthgdrgfd')
      var age = nowYear-date.year();
      this.props.detailEditDoctor([{key:'birthdate',val:date.format('YYYY-MM-DD')},{key:'age',val:age}])
    }
    showBirthCalendar(){
        console.log('sssss!!!!!!!!')
        this.state.dateModal.display == 'block'?this.setState({...this.state,dateModal:{display:'none'}}):this.setState({...this.state,dateModal:{display:'block',position:'absolute',zIndex:'100'}});
    }
    render(){
        let doctordata = this.props.detailEdit.get('data')?this.props.detailEdit.get('data').toJS():{};
        let projects  = this.props.projectRepo.get('projects')?this.props.projectRepo.get('projects').toJS():[];
        return EditDoctor({
            ...doctordata,
            handleSelectDate:(::this.handleSelectDate),
            change:(::this.change),
            click:(::this.click),
            save:(::this.save),
            projects,
            showBirthCalendar:(::this.showBirthCalendar),
            dateModal:(this.state.dateModal),
            chooseBirth:(::this.chooseBirth)
        })
    }
}