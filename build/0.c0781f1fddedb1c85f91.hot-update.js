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
		disableScroll: true,
		continuous: true,
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
			var bodystyle = {
				position: "relative",
				height: "100%",
				fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
				fontSize: "14px",
				color: "#000",
				margin: 0,
				padding: 0
			};
	
			return _react2.default.createElement(
				'div',
				{ style: bodystyle },
				_react2.default.createElement(
					'div',
					{ className: _login2.default.wrapper },
					_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/font_logo.png */ 244), alt: '', style: { width: "40%", maxWidth: "200px", display: "block", margin: "0 auto", paddingTop: "39px", paddingBottom: "44px" } })
				),
				_react2.default.createElement(
					'div',
					{ className: _login2.default.nav },
					_react2.default.createElement(
						'a',
						{ href: '#', className: { color: "#1b7c86" } },
						'验证码登录'
					),
					_react2.default.createElement(
						'a',
						{ href: '#' },
						'密码登录'
					),
					_react2.default.createElement('div', { className: _login2.default.clear })
				),
				_react2.default.createElement(
					'div',
					{ className: _login2.default.container },
					_react2.default.createElement(
						_reactSwipe2.default,
						{ ref: 'reactSwipe', className: 'mySwipe', swipeOptions: swipeOptions },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ className: _login2.default['text-input-box'] + ' ' + _login2.default.Mtop40 },
								_react2.default.createElement('input', { type: 'tel', className: _login2.default['input-text'], maxLength: '11', id: 'phone', placeholder: '手机号' }),
								_react2.default.createElement('div', { className: _style2.default.clear_num })
							),
							_react2.default.createElement(
								'div',
								{ className: _login2.default['text-input-box'] + ' ' + _login2.default.Mtop20 },
								_react2.default.createElement('input', { type: 'text', className: _login2.default['input-text'], maxLength: '6', id: 'code', placeholder: '验证码' }),
								_react2.default.createElement('input', { type: 'button', className: _login2.default['btn-code'], id: 'sendYzm', value: '发送验证码' })
							),
							_react2.default.createElement(
								'div',
								{ className: _login2.default.Mtop60 },
								_react2.default.createElement('input', { type: 'button', className: _login2.default['btn-default'], value: '登录', id: 'loginBut' }),
								_react2.default.createElement(
									'p',
									{ className: _login2.default.btomjump },
									'没有账号？',
									_react2.default.createElement(
										'a',
										{ href: 'javascript:;', id: 'go_register' },
										'立即注册'
									)
								)
							)
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ className: _login2.default['text-input-box'] + ' ' + _login2.default.Mtop40 },
								_react2.default.createElement('input', { type: 'tel', className: _login2.default['input-text'], id: 'phone2', maxLength: '11', placeholder: '手机号' }),
								_react2.default.createElement('div', { className: _login2.default.clear_num })
							),
							_react2.default.createElement(
								'div',
								{ className: _login2.default['text-input-box'] + ' ' + _login2.default.Mtop20 },
								_react2.default.createElement('input', { type: 'password', className: _login2.default['input-text'], maxLength: '20', id: 'pwd', placeholder: '6～20位密码' }),
								_react2.default.createElement('a', { href: 'javascript:;', className: _login2.default['pwd-show'] }),
								_react2.default.createElement('a', { href: 'javascript:;', className: _login2.default['pwd-hide'] }),
								_react2.default.createElement(
									'i',
									{ className: 'forget' },
									'忘记密码?'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: _login2.default['btn-input-box'] + ' ' + _login2.default.Mtop60 },
								_react2.default.createElement('input', { type: 'button', className: _login2.default['btn-default'], value: '登录', id: 'loginBut2' }),
								_react2.default.createElement(
									'p',
									{ className: _login2.default.btomjump },
									'没有账号？',
									_react2.default.createElement(
										'a',
										{ href: 'javascript:;', id: 'go_register' },
										'立即注册'
									)
								)
							)
						)
					)
				)
			);
		}
	});
	
	module.exports = Login;

/***/ }

};
//# sourceMappingURL=0.c0781f1fddedb1c85f91.hot-update.js.map