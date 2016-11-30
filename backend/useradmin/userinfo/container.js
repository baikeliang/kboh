import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';

import { login } from 'backend/redux/reducers/auth.js'

import {
    connect
} from 'react-redux';

import Nav from './nav.js'
import { Header } from './view/baseinfo/header.js'


export default  class Container extends Component{
    constructor(props) {
        // code
      super(props);
      this.state = {toShowData:function(){
          return  <div/>
      }};
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };
    static childContextTypes = {
         showUserData: React.PropTypes.func.isRequired
    };

    getChildContext(){
        return {
            showUserData: (this.showUserData.bind(this))
        }
    }
    showUserData({ asyncProcess,itemid,comCreater }){

        const promises = [];
        var self = this;
        console.log(this.context.store)
        console.log("sssseeeewwwwww")
        asyncProcess.forEach(function(p){
             promises.push(p.promise({store:self.context.store,params:{}}))
        })

        Promise.all(promises).then(function(s){
          self.setState({
            toShowData:function(){
              return comCreater()
            }
        })
        },function(e){

        })

    }
    render(){
      return (<div style={{height:"100%"}}>
               { Header({}) }
               <div className="add-box-container">
               <div className="user_main_top">
               <Nav/>
                 {this.state.toShowData()}
               </div>
               </div>
              </div>)
   }

}