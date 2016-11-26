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
    switchtooth as switchtoothm,
    flushgraphydata
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
            mteeth_ui: state.getIn(['mteeth_status','teeth_ui']),
            cteeth_ui: state.getIn(['cteeth_status','teeth_ui'])
        }
    }, { pushState: push ,switchteethm,switchteethc,switchachem,switchachec,switchtoothm,switchtoothc,flushgraphydata })
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
       var teeth_ui = (this.props.teethtype == 'M') ? this.props.mteeth_ui : this.props.cteeth_ui;
       var addtime = teeth_ui.get('time');
       this.setState({...this.state, check: false, edit: false, add: true, addtime })
   }
   save(){
      this.props.flushgraphydata()
      this.toCheck();
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

       var teethtype = ((this.props.mteeth_ui.get('size') >= 0) ? 'M' : 'C');
       this.setState({...this.state, teethtype })
   }
   componentWillUpdate() {

   }
   componentWillReceiveProps(nextProps){
       var teethtype = ((nextProps.mteeth_ui.get('size') >= 0) ? 'M' : 'C');
       var curToothName = (nextProps.mteeth_ui.get('size') >= 0)? nextProps.mteeth_ui.get('toothname'):nextProps.cteeth_ui.get('toothname')
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
   upLoadPhoto() {
       /*图片头像上传*/
       var options = {
           thumbBox: '.thumbBox',
           spinner: '.spinner',
           imgSrc: '/mint/images/user.png'
       }
       var cropper = $('.imageBox').cropbox(options);
       $('#pick').on('change', function() {
           $('.new-create-opcity').show()
           var reader = new FileReader();
           reader.onload = function(e) {
               options.imgSrc = e.target.result;
               cropper = $('.imageBox').cropbox(options);
           }
           reader.readAsDataURL(this.files[0]);
           this.files = [];
       })
       $('#btnCrop').on('click', function() {
           sessionStorage.setItem('jump_li', 1)
           var img = cropper.getDataURL();
           AjaxObj.imgBase64Up(function(result) {
               if (result.Data.code == 1) {
                   $('.new-create-opcity').hide()
                   $('#photo img').attr('src', result.Data.photo_path)
                   $('#file,#file2').val('');
               } else {
                   $('#photo').siblings('p').html(result.Data.msg).show()
                   $('#file,#file2').val('');
               }
           }, img)
       })
       $('#btnZoomIn').on('click', function() {
           cropper.zoomIn();
       })
       $('#btnZoomOut').on('click', function() {
           cropper.zoomOut();
       })

       $('.close_dialog').click(function() {
               $('.new-create-opcity').hide();
       })
           /*------图片头像上传结束----*/
   }

   componentDidMount() {
       window.$("#pick").diyUpload({
               url: '',
               success: function(data) {
               },
               error: function(err) {
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

   render(){

   	  if(this.props.auth.get('user')){
        return  (<div>
                   {
                       TeethHeader({
                           edit: (this.state.edit),
                           check: (this.state.check),
                           add: (this.state.add),
                           addTime: (this.state.addtime),
                           teeth_ui: ((this.state.teethtype == 'M') ? this.props.mteeth_ui.toJS() : this.props.cteeth_ui.toJS()),
                           toAdd: (::this.toAdd),
                           toEdit: (::this.toEdit),
                           toCheck: (::this.toCheck),
                           saveTeethGraph: (::this.save),
                           changeCheckTime: (::this.changeCheckTime),
                           changeEditTime: (::this.changeEditTime)
                       })
                   } {
                       this.state.check ? TeethShow({
                           teethtype: this.state.teethtype,
                           mteeth_ui: this.props.mteeth_ui ? this.props.mteeth_ui.toJS() : {},
                           cteeth_ui: this.props.cteeth_ui ? this.props.cteeth_ui.toJS() : {},
                           toMteeth: (::this.toMteeth),
                           toCteeth: (::this.toCteeth)
                       }) : TeethEdit({
                           teethtype: this.state.teethtype,
                           mteeth_ui: this.props.mteeth_ui ? this.props.mteeth_ui.toJS() : {},
                           cteeth_ui: this.props.cteeth_ui ? this.props.cteeth_ui.toJS() : {},
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


