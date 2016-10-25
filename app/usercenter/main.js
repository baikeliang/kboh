import React , { Component } from 'react';

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'


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
    console.log('HHHHHHHHHHHHHHHHHHHH')
    if (!isAuthLoaded(getState())) {
    	console.log('JJJJJJJJJJJJJJJJJJHH')
    	console.log(params)
        promises.push(dispatch(loadAuth(params)));
    }
    console.log('asyncConnect!!!!!!!')
    return Promise.all(promises);
  }
}])
@connect(
  state => ({ auth : state.get('auth')}),
  {logout, pushState: push})
export default class UserCenter extends Component {
    
    toOrder(event){
        console.log(event)
    	event.preventDefault();
    	this.props.pushState('/login')
    }
    
    toOrders(event){
        console.log(event)
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
       console.log("componentWillMount@@@@@@@@@@@@@@@")
       if(this.props.auth.has('user')){
       	  return;
       }else{
       	console.log("componentWillMount@@@@@@@@@@@@@@@1")
       	  console.log(this.props.auth.getIn(['error','info']))
       	  if(this.props.auth.getIn(['error','info']) == 'auth'){
       	  	 console.log("componentWillMount@@@@@@@@@@@@@@@2")
             this.props.pushState('/login');
       	  }
       }
          return;
    }
    componentDidMount(){
          console.log("aaaaaaa!!!!!!!!!!!!!!!!!!!!")
    }
    render() {
    	//console.log(this.props)
    	console.log("bbbbbbb!!!!!!!!!!!!!!!!!!!!")
        
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

