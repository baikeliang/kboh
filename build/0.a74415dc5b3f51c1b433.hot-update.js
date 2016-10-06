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
	
	app.get('/wxcallback/auth', function (req, res) {
	
	  res.send('sssss');
	});
	
	app.use(function (req, res, next) {
	  var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
	  var store = (0, _configureStore.configureStore)(memoryHistory);
	  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
	
	  console.log("LKKKKKKKKKKK");
	  console.log(req.url);
	
	  if (req.url.indexOf('/wxcallback') == 0) {
	    next();
	    return;
	  }
	
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

/***/ }

};
//# sourceMappingURL=0.a74415dc5b3f51c1b433.hot-update.js.map