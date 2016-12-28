import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'
import UserCom from './user.js'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import Immutable from 'immutable'

import {
    UserList
} from './view/userlistpage.js'

import {
    asyncConnect
} from 'redux-connect'

import {
	isLoaded as isAuthLoaded,
	load as loadAuth,
	logout
} from 'backend/redux/reducers/auth';

import {
	LoadedorLoading as successorLoading ,
	load as loadUsers,
    frontUserForInfo as toShowUserInfo,
    nextGroupUsers
} from 'backend/redux/reducers/user_patient';

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

import  UserInfoCom from './userinfo/container.js'

var assign = require('object.assign').getPolyfill();

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadUsers({ user, num: 10, begin: 0, refresh: { flag: true } }));
                } else
                    return Promise.resolve();
            })
        } else {
            if (!successorLoading(getState())) {
                let state = getState();
                let user = state.getIn(['auth', 'user']).toJS();
                return dispatch(loadUsers({ user, num: 10, begin: 0, refresh: { flag: true } }));
            } else
                return Promise.resolve();
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
        	auth : state.get('auth'),
            userRepo: state.get('user_patient')
        }
    }, { pushState: push, load: loadUsers, toDetail:toShowUserInfo,nextGroupUsers },(stateProps, dispatchProps, ownProps) =>{return  assign({}, ownProps, stateProps, dispatchProps) },{ withRef: true ,pure : true})
export default class UserListCom extends Component {
	// methods
	static propTypes = {
		userRepo:React.PropTypes.object.isRequired,
	}
    static contextTypes = {
      showRight: React.PropTypes.func.isRequired,
    }
	handlePan(ev) {

	}

    handleRefresh(resolve, reject) {

        this.props.load( { num: 10, begin: 0, refresh:{ flag:true, resolve,reject } } )
    }


    componentWillMount() {
        if (this.props.auth.has('user')) {
            return;
        } else {
            if (this.props.auth.getIn(['error', 'info']) == 'auth') {
                this.props.pushState('/login');
            }
        }
        return;

    }
    toAddUser(){
        this.props.toDetail({ idx:'add',id:'add' })

        this.context.showRight({
            asyncProcess:[],
            comCreater:function(){
               return <UserInfoCom/>
            }
        })
    }
    toDeleteUser(){

    }
    toEditUser(){

    }
    toSearch(){

    }
    toUserInfo(ev,idx,id){

        this.props.toDetail({ idx,id })

        this.context.showRight({
            asyncProcess:[],
            comCreater:function(){
               return <UserInfoCom/>
            }
        })
    }
    handlePageClick(data){
       let selected = data.selected;
       return this.props.load( { num: 10, begin: (selected*10), showbegin:(selected*10)  })
    }
    componentDidMount() {

    }
	render() {
        if(this.props.auth.has('user')){
		 var size = this.props.userRepo.get('users').size;
         var showbegin = this.props.userRepo.get('showbegin');
	     var nodata = (size == 0) ? true : false;
	     var options = {
	        touchAction: 'pan-y'
	     };
        var height = window.innerHeight || document.documentElement.clientHeight
        var data = [];
        for(let i=0;(i<10)&&((showbegin+i)<size);i++){
             data.push(this.props.userRepo.getIn(['users',showbegin+i]).toJS())
        }
        return UserList({ handlePageClick:(::this.handlePageClick), toUserInfo:(::this.toUserInfo), toSearch:(::this.toSearch),toAddUser:(::this.toAddUser), toDeleteUser:(::this.toDeleteUser), toEditUser:(::this.toEditUser), data, nodata, options, length: size, handlePan: (::this.handlePan),handleRefresh:(::this.handleRefresh) })
	    }else{
	    return <div/>;
	    }
	}


}
