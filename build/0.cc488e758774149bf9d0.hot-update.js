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
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Login = _react2.default.createClass({
				displayName: 'Login',
				render: function render() {
							return _react2.default.createElement(
										'div',
										null,
										_react2.default.createElement(
													'div',
													{ className: _weuiMin2.default.weui_cells_form },
													_react2.default.createElement(
																'div',
																{ className: _weuiMin2.default.weui_panel_bd, style: { marginTop: "10px" } },
																_react2.default.createElement(
																			'div',
																			{ className: _weuiMin2.default.weui_media_box + ' ' + _weuiMin2.default.weui_media_small_appmsg },
																			_react2.default.createElement(
																						'div',
																						{ className: _weuiMin2.default.weui_cells + ' ' + _weuiMin2.default.weui_cells_access },
																						_react2.default.createElement(
																									'a',
																									{ className: _weuiMin2.default.weui_cell + ' ' + _weuiMin2.default.weui_cell_bj, href: 'javascript:;', style: { margin: 0 } },
																									_react2.default.createElement(
																												'span',
																												null,
																												'手机号'
																									),
																									_react2.default.createElement('input', { type: 'tel', id: 'account', maxLength: '11', placeholder: '请输入手机号' })
																						),
																						_react2.default.createElement('div', { className: _style2.default.clear_num })
																			)
																)
													),
													_react2.default.createElement(
																'div',
																{ className: _weuiMin2.default.weui_panel_bd, style: { marginTop: "10px" } },
																_react2.default.createElement(
																			'div',
																			{ className: _weuiMin2.default.weui_media_box + ' ' + _weuiMin2.default.weui_media_small_appmsg },
																			_react2.default.createElement(
																						'div',
																						{ className: _weuiMin2.default.weui_cells + ' ' + _weuiMin2.default.weui_cells_access },
																						_react2.default.createElement(
																									'div',
																									{ className: _weuiMin2.default.weui_cell + _weuiMin2.default.weui_cell_bj, href: 'javascript:;', style: { margin: 0 } },
																									_react2.default.createElement(
																												'span',
																												null,
																												'密   码'
																									),
																									_react2.default.createElement('input', { type: 'password', id: 'password', maxLength: '20', placeholder: '请输入密码' }),
																									_react2.default.createElement(
																												'p',
																												{ className: _style2.default.registerA },
																												_react2.default.createElement(
																															'a',
																															{ href: 'html/findMa.html' },
																															'忘记密码?'
																												)
																									)
																						)
																			)
																)
													)
										),
										_react2.default.createElement(
													'div',
													{ className: _style2.default.demosContentPadded, style: { padding: "5px" } },
													_react2.default.createElement(
																'a',
																{ href: 'javascript:\'', className: _style2.default.price_confirm, id: 'loginBut', style: { marginTop: "20px" } },
																'登录'
													)
										),
										_react2.default.createElement('div', { className: _style2.default.clear }),
										_react2.default.createElement(
													'div',
													{ className: _style2.default.goregisterbox },
													_react2.default.createElement(
																'a',
																{ href: 'javascript:void(0)', id: 'go_register' },
																'注册新用户'
													)
										),
										_react2.default.createElement(
													'div',
													{ className: _style2.default.opcitybox, style: { display: "none" } },
													_react2.default.createElement(
																'span',
																null,
																'请输入手机号'
													)
										),
										_react2.default.createElement(
													'div',
													{ id: 'toast', style: { display: "none" } },
													_react2.default.createElement('div', { className: _weuiMin2.default.weui_mask_transparent }),
													_react2.default.createElement(
																'div',
																{ className: _weuiMin2.default.weui_toast },
																_react2.default.createElement('i', { className: _weuiMin2.default.weui_icon_toast }),
																_react2.default.createElement(
																			'p',
																			{ className: _weuiMin2.default.weui_toast_content },
																			'登录成功'
																)
													)
										)
							);
				}
	});
	module.exports = Login;

/***/ }

};
//# sourceMappingURL=0.cc488e758774149bf9d0.hot-update.js.map