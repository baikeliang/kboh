require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 234:
/*!*********************************!*\
  !*** ./app/usercenter/login.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIdSwiper = __webpack_require__(/*! react-id-swiper */ 236);
	
	var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);
	
	var _reactSwipe = __webpack_require__(/*! react-swipe */ 245);
	
	var _reactSwipe2 = _interopRequireDefault(_reactSwipe);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _login = __webpack_require__(/*! ../common/css/login.css */ 237);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var swipeOptions = {
					startSlide: 0,
					auto: 0,
					speed: 300,
					disableScroll: 'true',
					continuous: 'true',
					callback: function callback() {
									console.log('slide changed');
					},
					transitionEnd: function transitionEnd() {
									console.log('ended transition');
					}
	};
	
	var Login = _react2.default.createClass({
					displayName: 'Login',
					next: function next() {
									this.refs.reactSwipe.next();
					},
					prev: function prev() {
									this.refs.reactSwipe.prev();
					},
					render: function render() {
									return _react2.default.createElement(
													'div',
													null,
													'sssxxxxxxx'
									)
									/*
	           <div>
	           	<div className={loginstyles.wrapper}>
	        <img src={require('app/common/images/font_logo.png')} alt="" style={{width:"40%",maxWidth: "200px",display: "block", margin:"0 auto", paddingTop: "39px", paddingBottom: "44px"}}/>
	        </div> 
	        <div className={loginstyles.nav}>
	                  <a href="#" className={{color: "#1b7c86"}} >验证码登录</a>
	                  <a href="#">密码登录</a>
	                  <div className={loginstyles.clear}></div>
	               </div>
	               <ReactSwipe ref="reactSwipe" className="mySwipe" swipeOptions={swipeOptions}>
	        <div>
	        <div className={loginstyles['text-input-box']+' '+loginstyles.Mtop40}>
	        <input type="tel" className={loginstyles['input-text']} maxLength="11" id="phone" placeholder="手机号"/>
	        <div className={styles.clear_num}></div>
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
	                   <div>
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
	               </ReactSwipe>
	           </div>
	           */
									;
					}
	});
	
	/*
	const Login = React.createClass({
	    render() {
				var params = {
				pagination: '.swiper-pagination' + loginstyles['swiper-pagination'],
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				spaceBetween: 30
				};
	
	        var bodystyle = {
	        	        position: "relative",
	                    height: "100%",
	                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	                    fontSize: "14px",
	                    color:"#000",
	                    margin: 0,
	                    padding: 0                    
	        }
	
	
	
				return (
					    <div>
					    <div className={loginstyles.wrapper}>
						<img src={require('app/common/images/font_logo.png')} alt="" style={{width:"40%",maxWidth: "200px",display: "block", margin:"0 auto", paddingTop: "39px", paddingBottom: "44px"}}/>
						</div> 
	                    <div style={bodystyle}>
	                        <Header />
	                        <div style={{ position:"relative"}}>
	                            <Swiper
								pagination={params.pagination}
								paginationClickable={params.paginationClickable}
								nextButton={params.nextButton}
								prevButton={params.prevButton}
								spaceBetween={params.spaceBetween}>
								            <div>
								            <div className={loginstyles['text-input-box']+' '+loginstyles.Mtop40}>
											<input type="tel" className={loginstyles['input-text']} maxLength="11" id="phone" placeholder="手机号"/>
											<div className={styles.clear_num}></div>
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
											<div>
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
											</Swiper>
	                      </div>
	                    </div>
	                    </div>
	);
								
	}});*/
	
	module.exports = Login;

/***/ }

};
//# sourceMappingURL=0.cc297f66bea295e250be.hot-update.js.map