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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
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
	  _reactRouter.Route,
	  { path: '/', component: App },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: 'usercenter(/:openid)', component: UserCenter, onEnter: requireAuth },
	    _react2.default.createElement(_reactRouter.Route, { path: 'toOrder', component: ToOrder }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myOrders', component: MyOrders }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myOrderInfo', component: MyOrderInfo }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myCases', component: MyCases }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'myCaseDesc', component: MyCaseDesc })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login })
	);
	
	exports.default = routes;

/***/ }

};
//# sourceMappingURL=0.795d926c95584cddfe0c.hot-update.js.map