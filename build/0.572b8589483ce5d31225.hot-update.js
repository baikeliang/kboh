require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 408:
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
	
	var _configureStore = __webpack_require__(/*! ../configure-store.js */ 409);
	
	var _routes = __webpack_require__(/*! ../routes */ 410);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ 248);
	
	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
	
	var _ApiClient = __webpack_require__(/*! ../isomorphic-api/ApiClient */ 431);
	
	var _ApiClient2 = _interopRequireDefault(_ApiClient);
	
	var _urlSearchParamsPolyfill = __webpack_require__(/*! url-search-params-polyfill */ 252);
	
	var _interface = __webpack_require__(/*! ./interface/interface.js */ 421);
	
	var _interface2 = _interopRequireDefault(_interface);
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*eslint-disable no-console */
	global.__CLIENT__ = false;
	global.__SERVER__ = true;
	
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
	
	  console.log('enter /wxcallback/auth !!!!!');
	  /*
	  var code = req.query.code
	  var type = req.query.type
	  */
	  var code = 'haha';
	
	  if (code === undefined || code === null) {} else {
	    /// sync get openid
	    var openid = 'asdaaaaa';
	
	    var u = new _urlSearchParamsPolyfill.URLSearchParams();
	
	    console.log('KKKKKKKK' + u);
	
	    u.append('openid', openid);
	    res.redirect('/usercenter/rest?' + u);
	  }
	});
	
	app.use(function (req, res, next) {
	  var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
	  var client = new _ApiClient2.default(req);
	  var store = (0, _configureStore.configureStore)(memoryHistory, client);
	  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
	
	  if (req.url.indexOf('/wxcallback') == 0) {
	    next();
	    return;
	  } else if (req.url.indexOf('/usercenter/rest?') == 0) {
	    var openid = req.query.openid;
	    console.log('openid!!!!!!!   ' + openid);
	  }
	  (0, _reactRouter.match)({ history: history, routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      console.log('to match2');
	      (0, _reduxConnect.loadOnServer)((0, _extends3.default)({}, renderProps, { store: store, params: { openid: openid } })).then(function () {
	        console.log('AAAAAAAAA   ' + req.url);
	        // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps` 
	        var content = (0, _server.renderToString)(_react2.default.createElement(
	          _reactRedux.Provider,
	          { store: store, key: 'provider' },
	          _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, renderProps)
	        ));
	
	        res.send('<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(HTML, { content: content, store: store })));
	      }, function (err) {
	        if (err.info == 'auth') res.redirect('/login');
	      });
	    }
	  });
	});
	
	app.listen(3000, function () {
	  console.log('Server listening on http://localhost:3000, Ctrl+C to stop');
	});

/***/ },

/***/ 410:
/*!***********************!*\
  !*** ./app/routes.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 172);
	
	var _main = __webpack_require__(/*! ./toorder/main.js */ 411);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _main3 = __webpack_require__(/*! ./usercenter/main.js */ 412);
	
	var _main4 = _interopRequireDefault(_main3);
	
	var _myorders = __webpack_require__(/*! ./usercenter/myorder/myorders.js */ 414);
	
	var _myorders2 = _interopRequireDefault(_myorders);
	
	var _myorderinfo = __webpack_require__(/*! ./usercenter/myorder/myorderinfo.js */ 416);
	
	var _myorderinfo2 = _interopRequireDefault(_myorderinfo);
	
	var _mycases = __webpack_require__(/*! ./usercenter/mycase/mycases.js */ 417);
	
	var _mycases2 = _interopRequireDefault(_mycases);
	
	var _mycasedesc = __webpack_require__(/*! ./usercenter/mycase/mycasedesc.js */ 419);
	
	var _mycasedesc2 = _interopRequireDefault(_mycasedesc);
	
	var _login = __webpack_require__(/*! ./usercenter/login.js */ 420);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    null,
	    children || "ddddd"
	  );
	};
	
	function requireAuth(nextState, replaceState) {
	  if (__SERVER__ == false && localStorage && !localStorage.token) replaceState({ nextPathname: nextState.location.pathname }, '/login');
	  console.log("require.....auth");
	}
	
	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: App },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'usercenter(/rest?)', component: _main4.default, onEnter: requireAuth },
	    _react2.default.createElement(_reactRouter.Route, { path: 'toOrder', component: _main2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myOrders', component: _myorders2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myOrderInfo', component: _myorderinfo2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myCases', component: _mycases2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myCaseDesc', component: _mycasedesc2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _login2.default })
	);
	
	exports.default = routes;

/***/ }

};
//# sourceMappingURL=0.572b8589483ce5d31225.hot-update.js.map