require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 180:
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
	
	var _main = __webpack_require__(/*! ./toorder/main.js */ 181);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _main3 = __webpack_require__(/*! ./usercenter/main.js */ 213);
	
	var _main4 = _interopRequireDefault(_main3);
	
	var _myorders = __webpack_require__(/*! ./usercenter/myorder/myorders.js */ 220);
	
	var _myorders2 = _interopRequireDefault(_myorders);
	
	var _myorderinfo = __webpack_require__(/*! ./usercenter/myorder/myorderinfo.js */ 222);
	
	var _myorderinfo2 = _interopRequireDefault(_myorderinfo);
	
	var _mycases = __webpack_require__(/*! ./usercenter/mycase/mycases.js */ 223);
	
	var _mycases2 = _interopRequireDefault(_mycases);
	
	var _mycasedesc = __webpack_require__(/*! ./usercenter/mycase/mycasedesc.js */ 226);
	
	var _mycasedesc2 = _interopRequireDefault(_mycasedesc);
	
	var _login = __webpack_require__(/*! ./usercenter/login.js */ 234);
	
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
	  if (!localStorage.token) replaceState({ nextPathname: nextState.location.pathname }, '/login');
	}
	
	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: App },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'usercenter', component: _main4.default, onEnter: requireAuth },
	    _react2.default.createElement(_reactRouter.Route, { path: 'toOrder', component: _main2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myOrders', component: _myorders2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myOrderInfo', component: _myorderinfo2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myCaseDesc', component: _mycasedesc2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _login2.default })
	);
	
	exports.default = routes;

/***/ }

};
//# sourceMappingURL=0.97acf5e938506d001707.hot-update.js.map