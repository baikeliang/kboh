import React from 'react';
import ReactSwipe from 'react-swipe';

import wxstyles from 'app/common/css/weui.min.css'
import loginstyles from 'app/common/css/login.css'
import Hammer from 'react-hammerjs'

const swipeOptions = {
    startSlide: 0,
    auto:  0,
    speed:  300,
    disableScroll: false,
    continuous: false,
    callback() {
    },
    transitionEnd() {
    }
};


const Login = React.createClass({
	next() {
        this.refs.reactSwipe.prev();
    },

    prev() {
        this.refs.reactSwipe.next();
    },
    handleSwipe(ev) {

       	if(ev.direction ==4){
        		  console.log("right");
                  this.next();
        	}else{
        		  console.log("left");
                  this.prev();
        	}
    },
	render(){
		var bodystyle = {
			position: "relative",
			height: "100%",	
			fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
			fontSize: "14px",
			color:"#000",
			margin: 0,
			padding: 0,		
            WebkitTapHighlightColor: "transparent",
            FontFamily: "微软雅黑,Arial,sans-serif",
            background: "#fff",
            margin:0,
            padding:0
           }
        console.log("SSSSSSSSS!!!!!!!!")
        return (
            <div style={bodystyle}>
            	<div className={loginstyles.wrapper}>
					<img src={require('app/common/images/font_logo.png')} alt="" style={{width:"40%",maxWidth: "200px",display: "block", margin:"0 auto", paddingTop: "39px", paddingBottom: "44px"}}/>
				</div>
				<Hammer onSwipe={this.handleSwipe}>
				<div className={loginstyles.container}>
			    <div className={loginstyles.nav}>
                   <a href="#" className={{color: "#1b7c86"}} >验证码登录</a>
                   <a href="#">密码登录</a>
                   <div className={loginstyles.clear}></div>
                </div>
                <ReactSwipe ref="reactSwipe" className={loginstyles.mySwipe} swipeOptions={swipeOptions}>
					<div>
                        <div className={loginstyles.wrapper}>
							<div className={loginstyles['text-input-box']+' '+loginstyles.Mtop40}>
								<input type="tel" className={loginstyles['input-text']+' '+'tel'+' '+'phone'} maxLength="11" id="phone" placeholder="手机号"/>
								<div className={loginstyles.clear_num}></div>
							</div>
							<div className={loginstyles['text-input-box']+' '+loginstyles.Mtop20}>
								<input type="text" className={loginstyles['input-text']} maxLength="6" id="code" placeholder="验证码"/>
								<input type="button" className={loginstyles['btn-code']} id="sendYzm" value="发送验证码"/>
							</div>
							<div className={loginstyles.Mtop60}>
								<input type="button" className={loginstyles['btn-default']} value="登录" id="loginBut"/>
								<p className={loginstyles.btomjump}>没有账号？<a href="javascript:;" id="go_register">立即注册</a></p>
							</div>
						</div>
				    </div>
                    <div>
                        <div className={loginstyles.wrapper}>                    
							<div className={loginstyles['text-input-box']+' '+loginstyles.Mtop40}>
								<input type="tel" className={loginstyles['input-text']} id="phone2" maxLength="11" placeholder="手机号"/>
								<div className={loginstyles.clear_num}></div>
							</div>
							<div className={loginstyles['text-input-box']+' '+loginstyles.Mtop20}>
								<input type="password" className={loginstyles['input-text']} maxLength="20" id="pwd" placeholder="6～20位密码"/>
								<a href="javascript:;" className={loginstyles['pwd-show']}></a>
								<a href="javascript:;" className={loginstyles['pwd-hide']}></a>
								<i className="forget">忘记密码?</i>
							</div>
								<div className={loginstyles['btn-input-box']+' '+loginstyles.Mtop60}>
								<input type="button" className={loginstyles['btn-default']} value="登录" id="loginBut2"/>
								<p className={loginstyles.btomjump}>没有账号？<a href="javascript:;" id="go_register">立即注册</a></p>
							</div>
						</div>
					</div>                  
                </ReactSwipe>
               </div>
               </Hammer>
            </div>
        );

	}
})

module.exports = Login;
