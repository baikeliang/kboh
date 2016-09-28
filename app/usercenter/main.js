import React from 'react';

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

const UserCenter = React.createClass({
    
    render() {
							return (<div>
							<header className="p_top huanzhebg">
							<dl>
							<dt id="userImg"></dt>
							<dd id="userName"></dd>
							</dl>
							<a href="set.html" className="anniu">
							<img className="shezhi" src={require('app/common/images/shezhi.png')} alt="" />
							</a>
							</header>
							
							<a className="chuzhen" href="#" id="IwantOrdertab">
							<div className="chuzhenson">
							<img src={require('app/common/images/huanzhe1.png')} alt="" />
							<div className="rtop_r">
							<h6 className="spantitle">我要预约</h6>
							<span className="spancon"></span>
							</div>
							<div className="clear"></div>
							</div>
							</a>
							
							<div className="block">
							<a href="myOrder.html" className="a1">
							<div className="blockson">
							<img src={require('app/common/images/huanzhe2.png')} alt="" />
							<span>我的预约</span>
							</div>
							</a>
							<a href="myCase.html" className="a2">
							<div className="blockson">
							<img src={require('app/common/images/huanzhe3.png')} alt="" />
							<span>我的病历</span>
							</div>
							</a>
							<a href="myBillList.html" className="a1">
							<div className="blockson">
							<img src={require('app/common/images/huanzhe4.png')} alt="" />
							<span>我的账单</span>
							</div>
							</a>
							<a href="personmsg.html" className="a2">
							<div className="blockson">
							<img src={require('app/common/images/huanzhe5.png')} alt="" />
							<span>个人信息</span>
							</div>
							</a>
							</div>
							
							<div className="fotIcon">
							<img src={require('app/common/images/logo2.png')} alt=""/>
							<p>轻快预约&nbsp;&nbsp;&nbsp;从“齿”简单</p>
							</div>
							</div>);
							
}});
module.exports = UserCenter;
