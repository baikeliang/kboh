require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 318:
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	import { Router, DefaultRoute, Route, NotFoundRoute, Redirect } from 'react-router';
	
	import ToOrder from 'app/toorder/main.js'
	import UserCenter from 'app/usercenter/main.js'
	import MyOrders from 'app/usercenter/myorder/myorders.js'
	import MyOrderInfo from 'app/usercenter/myorder/myorderinfo.js'
	import MyCases from 'app/usercenter/mycase/mycases.js'
	import MyCaseDesc from 'app/usercenter/mycase/mycasedesc.js'
	import Login from 'app/usercenter/login.js'
	*/
	
	var App = function App(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    null,
	    children || "ddddd"
	  );
	};
	
	function requireAuth(nextState, replaceState) {
	  if (localStorage && !localStorage.token) replaceState({ nextPathname: nextState.location.pathname }, '/login');
	  console.log("require.....auth");
	}
	
	var routes = _react2.default.createElement(
	  Route,
	  { path: '/', component: App },
	  _react2.default.createElement(
	    Route,
	    { path: 'usercenter(/:openid)', component: UserCenter, onEnter: requireAuth },
	    _react2.default.createElement(Route, { path: 'toOrder', component: ToOrder }),
	    _react2.default.createElement(Route, { path: 'myOrders', component: MyOrders }),
	    _react2.default.createElement(Route, { path: 'myOrderInfo', component: MyOrderInfo }),
	    _react2.default.createElement(Route, { path: 'myCases', component: MyCases }),
	    _react2.default.createElement(Route, { path: 'myCaseDesc', component: MyCaseDesc })
	  ),
	  _react2.default.createElement(Route, { path: 'login', component: Login })
	);
	
	exports.default = routes;

/***/ }

};
//# sourceMappingURL=0.2ff5c3403eb07fbbae39.hot-update.js.map