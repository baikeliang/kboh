import React , { Component } from 'react';

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'


import Promise from 'bluebird'

import {asyncConnect} from 'redux-connect'

import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'app/redux/reducers/auth';



@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    console.log('HHHHHHHHHHHHHHHHHHHH')
    if (!isAuthLoaded(getState())) {
    	console.log('JJJJJJJJJJJJJJJJJJHH')
    	console.log(params)
      promises.push(dispatch(loadAuth(params)));
    }

    return Promise.all(promises);
  }
}])
export default class UserCenter extends Component {
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
							
							<a className={styles.chuzhen} href="/#/usercenter/toOrder" id="IwantOrdertab">
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
							</div>)	
    }
	// methods
}