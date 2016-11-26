import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';

import { login } from 'backend/redux/reducers/auth.js'

import {
    connect
} from 'react-redux';

import TeethGraph, { asyncEvent as teethgraphAsync } from  './teethgraph.js';
import BasicInfo,  { asyncEvent as basicinfoAsync }  from './basicinfo.js';
import History,  { asyncEvent as historyAsync }  from './history.js';

const BASIC = 'BASIC';
const ILLHISTORY = 'ILLHISTORY';
const TEETHSTATUS = 'TEETHSTATUS';
const TEETHGRAPH = 'TEETHGRAPH';


var NavPage = ({
  toBasic,
  toillHistory,
  toTeethStatus,
  toTeethGraph,
  tab
}) => {
    return (<div className="user_topmenu user_topmenu_edit">
                <ul id='routeUl'>
                    <li><a className={(tab==BASIC)?"active":''} onClick={ toBasic }>基础信息</a></li>
                    <li><a className={(tab==ILLHISTORY)?"active":''} onClick={ toillHistory }>既往史</a></li>
                    <li><a className={(tab==TEETHSTATUS)?"active":''} onClick={ toTeethStatus }>口腔情况</a></li>
                    <li><a className={(tab==TEETHGRAPH)?"active":''} onClick={ toTeethGraph }>牙位图</a></li>
                </ul>
            </div>)

}
export default class Nav extends Component {
  constructor(props) {
		// code
	  super(props);
      this.state = {tab:BASIC};
  }
  static contextTypes = {
      showUserData: PropTypes.func.isRequired
  };
  componentDidUpdate(){

  }

  toBasic(){
  	 this.setState({tab:BASIC});
     this.context.showUserData({ asyncProcess:basicinfoAsync,comCreater:function(){
      return  <BasicInfo/>
     }});
  }

  toillHistory(){
  	 this.setState({tab:ILLHISTORY});
     this.context.showUserData({ asyncProcess:historyAsync,comCreater:function(){
      return  <History/>
     }});
  }
  toTeethGraph(){
     var WebUploader = window.webuploader;
     console.log(WebUploader)
  	 this.setState({tab:TEETHGRAPH});
     this.context.showUserData({ asyncProcess:teethgraphAsync,comCreater:function(){
     return  <TeethGraph/>
     }});
  }
  toTeethStatus(){
  	 this.setState({tab:TEETHSTATUS});

  }
  render(){

       return NavPage({tab:this.state.tab,toTeethGraph:(::this.toTeethGraph),toBasic:(::this.toBasic),toillHistory:(::this.toillHistory),toTeethStatus:(::this.toTeethStatus)});
  }

}




