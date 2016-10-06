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
	
	console.log(_login2.default);
	
	var Header = function Header() {
		return _react2.default.createElement(
			'div',
			{ className: _login2.default.nav },
			_react2.default.createElement(
				'a',
				{ href: '#', className: _login2.default.active },
				'验证码登录'
			),
			_react2.default.createElement(
				'a',
				{ href: '#' },
				'密码登录'
			),
			_react2.default.createElement('div', { className: _login2.default.clear })
		);
	};
	
	var Login = _react2.default.createClass({
		displayName: 'Login',
		render: function render() {
			var params = {
				pagination: '.swiper-pagination' + _login2.default['swiper-pagination'],
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
				color: "#000",
				margin: 0,
				padding: 0
			};
	
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: _login2.default.wrapper },
					_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/font_logo.png */ 244), alt: '', style: { width: "40%", maxWidth: "200px", display: "block", margin: "0 auto", paddingTop: "39px", paddingBottom: "44px" } })
				),
				_react2.default.createElement(
					'div',
					{ style: bodystyle },
					_react2.default.createElement(Header, null),
					_react2.default.createElement(
						'div',
						{ style: { position: "relative" } },
						_react2.default.createElement(
							_reactIdSwiper2.default,
							{
								pagination: params.pagination,
								paginationClickable: params.paginationClickable,
								nextButton: params.nextButton,
								prevButton: params.prevButton,
								spaceBetween: params.spaceBetween },
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
				)
			);
		}
	});
	module.exports = Login;

/***/ },

