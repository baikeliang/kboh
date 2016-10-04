import React from 'react';

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'
@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
const UserCenter = React.createClass({
    
    render() {

							return (<div>
							<header className={styles.p_top + ' '+ styles.huanzhebg}>
							<dl>
							<dt id="userImg"><img src={this.props.photo?this.props.photo:require('app/common/images/userPic.png')} alt="" /></dt>
							<dd id="userName">{this.props.username?this.props.username:'完善个人信息'}</dd>
							</dl>
							<a href="set.html" className={styles.anniu}>
							<img className={styles.shezhi} src={require('app/common/images/shezhi.png')} alt="" />
							</a>
							</header>
							
							<a className={styles.chuzhen} href="#" id="IwantOrdertab">
							<div className={styles.chuzhenson}>
							<img src={require('app/common/images/huanzhe1.png')} alt="" />
							<div className={styles.rtop_r}>
							<h6 className={styles.spantitle}>我要预约</h6>
							<span className={styles.spancon}></span>
							</div>
							<div className={styles.clear}></div>
							</div>
							</a>
							
							<div className={styles.block}>
							<a href="myOrder.html" className={styles.a1}>
							<div className={styles.blockson}>
							<img src={require('app/common/images/huanzhe2.png')} alt="" />
							<span>我的预约</span>
							</div>
							</a>
							<a href="myCase.html" className={styles.a2}>
							<div className={styles.blockson}>
							<img src={require('app/common/images/huanzhe3.png')} alt="" />
							<span>我的病历</span>
							</div>
							</a>
							<a href="myBillList.html" className={styles.a1}>
							<div className={styles.blockson}>
							<img src={require('app/common/images/huanzhe4.png')} alt="" />
							<span>我的账单</span>
							</div>
							</a>
							<a href="personmsg.html" className={styles.a2}>
							<div className={styles.blockson}>
							<img src={require('app/common/images/huanzhe5.png')} alt="" />
							<span>个人信息</span>
							</div>
							</a>
							</div>
							
							<div className={styles.fotIcon}>
							<img src={require('app/common/images/logo2.png')} alt=""/>
							<p>轻快预约&nbsp;&nbsp;&nbsp;从“齿”简单</p>
							</div>
							</div>);
							
}});
module.exports = UserCenter;
