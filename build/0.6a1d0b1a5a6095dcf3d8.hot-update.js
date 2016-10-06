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
	
	var _mockBrowser = __webpack_require__(/*! mock-browser */ 242);
	
	var _mockBrowser2 = _interopRequireDefault(_mockBrowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//var MockBrowser = mocks.MockBrowser
	
	//var window = MockBrowser.createWindow()
	
	/*eslint-disable no-console */
	console.log(_mockBrowser2.default);
	
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
	
	/*
	import routes from './routes'



	const HTML = ({ content, store }) => (
	  <html>
	    <body>
	      <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
	      <div id="devtools"/>
	      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
	      <script src="/bundle.js"/>
	    </body>
	  </html>
	)

	app.use(function (req, res) {
	  const memoryHistory = createMemoryHistory(req.url)
	  const store = configureStore(memoryHistory)
	  const history = syncHistoryWithStore(memoryHistory, store)

	  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
	    if (error) {
	      res.status(500).send(error.message)
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
	    } else if (renderProps) {
	      const content = renderToString(
	        <Provider store={store}>
	          <RouterContext {...renderProps}/>
	        </Provider>
	      )

	      res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
	    }
	  })
	})

	app.listen(3000, function () {
	  console.log('Server listening on http://localhost:3000, Ctrl+C to stop')
	})
	*/

/***/ }

};
//# sourceMappingURL=0.6a1d0b1a5a6095dcf3d8.hot-update.js.map