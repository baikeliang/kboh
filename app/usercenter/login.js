import React from 'react';
import Swiper from 'react-id-swiper';

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

const Login = React.createClass({
    
    render() {
							return (<div>
							<div className={wxstyles.weui_cells_form}>
							<div className={wxstyles.weui_panel_bd} style={{marginTop:"10px"}}>
							<div className={wxstyles.weui_media_box+' '+wxstyles.weui_media_small_appmsg}>
							<div className={wxstyles.weui_cells+' '+wxstyles.weui_cells_access}>
							<a className={wxstyles.weui_cell+' '+wxstyles.weui_cell_bj} href="javascript:;" style={{margin:0}}>
							<span>手机号</span>
							<input type="tel" id="account"  maxLength="11" placeholder="请输入手机号"/>
							</a>
							<div className={styles.clear_num}></div>
							</div>
							</div>
							</div>
							<div className={wxstyles.weui_panel_bd} style={{marginTop:"10px"}}>
							<div className={wxstyles.weui_media_box+' '+wxstyles.weui_media_small_appmsg}>
							<div className={wxstyles.weui_cells+' '+wxstyles.weui_cells_access}>
							<div className={wxstyles.weui_cell+' '+wxstyles.weui_cell_bj} href="javascript:;" style={{margin:0}}>
							<span>密 &nbsp;&nbsp;码</span>
							<input type="password" id="password" maxLength="20" placeholder="请输入密码"/>
							<p className={styles.registerA}><a href="html/findMa.html">忘记密码?</a></p>
							</div>
							</div>
							</div>
							</div>
							</div>
							<div className={styles.demosContentPadded} style={{padding:"5px"}}>
							<a href="javascript:'" className={styles.price_confirm} id="loginBut" style={{marginTop:"20px"}}>登录</a>
							</div>
							<div className={styles.clear}></div>
							<div className={styles.goregisterbox}>
							<a href="javascript:void(0)"  id="go_register">注册新用户</a>
							</div>
							<div className={styles.opcitybox} style={{display:"none"}}><span>请输入手机号</span></div>
							<div id="toast" style={{display:"none"}}>
							<div className={wxstyles.weui_mask_transparent}></div>
							<div className={wxstyles.weui_toast}>
							<i className={wxstyles.weui_icon_toast}></i>
							<p className={wxstyles.weui_toast_content}>登录成功</p>
							</div>
							</div>
							</div>);
							
}});
module.exports = Login;
