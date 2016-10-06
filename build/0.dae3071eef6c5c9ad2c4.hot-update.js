require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 0:
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! webpack/hot/signal.js */1);
	module.exports = __webpack_require__(/*! /home/vagrant/Code/bohepro/app/server/server.js */247);


/***/ },

/***/ 235:
/*!**********************************!*\
  !*** ./webpack.client.config.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var path = __webpack_require__(/*! path */ 9);
	var webpack = __webpack_require__(/*! webpack */ 6)
	var HtmlwebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ 10);
	module.exports = {
	    entry: [
	        'babel-polyfill',
	        'webpack/hot/dev-server',
	        'webpack-dev-server/client?http://localhost:8080',
	        path.resolve(__dirname,'..','app/main.js'),
	    ],
	    output: {
	        path: path.resolve(__dirname,'..','build'),
	        filename: 'bundle.js',
	        publicPath: '/',
	    },
	    plugins: [new HtmlwebpackPlugin({
	        title: '选择预约项目',
	        template: path.resolve(__dirname,'..','app/index_template.html'),
	        inject: 'body' // Inject all scripts into the body 
	    }),new webpack.HotModuleReplacementPlugin()],
	    module: {
	        loaders: [{
	            'loader': 'babel-loader',
	            exclude: [
	                //在node_modules的文件不被babel理会
	                path.resolve(__dirname,'..','node_modules'),
	            ],
	            include: [
	                //指定app这个文件里面的采用babel
	                path.resolve(__dirname,'..','app'),
	            ],
	            test: /\.jsx?$/,
	            query: {
	                plugins: ['transform-runtime'],
	                presets: ['es2015', 'stage-0', 'react'],
	                "env": {
	                    "development": {
	                        "presets": ["react-hmre"]
	                    }
	                }
	            }
	        },{ test: /\.less$/, loader: 'style!css?modules&localIdentName=[name]__[local]!less' },
	        { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]__[local]' },
	        { test: /\.(woff)$/, loader: 'url?limit=100000' },
	        { test: /\.(png|jpg|jpeg|svg)$/, loader: 'url?limit=25000' },]
	    },
	    resolve: {
	        alias: {
	            app: path.join(__dirname,'..', "./app")
	        }
	    }
	
	};


/***/ },

/***/ 247:
/*!******************************!*\
  !*** ./app/server/server.js ***!
  \******************************/
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
	
	var _webpackClientConfig = __webpack_require__(/*! ../../webpack.client.config.js */ 235);
	
	var _webpackClientConfig2 = _interopRequireDefault(_webpackClientConfig);
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(/*! react-dom/server */ 12);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 171);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 172);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 173);
	
	var _configureStore = __webpack_require__(/*! ../configure-store.js */ 174);
	
	var _routes = __webpack_require__(/*! ../routes */ 180);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ 248);
	
	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
	
	var _interface = __webpack_require__(/*! ./interface/interface.js */ 249);
	
	var _interface2 = _interopRequireDefault(_interface);
	
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
	
	  _interface2.default.getUserInfoByOpenid({ openid: 'dsafeasft' });
	
	  res.send('sssss');
	});
	
	app.use(function (req, res, next) {
	  var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
	  var store = (0, _configureStore.configureStore)(memoryHistory);
	  var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
	
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

/***/ },

/***/ 248:
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },

/***/ 249:
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hhh = {
			getUserInfoByOpenid: function getUserInfoByOpenid(_ref) {
					var openid = _ref.openid;
	
	
					var u = new URLSearchParams();
					u.append('openid', openid);
	
					(0, _isomorphicFetch2.default)('http://192.168.10.10/userinfobyopenid/rest?' + u, {
							method: 'GET',
							mode: 'cors',
							cache: 'default'
					}).then(function (response) {
							if (response.status >= 400) {
									throw new Error("Bad response from server");
							}
							return response.json();
					}).then(function (user) {
							console.log(user);
					});
			}
	};
	
	exports.default = hhh;

/***/ },

/***/ 250:
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }

};
//# sourceMappingURL=0.dae3071eef6c5c9ad2c4.hot-update.js.map