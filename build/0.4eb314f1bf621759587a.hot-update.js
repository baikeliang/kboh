require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 0:
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! webpack/hot/signal.js */1);
	module.exports = __webpack_require__(/*! /home/vagrant/Code/bohepro/app/server/server.js */403);


/***/ },

/***/ 403:
/*!******************************!*\
  !*** ./app/server/server.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 255);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _express = __webpack_require__(/*! express */ 4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ 5);
	
	var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);
	
	var _webpack = __webpack_require__(/*! webpack */ 6);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ 7);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackClientConfig = __webpack_require__(/*! ../../webpack.client.config.js */ 235);
	
	var _webpackClientConfig2 = _interopRequireDefault(_webpackClientConfig);
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(/*! react-dom/server */ 12);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 171);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 172);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 173);
	
	var _reduxConnect = __webpack_require__(/*! redux-connect */ 293);
	
	var _configureStore = __webpack_require__(/*! ../configure-store.js */ 404);
	
	var _routes = __webpack_require__(/*! ../routes */ 405);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ 248);
	
	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
	
	var _urlSearchParamsPolyfill = __webpack_require__(/*! url-search-params-polyfill */ 252);
	
	var _interface = __webpack_require__(/*! ./interface/interface.js */ 407);
	
	var _interface2 = _interopRequireDefault(_interface);
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	global.__CLIENT__ = false; /*eslint-disable no-console */
	
	global.__SERVER__ = true;
	
	console.log('WWWWWWWWWWWWWWWWWW');
	
	var rrr = new _bluebird2.default(function (resolve, reject) {
	  if (1) {
	    resolve('!!!!!!!!!!!!!!!!!!!!!!1');
	  } else {
	    reject('!!!!!!!!!!!!!!!!!!!!!!2');
	  }
	});
	
	rrr.then(function (val) {
	  return 3;
	}, function (err) {
	  return 4;
	}).then(function (val) {
	  console.log(val);
	}, function (err) {
	  console.log(err);
	});
	
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
	
	app.get('/wxcallback/auth', function (req, res) {
	
	  var code = req.query.code;
	  var type = req.query.type;
	  if (code === undefined || code === null) {} else {
	    /// sync get openid
	    var openid = 'asdaaaaa';
	
	    var u = new _urlSearchParamsPolyfill.URLSearchParams();
	    u.append('openid', openid);
	    res.redirect('/usercenter/rest?' + u);
	  }
	});
	
	app.use(function (req, res, next) {
	  var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
	  var store = (0, _configureStore.configureStore)(memoryHistory);
	  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
	
	  if (req.url.indexOf('/wxcallback') == 0) {
	    next();
	    return;
	  } else if (req.url.indexOf('/usercenter/rest?')) {
	    var openid = req.params.openid;
	    console.log('openid!!!!!!!   ' + openid);
	  }
	
	  (0, _reactRouter.match)({ history: history, routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	
	      (0, _reduxConnect.loadOnServer)((0, _extends3.default)({}, renderProps, { store: store, params: { openid: openid } })).then(function () {
	
	        // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps` 
	        var content = (0, _server.renderToString)(_react2.default.createElement(
	          _reactRedux.Provider,
	          { store: store, key: 'provider' },
	          _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, renderProps)
	        ));
	
	        res.send('<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(HTML, { content: content, store: store })));
	      }, function () {
	        res.redirect('/login');
	      });
	    }
	  });
	});
	
	app.listen(3000, function () {
	  console.log('Server listening on http://localhost:3000, Ctrl+C to stop');
	});

/***/ },

/***/ 404:
/*!********************************!*\
  !*** ./app/configure-store.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DevTools = undefined;
	
	var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 295);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	exports.configureStore = configureStore;
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 175);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _redux = __webpack_require__(/*! redux */ 176);
	
	var _reduxDevtools = __webpack_require__(/*! redux-devtools */ 177);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(/*! redux-devtools-log-monitor */ 178);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(/*! redux-devtools-dock-monitor */ 179);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DevTools = exports.DevTools = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  { toggleVisibilityKey: 'ctrl-h', changePositionKey: 'ctrl-q' },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { theme: 'tomorrow', preserveScrollTop: false })
	));
	
	function configureStore(history, initialState) {
	  var reducer = (0, _redux.combineReducers)({
	    routing: _reactRouterRedux.routerReducer
	  });
	
	  var devTools = [];
	  if (typeof document !== 'undefined') {
	    devTools = [DevTools.instrument()];
	  }
	
	  var store = (0, _redux.createStore)(reducer, initialState, _redux.compose.apply(undefined, [(0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history), _reduxThunk2.default)].concat((0, _toConsumableArray3.default)(devTools))));
	
	  return store;
	}

/***/ },

/***/ 405:
/*!***********************!*\
  !*** ./app/routes.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 172);
	
	var _main = __webpack_require__(/*! ./toorder/main.js */ 406);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 406:
/*!*****************************!*\
  !*** ./app/toorder/main.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	const ToOrder = React.createClass({
	
	  render() {
	    return (<div>
	              <Projects projectMetas ={[{
	        id: '1',
	        servicename: "洗牙",
	        logo_url: ''
	      }, {
	        id: '2',
	        servicename: "拔牙",
	        logo_url: ''
	      }]}> </Projects>
	              </div>);
	  }
	});
	*/
	
	//import Projects from './projectsRender.js'
	//import ChooseForOther from './chooseForOther.js'
	//import CancelChooseForOther from './cancelChooseForOther.js'
	
	var ToOrder = function (_Component) {
	  (0, _inherits3.default)(ToOrder, _Component);
	
	  function ToOrder() {
	    (0, _classCallCheck3.default)(this, ToOrder);
	    return (0, _possibleConstructorReturn3.default)(this, (ToOrder.__proto__ || (0, _getPrototypeOf2.default)(ToOrder)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ToOrder, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null);
	    }
	
	    // methods
	
	  }]);
	  return ToOrder;
	}(_react.Component);
	//module.exports = ToOrder;
	
	
	exports.default = ToOrder;

/***/ },

/***/ 407:
/*!*******************************************!*\
  !*** ./app/server/interface/interface.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ 250);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _urlSearchParamsPolyfill = __webpack_require__(/*! url-search-params-polyfill */ 252);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ajax = {
			getUserInfoByOpenid: function getUserInfoByOpenid(_ref) {
					var openid = _ref.openid;
	
	
					var u = new _urlSearchParamsPolyfill.URLSearchParams();
					u.append('openid', openid);
	
					return (0, _isomorphicFetch2.default)('http://192.168.10.10/userinfobyopenid/rest?' + u, {
							method: 'GET',
							mode: 'cors',
							cache: 'default'
					}).then(function (response) {
							if (response.status >= 400) {
									throw new Error("Bad response from server");
							}
							return response.json();
					});
			}
	};
	
	exports.default = ajax;

/***/ }

};
//# sourceMappingURL=0.4eb314f1bf621759587a.hot-update.js.map