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

import { EditClinic } from './view/edit.js'

import {
    LoadedorLoading as successorLoading_clinics ,
    LoadedorLoading_clinic as successorLoading_clinic,
    load as loadClinics,
    load_detail as load_detail_clinic,
    detailEdit  as detailEditClinic
} from 'backend/redux/reducers/user_clinic';

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
        let id = state.getIn(['user_clinic', 'frontuserinfo', 'id']);
        let idx = state.getIn(['user_clinic', 'frontuserinfo', 'idx']);
        if (!isAuthLoaded(state))
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_clinic(state, idx, id))
                    return dispatch(load_detail_clinic({ id, idx, extract: true }))
                else
                    return Promise.resolve();
            })
        else
        if (!successorLoading_clinic(state, idx, id))
            return dispatch(load_detail_clinic({ id, idx, extract: true }))
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
        var idx = state.getIn(['user_clinic', 'frontuserinfo','idx']);
        return {
            auth : state.get('auth'),
            detailEdit:  state.getIn(['user_clinic','clinics',idx,'detailedit']),
            projectRepo: state.get('service_project')
        }
    }, { pushState: push,detailEditClinic } )
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
        this.props.detailEditClinic([{key,val}])
    }
    change(ev,key){
         this.props.detailEditClinic([{key,val:ev.target.value}])
    }
    handleSelectDate(date){

    }
    chooseSetTime(date){
      this.state.dateModal.display = 'none';
      var dated = new Date();
      var nowYear = dated.getFullYear();
      console.log('yyyYYYYYYYWWWEErrthgdrgfd')
      var age = nowYear-date.year();
      this.props.detailEditClinic([{key:'set_date',val:date.format('YYYY-MM-DD')}])
    }
    showSetTimeCalendar(){
        this.state.dateModal.display == 'block'?this.setState({...this.state,dateModal:{display:'none'}}):this.setState({...this.state,dateModal:{display:'block',position:'absolute',zIndex:'100'}});
    }
    upLoadFile(){
       var comself = this;
       window.$("#picUpfile1").diyUpload({
               url: 'http://192.168.10.10/user_clinic/detail/file/rest',
               success: function(data) {
                 console.log("YYUUTTRRREEWWEERRFFFFFFF")
                 console.log(data.file_path)
                 comself.props.detailEditClinic([{key:'clinic_pic',val:data.file_path}])

               },
               error: function(err) {
                   console.log("YYUUTTRRREEWWEERRFFFFFFF!!!!!!!!33")
                   console.log(err);
               },
               buttonText: '上传图片',
               buttonText: '上传图片',
               chunked: false,
               auto: true,
               // 分片大小
               chunkSize: 1048576 * 15,
               //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
               fileNumLimit: 1,
               fileSizeLimit: 1048576 * 100,
               fileSingleSizeLimit: 1048576 * 15,
               accept: {
                   mimeTypes: 'image/*',
                   extensions: 'gif,jpg,jpeg,png',
               }

           }

       );

       window.$("#picUpfile2").diyUpload({
               url: 'http://192.168.10.10/user_clinic/detail/file/rest',
               success: function(data) {
                console.log(data.file_path)
                comself.props.detailEditClinic([{key:'around_pic',val:data.file_path}])
               },
               error: function(err) {
                console.log("YYUUTTRRREEWWEERRFFFFFFF33")
                   console.log(err);
               },
               buttonText: '上传图片',
               buttonText: '上传图片',
               chunked: false,
               auto: true,
               // 分片大小
               chunkSize: 1048576 * 15,
               //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
               fileNumLimit: 1,
               fileSizeLimit: 1048576 * 100,
               fileSingleSizeLimit: 1048576 * 15,
               accept: {
                   mimeTypes: 'image/*',
                   extensions: 'gif,jpg,jpeg,png',
               }

           }

       );
    }
    componentDidMount(){
        this.upLoadFile();
    }
    render(){
        let doctordata = this.props.detailEdit.get('data')?this.props.detailEdit.get('data').toJS():{};
        let projects  = this.props.projectRepo.get('projects')?this.props.projectRepo.get('projects').toJS():[];


        return EditClinic({
            ...doctordata,
            handleSelectDate:(::this.handleSelectDate),
            change:(::this.change),
            click:(::this.click),
            projects,
            dateModal:(this.state.dateModal),
            chooseSetTime:(::this.chooseSetTime),
            showSetTimeCalendar:(::this.showSetTimeCalendar)

        })
    }
}