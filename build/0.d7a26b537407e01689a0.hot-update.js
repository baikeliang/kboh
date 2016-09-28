require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 174:
/*!********************************!*\
  !*** ./app/configure-store.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DevTools = undefined;
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
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	
	  var store = (0, _redux.createStore)(reducer, initialState, _redux.compose.apply(undefined, [(0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history), _reduxThunk2.default)].concat(_toConsumableArray(devTools))));
	
	  return store;
	}

/***/ }

};
//# sourceMappingURL=0.d7a26b537407e01689a0.hot-update.js.map