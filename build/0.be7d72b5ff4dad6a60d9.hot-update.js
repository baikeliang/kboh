require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 3:
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _express = __webpack_require__(/*! express */ 4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ 5);
	
	var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);
	
	var _webpack = __webpack_require__(/*! webpack */ 6);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ 7);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackClientConfig = __webpack_require__(/*! ../webpack.client.config.js */ 235);
	
	var _webpackClientConfig2 = _interopRequireDefault(_webpackClientConfig);
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(/*! react-dom/server */ 12);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 171);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 172);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 173);
	
	var _configureStore = __webpack_require__(/*! ./configure-store.js */ 174);
	
	var _routes = __webpack_require__(/*! ./routes */ 180);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*eslint-disable no-console */
	var app = (0, _express2.default)();
	
	app.use((0, _webpackDevMiddleware2.default)((0, _webpack2.default)(_webpackClientConfig2.default), {
	  publicPath: _webpackClientConfig2.default.output.publicPath,
	  stats: {
	    colors: true
	  },
	  resolve: {
	    alias: {
	      app: _webpackClientConfig2.default.resolve.alias.app
	    }
	  }
	}));
	
	var HTML = function HTML(_ref) {
	  var content = _ref.content;
	  var store = _ref.store;
	  return _react2.default.createElement(
	    'html',
	    { lang: 'en' },
	    _react2.default.createElement(
	      'head',
	      null,
	      _react2.default.createElement('meta', { charSet: 'utf-8' }),
	      _react2.default.createElement(
	        'title',
	        null,
	        '登陆'
	      ),
	      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' }),
	      _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css' })
	    ),
	    _react2.default.createElement(
	      'body',
	      null,
	      _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: content } }),
	      _react2.default.createElement('div', { id: 'devtools' }),
	      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__initialState__=' + (0, _serializeJavascript2.default)(store.getState()) + ';' } }),
	      _react2.default.createElement('script', { src: '/bundle.js' })
	    )
	  );
	};
	
	app.use(function (req, res) {
	  var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
	  var store = (0, _configureStore.configureStore)(memoryHistory);
	  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
	
	  (0, _reactRouter.match)({ history: history, routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      var content = (0, _server.renderToString)(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_reactRouter.RouterContext, renderProps)
	      ));
	
	      res.send('<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(HTML, { content: content, store: store })));
	    }
	  });
	});
	
	app.listen(3000, function () {
	  console.log('Server listening on http://localhost:3000, Ctrl+C to stop');
	});

/***/ },

/***/ 234:
/*!*********************************!*\
  !*** ./app/usercenter/login.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSwipe = __webpack_require__(/*! react-swipe */ 245);
	
	var _reactSwipe2 = _interopRequireDefault(_reactSwipe);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _login = __webpack_require__(/*! ../common/css/login.css */ 237);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _reactHammerjs = __webpack_require__(/*! react-hammerjs */ 246);
	
	var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var swipeOptions = {
	  startSlide: 0,
	  auto: 0,
	  speed: 300,
	  disableScroll: false,
	  continuous: false,
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
	    this.refs.reactSwipe.prev();
	  },
	  prev: function prev() {
	    this.refs.reactSwipe.next();
	  },
	  handleSwipe: function handleSwipe(ev) {
	
	    if (ev.direction == 4) {
	      console.log("right");
	      this.next();
	    } else {
	      console.log("left");
	      this.prev();
	    }
	  },
	  render: function render() {
	    var _bodystyle;
	
	    var bodystyle = (_bodystyle = {
	      position: "relative",
	      height: "100%",
	      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	      fontSize: "14px",
	      color: "#000",
	      margin: 0,
	      padding: 0,
	      WebkitTapHighlightColor: "transparent",
	      FontFamily: "微软雅黑,Arial,sans-serif",
	      background: "#fff"
	    }, _defineProperty(_bodystyle, 'margin', 0), _defineProperty(_bodystyle, 'padding', 0), _bodystyle);
	
	    return _react2.default.createElement(
	      'div',
	      { style: bodystyle },
	      _react2.default.createElement(
	        'div',
	        { className: _login2.default.wrapper },
	        _react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/font_logo.png */ 244), alt: '', style: { width: "40%", maxWidth: "200px", display: "block", margin: "0 auto", paddingTop: "39px", paddingBottom: "44px" } })
	      ),
	      _react2.default.createElement(
	        _reactHammerjs2.default,
	        { onSwipe: this.handleSwipe },
	        _react2.default.createElement(
	          'div',
	          { className: _login2.default.container },
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
	            _reactSwipe2.default,
	            { ref: 'reactSwipe', className: _login2.default.mySwipe, swipeOptions: swipeOptions },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'div',
	                { className: _login2.default.wrapper },
	                _react2.default.createElement(
	                  'div',
	                  { className: _login2.default['text-input-box'] + ' ' + _login2.default.Mtop40 },
	                  _react2.default.createElement('input', { type: 'tel', className: _login2.default['input-text'] + ' ' + 'tel' + ' ' + 'phone', maxLength: '11', id: 'phone', placeholder: '手机号' }),
	                  _react2.default.createElement('div', { className: _login2.default.clear_num })
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
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'div',
	                { className: _login2.default.wrapper },
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
	      )
	    );
	  }
	});
	
	module.exports = Login;

/***/ }

};
//# sourceMappingURL=0.be7d72b5ff4dad6a60d9.hot-update.js.map