import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';

import { login } from 'backend/redux/reducers/auth.js'

import {
    connect
} from 'react-redux';

import { error_table } from 'backend/redux/config/error_table.js'

@connect(
    state => {
        return {
            auth : state.get('auth'),
            user_patient_error:  state.getIn(['user_patient','error']),
            mteeth_status_error: state.getIn(['mteeth_status','error'])
        }
    }, { pushState: push })
export default class ErrorCenter extends Component {
  constructor(props) {
		// code
	  super(props);

  }
  componentDidUpdate(){

  }

  render(){
       if(this.props.user_patient_error.hasIn(['post_success'])){
           console.log("ssssssfvvvvv")
           this.props.user_patient_error.getIn(['post_success'])();
       }
       return <div/>
  }

}




