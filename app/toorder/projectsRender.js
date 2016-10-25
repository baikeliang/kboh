import React from 'react';
import Project from './projectRender.js'
import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'



var assign = require('object.assign').getPolyfill();

const Projects = React.createClass({
  propTypes: {
    projectMetas: React.PropTypes.array.isRequired,
  },
  handleProClick(projectInfo) {},
  renderProjects() {
    return this.props.projectMetas.map(function(projectMeta, i) {
      assign(projectMeta, projectMeta,{
        handleProClick: this.handleProClick
      }, {
        key: i
      });
      console.log(projectMeta)
      return <Project {...projectMeta}></Project>;
    }.bind(this));
  },
  render() {
    return (
                <div>
                 <h3  className={styles.chooseTitle}>选择预约项目</h3>
                 <div className={styles.chooseProjbox}>
                  <div className={styles.chooseProjboxdl} id="chooseProjboxdl">
                  {this.renderProjects()}
                  </div>
                 </div>
                 <div className={styles.opcitybox} style={{
                 display: "none"
                 }}><span></span></div>
                 <div className={styles.opacityTipbox} style={{
                 display: "none"
                 }}>
                 <h3>
                 <label>您是否要复诊？</label>
                 <p className={styles.fuzhentip}><span className={styles.reOrderCancel}>以后再说</span><span className={styles.wantReorder}>我要复诊</span></p>
                 </h3>
                 </div>
                 <div className={styles.fotIcon}>
                 <img src={require('app/common/images/logo2.png')} alt="" />
                 <p>轻快预约   从“齿”简单</p>
                 </div>
                </div>


      );
  }
});

module.exports = Projects;