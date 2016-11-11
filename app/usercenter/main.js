import React , { Component } from 'react';

import Promise from 'bluebird'

import { asyncConnect } from 'redux-connect'

import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'app/redux/reducers/auth';

import { Link } from 'react-router'

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

import { UCenter } from './view/mainpage.js'

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    if (!isAuthLoaded(getState())) {
        promises.push(dispatch(loadAuth(params)));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({ auth : state.get('auth')}),
  {logout, pushState: push})
export default class UserCenter extends Component {

    toOrder(event){
    	event.preventDefault();
    	this.props.pushState('/usercenter/toOrder')
    }

    toOrders(event){
    	event.preventDefault();
    	this.props.pushState('/usercenter/myOrders')
    }

    toCases(event){
    	event.preventDefault();
    	this.props.pushState('/usercenter/myCases')
    }
    toBills(event){
        event.preventDefault();
    	this.props.pushState('/usercenter/myBills')
    }
    componentWillMount(){
       if(this.props.auth.has('user')){
       	  return;
       }else{
       	  if(this.props.auth.getIn(['error','info']) == 'auth'){
             this.props.pushState('/login');
       	  }
       }
          return;
    }
    componentDidMount(){
    }
    render() {
    	//console.log(this.props)

        if(this.props.auth.has('user')){

        var user = this.props.auth.get('user').toJS();

        return UCenter({ user,
             toOrder:(::this.toOrder),
             toOrders:(::this.toOrders),
             toCases:(::this.toCases),
             toBills:(::this.toBills)
        });
      }else{
      	return <div/>;
      }
    }
	// methods
}

