import React , { Component } from 'react'
import Projects from './projectsRender.js'
import ChooseForOther from './chooseForOther.js'
import CancelChooseForOther from './cancelChooseForOther.js'

/*
const ToOrder = React.createClass({

  render() {
    return (<div>
              <Projects projectMetas ={[{
        id: '1',
        servicename: "洗牙",
        logo_url: ''
      }, {
        id: '2',
        servicename: "拔牙",
        logo_url: ''
      }]}> </Projects>
              </div>);
  }
});
*/

export default class ToOrder extends Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }
  render(){
    console.log("aaaaa!!!!!")
    return (<div>
              <Projects projectMetas ={[{
        id: '1',
        servicename: "洗牙",
        logo_url: require('app/common/images/pro1.png')
      }, {
        id: '2',
        servicename: "拔牙",
        logo_url: require('app/common/images/pro2.png')
      }]}> </Projects>
              </div>);
  }

  // methods
}
//module.exports = ToOrder;