/***/ 238:
/*!****************************************************************************************!*\
  !*** ./~/css-loader?modules&localIdentName=[name]__[local]!./app/common/css/login.css ***!
  \****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 186)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n  height: 100%;\r\n  -webkit-tap-highlight-color: transparent;\r\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\",Arial,sans-serif;\r\n  background: #fff;\r\n}\r\n*{\r\n  font-family:\"\\5FAE\\8F6F\\96C5\\9ED1\",Arial,sans-serif;\r\n  margin:0;\r\n  padding:0;\r\n}\r\ninput{\r\n  font-size: 13px;\r\n  outline: none;\r\n  appearance: none;\r\n  -webkit-appearance: none; \r\n  -moz-appearance: none; \r\n}\r\nol li,ul li{\r\n  list-style:none;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n}\r\n.login__wrapper{\r\n\twidth:80%;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tbackground: #fff;\r\n}\r\n.login__logo{\r\n\twidth:40%;\r\n\tmax-width: 200px;\r\n\tmargin:0 auto;\r\n\tdisplay: block;\r\n\tmargin-top:39px;\r\n\tmargin-bottom: 56px;\r\n\r\n}\r\n.login__text-input-box{\r\n\twidth:100%;\r\n\tmargin:0 auto;\r\n\theight:44px;\r\n\tposition: relative;\r\n}\r\n.login__input-text{\r\n\twidth:100%;\r\n\tpadding-top: 11px;\r\n\tpadding-bottom: 11px;\r\n\tborder:solid 1px #9b9b9b;\r\n\tborder-radius: 3px;\r\n\tdisplay: block;\r\n\tfont-size: 16px;\r\n\tcolor: #4a4a4a;\r\n\ttext-indent: 20px;\r\n}\r\n.login__input-text:focus{\r\n\tborder:solid 1px #4ED0e5;\r\n}\r\n.login__text-input-box span{\r\n\tposition: absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\theight:44px;\r\n\tline-height: 44px;\r\n\ttext-align: center;\r\n\tpadding-left: 20px;\r\n\tpadding-right: 15px;\r\n\tcolor: #9b9b9b;\r\n\tfont-size: 16px;\r\n\tz-index: 5;\r\n}\r\n.login__pwd-show{\r\n\tposition: absolute;\r\n\ttop:0;\r\n\tright:0;\r\n\theight:42px;\r\n\tz-index: 5;\r\n\twidth:45px;\r\n\tbackground: url(" + __webpack_require__(/*! ../images/pwd_show.png */ 239) + ") no-repeat center center;\r\n\tbackground-size: 24px 24px;\r\n\tdisplay: none;\r\n}\r\n.login__pwd-hide{\r\n\tposition: absolute;\r\n\ttop:1px;\r\n\tright:0;\r\n\theight:42px;\r\n\tz-index: 5;\r\n\twidth:45px;\r\n\tbackground: url(" + __webpack_require__(/*! ../images/pwd_hide.png */ 240) + ") no-repeat center center;\r\n\tbackground-size: 24px 24px;\r\n}\r\n.login__clear_num{\r\n\tposition: absolute;\r\n\ttop:1px;\r\n\tright:0;\r\n\theight:41px;\r\n\tz-index: 5;\r\n\twidth:16px;\r\n\tbackground: url(" + __webpack_require__(/*! ../images/clear.png */ 241) + ") no-repeat center center;\r\n\tbackground-size: 16px 16px;\r\n\tdisplay: none;\r\n\twidth:36px;\r\n}\r\n.login__btn-code{\r\n\tposition: absolute;\r\n\tright:10px;\r\n\ttop:0;\r\n\theight:44px;\r\n\tline-height: 44px;\r\n\tborder:none;\r\n\tbackground: none;\r\n\tfont-size: 14px;\r\n\tcolor: #1b7c86;\r\n\t/* border:solid 1px #1b7c86; */\r\n\t/* padding:0 10px 0 10px; */\r\n\tborder-radius: 2px;\r\n\tz-index: 999;\r\n}\r\n.login__btn-code.login__addcur{\r\n\tcolor: #9b9b9b;\r\n}\r\n.login__btn-default{\r\n\twidth: 100%;\r\n\theight:44px;\r\n\tline-height: 44px;\r\n\tbackground: #4ED0e5;\r\n\ttext-align: center;\r\n\tfont-size: 16px;\r\n\tdisplay: block;\r\n\tborder:none;\r\n\tcolor: #fff;\r\n\tborder-radius: 3px;\r\n}\r\n/* .btn-default:hover{\r\n\tbackground: #1b7c86;\r\n} */\r\n.login__btn-default.login__hover{\r\n\tbackground: #1b7c86;\r\n}\r\n.login__btomjump{\r\n\tfont-size: 14px;\r\n\tcolor: #9b9b9b;\r\n\ttext-align: center;\r\n\tpadding-top: 18px;\r\n}\r\n.login__btomjump a{\r\n\tcolor: #1b7c86;\r\n}\r\n\r\n.login__foot-icon{\r\n\twidth:100%;\r\n\tposition: fixed;\r\n\tbottom: 14px;\r\n\tleft:0;\r\n\tfont-size: 12px;\r\n\tcolor: #9b9b9b;\r\n\ttext-align: center;\r\n\tz-index: 999;\r\n}\r\n.login__foot-icon a{\r\n\tcolor: #9b9b9b;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.login__opcitybox{\r\n  width:100%;\r\n  height:100%;\r\n  position: absolute;\r\n  z-index: 999;\r\n  text-align: center;\r\n  top:0;\r\n  left:0;\r\n}\r\n.login__opcitybox span{\r\n  padding:20px;\r\n  background: rgba(0,0,0,0.7);\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top:150px;\r\n  left:50%;\r\n  margin-left: -70px;\r\n  white-space:nowrap;\r\n}\r\n.login__Mtop20{\r\n\tmargin-top: 20px;\r\n}\r\n.login__Mtop60{\r\n\tmargin-top: 60px;\r\n}\r\n\r\n\r\n.login__tabs {\r\n  width: 80%;\r\n  height: 42px;\r\n  margin: 0 auto 40px;\r\n}\r\n.login__tabs::after{\r\n  display: block;\r\n  clear: both;\r\n}\r\n.login__tabs a {\r\n  display: block;\r\n  float: left;\r\n  width: 50%;\r\n  color: #9b9b9b;\r\n  height: 42px;\r\n  border-bottom: 4px solid #f1f1f1;\r\n  text-align: center;\r\n  line-height: 42px;\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n}\r\n.login__tabs a.login__active {\r\n  border-bottom:4px solid #4ed0e5;\r\n  color:#1b7c86;\r\n}\r\n.login__swiper-container {\r\n  background: #fff;\r\n  width: 100%;\r\n  border-top: 0;\r\n  margin:0 auto;\r\n}\r\n.login__swiper-slide {\r\n  width: 100%;\r\n  background: none;\r\n}\r\n.login__content-slide{\r\n  width: 99%;\r\n}\r\n.login__Mtop20{\r\n  position: relative;\r\n}\r\n.login__Mtop20 .login__forget{\r\n  display: block;\r\n  position: absolute;\r\n  top: 50px;\r\n  right:0px;\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  color: #9b9b9b;\r\n}\r\n.login__white{\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n.login__swiper-container {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.login__swiper-slide {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    background: #fff;\r\n\r\n    /* Center slide text vertically */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-justify-content: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    -webkit-align-items: center;\r\n    align-items: center;\r\n}\r\n.login__swiper-pagination{\r\n    position: absolute;\r\n    width:80%;\r\n    margin-left:10%;\r\n    height:40px;\r\n\r\n}\r\n.login__swiper-pagination span{\r\n    width:50%;\r\n    height:40px;\r\n    float: left;\r\n    border-radius: 0;\r\n    margin:0;\r\n}\r\n.login__swiper-wrap{\r\n    width:80%;\r\n    margin:0 auto;\r\n    position: absolute;\r\n    left:10%;\r\n    top:0;\r\n}\r\n\r\n.login__Mtop40{\r\n    margin-top: 40px;\r\n}\r\n.login__nav{\r\n    width:80%;\r\n    margin:0 auto;\r\n    position: absolute;\r\n    top:0;\r\n    left:10%;\r\n    z-index:0;\r\n}\r\n.login__nav a{\r\n    width:50%;\r\n    float: left;\r\n    height:40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    color: #9b9b9b;\r\n}\r\n.login__nav a.login__active{\r\n    color: #1b7c86;\r\n}\r\n.login__clear{\r\n    clear:both;\r\n}   \r\n@media screen and (max-height: 490px){\r\n  .login__foot-icon{\r\n    position: relative;\r\n    margin-top: 30px;\r\n    padding-bottom: 14px;\r\n  }\r\n}\r\n\r\n\r\n\r\n", ""]);
	
	// exports
	exports.locals = {
		"wrapper": "login__wrapper",
		"logo": "login__logo",
		"text-input-box": "login__text-input-box",
		"input-text": "login__input-text",
		"pwd-show": "login__pwd-show",
		"pwd-hide": "login__pwd-hide",
		"clear_num": "login__clear_num",
		"btn-code": "login__btn-code",
		"addcur": "login__addcur",
		"btn-default": "login__btn-default",
		"hover": "login__hover",
		"btomjump": "login__btomjump",
		"foot-icon": "login__foot-icon",
		"opcitybox": "login__opcitybox",
		"Mtop20": "login__Mtop20",
		"Mtop60": "login__Mtop60",
		"tabs": "login__tabs",
		"active": "login__active",
		"swiper-container": "login__swiper-container",
		"swiper-slide": "login__swiper-slide",
		"content-slide": "login__content-slide",
		"forget": "login__forget",
		"white": "login__white",
		"swiper-pagination": "login__swiper-pagination",
		"swiper-wrap": "login__swiper-wrap",
		"Mtop40": "login__Mtop40",
		"nav": "login__nav",
		"clear": "login__clear"
	};

/***/ }

};
//# sourceMappingURL=0.ffa7c78e14e27e6f9b0d.hot-update.js.map