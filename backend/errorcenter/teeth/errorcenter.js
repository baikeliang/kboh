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
            mteeth_status_error: state.getIn(['mteeth_status','error'])
        }
    }, { pushState: push })
export default class ErrorCenter extends Component {
  constructor(props) {
		// code
	  super(props);
    this.state = {isShow : 'none'};
  }
  componentDidUpdate(){

  }
  componentWillUpdate(){
      this.state.isShow = 'block';
  }
  render(){
       var height = window.innerHeight || document.documentElement.clientHeight;
       var width = window.innerWidth || document.documentElement.clientWidth;
       var msg = '';
       var msglength = 0;
       if(this.props.mteeth_status_error&&this.props.mteeth_status_error.hasIn(['post_success'])){
           msg = this.props.mteeth_status_error.getIn(['msg']);
           this.props.mteeth_status_error.getIn(['post_success'])();
       }else if(this.props.mteeth_status_error&&this.props.mteeth_status_error.hasIn(['pos'])){
           let pos = this.props.mteeth_status_error.getIn(['pos']).toJS();
           let size = this.props.mteeth_status_error.getIn(['pos']).size
           let path_obj;
           let path_name = '';
           let _error_table = error_table;
           console.log("fffffffffggbb")
           for(let index=0;index<size;index++){
                path_obj = _error_table[pos[index]];
                path_name = path.name + path_name;
                _error_table =  path_obj;
           }
           msg = path_name
       }
       msglength = msg.length;
       console.log(msglength);
       if(msglength <=0 )
         return <div style={{display:'none'}}/>
       else{
           var that = this;
           if(that.state.isShow == 'block'){
              var timer = setTimeout(function(){
                that.setState({isShow:'none'});
                clearTimeout(timer);
              },2000)
           }
           return (
             <div style={{display:this.state.isShow,position:'fixed',top:height/2,left:width/2,padding:'20px',marginTop:'-27px',marginLeft:-(msglength*14+40)/2+'px',fontSize:'14px',background:'rgba(0,0,0,0.7)',color:'#fff',zIndex:'999'}}>{msg}</div>
           )
       }
  }

}




