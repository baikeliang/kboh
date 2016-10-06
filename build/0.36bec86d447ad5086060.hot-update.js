require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 412:
/*!********************************!*\
  !*** ./app/usercenter/main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 334);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 338);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 339);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 343);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 366);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class;
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _reduxConnect = __webpack_require__(/*! redux-connect */ 293);
	
	var _auth = __webpack_require__(/*! ../redux/reducers/auth */ 413);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UserCenter = (_dec = (0, _reduxConnect.asyncConnect)([{
			promise: function promise(_ref) {
					var _ref$store = _ref.store;
					var dispatch = _ref$store.dispatch;
					var getState = _ref$store.getState;
					var params = _ref.params;
	
					var promises = [];
					console.log('HHHHHHHHHHHHHHHHHHHH');
					if (!(0, _auth.isLoaded)(getState())) {
							console.log('JJJJJJJJJJJJJJJJJJHH');
							console.log(params);
							promises.push(dispatch((0, _auth.load)(params)));
					}
	
					return _bluebird2.default.all(promises);
			}
	}]), _dec(_class = function (_Component) {
			(0, _inherits3.default)(UserCenter, _Component);
	
			function UserCenter() {
					(0, _classCallCheck3.default)(this, UserCenter);
					return (0, _possibleConstructorReturn3.default)(this, (UserCenter.__proto__ || (0, _getPrototypeOf2.default)(UserCenter)).apply(this, arguments));
			}
	
			(0, _createClass3.default)(UserCenter, [{
					key: 'render',
					value: function render() {
							return _react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
											'header',
											{ className: _style2.default.p_top + ' ' + _style2.default.huanzhebg },
											_react2.default.createElement(
													'dl',
													null,
													_react2.default.createElement(
															'dt',
															{ id: 'userImg' },
															_react2.default.createElement('img', { src: this.props.photo ? this.props.photo : __webpack_require__(/*! ../common/images/userPic.png */ 253), alt: '' })
													),
													_react2.default.createElement(
															'dd',
															{ id: 'userName' },
															this.props.username ? this.props.username : '完善个人信息'
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'set.html', className: _style2.default.anniu },
													_react2.default.createElement('img', { className: _style2.default.shezhi, src: __webpack_require__(/*! ../common/images/shezhi.png */ 214), alt: '' })
											)
									),
									_react2.default.createElement(
											'a',
											{ className: _style2.default.chuzhen, href: '/#/usercenter/toOrder', id: 'IwantOrdertab' },
											_react2.default.createElement(
													'div',
													{ className: _style2.default.chuzhenson },
													_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe1.png */ 215), alt: '' }),
													_react2.default.createElement(
															'div',
															{ className: _style2.default.rtop_r },
															_react2.default.createElement(
																	'h6',
																	{ className: _style2.default.spantitle },
																	'我要预约'
															),
															_react2.default.createElement('span', { className: _style2.default.spancon })
													),
													_react2.default.createElement('div', { className: _style2.default.clear })
											)
									),
									_react2.default.createElement(
											'div',
											{ className: _style2.default.block },
											_react2.default.createElement(
													'a',
													{ href: 'myOrder.html', className: _style2.default.a1 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe2.png */ 216), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'我的预约'
															)
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'myCase.html', className: _style2.default.a2 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe3.png */ 217), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'我的病历'
															)
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'myBillList.html', className: _style2.default.a1 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe4.png */ 218), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'我的账单'
															)
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'personmsg.html', className: _style2.default.a2 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe5.png */ 219), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'个人信息'
															)
													)
											)
									),
									_react2.default.createElement(
											'div',
											{ className: _style2.default.fotIcon },
											_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/logo2.png */ 210), alt: '' }),
											_react2.default.createElement(
													'p',
													null,
													'轻快预约   从“齿”简单'
											)
									)
							);
					}
					// methods
	
			}]);
			return UserCenter;
	}(_react.Component)) || _class);
	exports.default = UserCenter;

/***/ }

};
//# sourceMappingURL=0.36bec86d447ad5086060.hot-update.js.map