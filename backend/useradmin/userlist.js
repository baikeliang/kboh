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
    frontUserForInfo as toShowUserInfo
} from 'backend/redux/reducers/user_patient';

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

import  UserInfoCom from './userinfo/container.js'

export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        console.log("EEEEEEEEEEEEEEEEEEEE111111")
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading(getState())){
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(loadUsers( { user, num: 10, begin: 0, refresh:{flag:true} }));
                }
                else
                    return Promise.resolve();
            })
        }else{
             console.log("EEEEEEEEEEEEEEEEEEEE")
             if (!successorLoading(getState())){
                console.log("EEEEEEEEEEEEEEEEEEEE2")
                   let state = getState();
                   let user = state.getIn(['auth','user']).toJS();
                   return dispatch(loadUsers( { user, num: 10, begin: 0, refresh:{flag:true}  }));
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
            userRepo: state.get('user_patient')
        }
    }, { pushState: push, load: loadUsers, toDetail:toShowUserInfo })
export default class UserListCom extends Component {
	// methods
	static propTypes = {
		userRepo:React.PropTypes.object.isRequired,
	}
    static contextTypes = {
      showRight: PropTypes.func.isRequired
    };
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

    }
    toDeleteUser(){

    }
    toEditUser(){

    }
    toSearch(){

    }
    toUserInfo(ev,idx){
        console.log(idx);
        console.log(this.context)

        this.props.toDetail({ idx })

        this.context.showRight({
            asyncProcess:[],
            comCreater:function(){
               return <UserInfoCom/>
          }
        })
    }
    componentDidMount() {

    }
	render() {
        console.log(this.props.userRepo.toJS())
        if(this.props.auth.has('user')){

		 var size = this.props.userRepo.get('users').size;
	     var nodata = (size == 0) ? true : false;
         console.log(size)
         console.log("sssssssrrr")
	     var options = {
	        touchAction: 'pan-y'
	     };
        var height = window.innerHeight || document.documentElement.clientHeight
        var data = nodata?[]:this.props.userRepo.get('users').toJS();
        console.log("ffffggg")
        console.log(data)
        return UserList({toUserInfo:(::this.toUserInfo), toSearch:(::this.toSearch),toAddUser:(::this.toAddUser), toDeleteUser:(::this.toDeleteUser), toEditUser:(::this.toEditUser), data, nodata, options, length: size, handlePan: (::this.handlePan),handleRefresh:(::this.handleRefresh) })
	    }else{
	    return <div/>;
	    }
	}


}
