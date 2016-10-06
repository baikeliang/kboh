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
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _login = __webpack_require__(/*! ../common/css/login.css */ 237);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Login = _react2.default.createClass({
						displayName: 'Login',
						render: function render() {
											var params = {
																pagination: '.swiper-pagination',
																paginationClickable: true,
																nextButton: '.swiper-button-next',
																prevButton: '.swiper-button-prev',
																spaceBetween: 30
											};
											return _react2.default.createElement(
																_reactIdSwiper2.default,
																{
																					pagination: params.pagination,
																					paginationClickable: params.paginationClickable,
																					nextButton: params.nextButton,
																					prevButton: params.prevButton,
																					spaceBetween: params.spaceBetween },
																_react2.default.createElement(
																					'div',
																					{ className: 'swiper-wrap' },
																					_react2.default.createElement(
																										'div',
																										{ className: _login2.default.textInputBox + ' ' + _login2.default.Mtop40 },
																										_react2.default.createElement('input', { type: 'tel', className: _login2.default.inputText, maxLength: '11', id: 'phone', placeholder: '手机号' }),
																										_react2.default.createElement('div', { className: _style2.default.clear_num })
																					),
																					_react2.default.createElement(
																										'div',
																										{ className: _login2.default.textInputBox + ' ' + _login2.default.Mtop20 },
																										_react2.default.createElement('input', { type: 'text', className: _login2.default.inputText, maxLength: '6', id: 'code', placeholder: '验证码' }),
																										_react2.default.createElement('input', { type: 'button', className: _login2.default.btnCode, id: 'sendYzm', value: '发送验证码' })
																					),
																					_react2.default.createElement(
																										'div',
																										{ className: _login2.default.Mtop60 },
																										_react2.default.createElement('input', { type: 'button', className: _login2.default.btnDefault, value: '登录', id: 'loginBut' }),
																										_react2.default.createElement(
																															'p',
																															{ className: 'btomjump' },
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
																					{ className: 'swiper-wrap' },
																					_react2.default.createElement(
																										'div',
																										{ className: _login2.default.textInputBox + ' ' + _login2.default.Mtop40 },
																										_react2.default.createElement('input', { type: 'tel', className: _login2.default.inputText, id: 'phone2', maxLength: '11', placeholder: '手机号' }),
																										_react2.default.createElement('div', { className: 'clear_num' })
																					),
																					_react2.default.createElement(
																										'div',
																										{ className: _login2.default.textInputBox + ' ' + _login2.default.Mtop20 },
																										_react2.default.createElement('input', { type: 'password', className: _login2.default.inputText, maxLength: '20', id: 'pwd', placeholder: '6～20位密码' }),
																										_react2.default.createElement('a', { href: 'javascript:;', className: 'pwd-show' }),
																										_react2.default.createElement('a', { href: 'javascript:;', className: 'pwd-hide' }),
																										_react2.default.createElement(
																															'i',
																															{ className: 'forget' },
																															'忘记密码?'
																										)
																					),
																					_react2.default.createElement(
																										'div',
																										{ className: _login2.default.btnInputBox + ' ' + _login2.default.Mtop60 },
																										_react2.default.createElement('input', { type: 'button', className: _login2.default.btnDefault, value: '登录', id: 'loginBut2' }),
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
											);
						}
	});
	module.exports = Login;

/***/ }

};
//# sourceMappingURL=0.0d43e4f0139dc94d41ee.hot-update.js.map