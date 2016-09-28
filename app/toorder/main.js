import React from 'react';
import Projects from './projectsRender.js'
import ChooseForOther from './chooseForOther.js'
import CancelChooseForOther from './cancelChooseForOther.js'

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

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
module.exports = ToOrder;