require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 333:
/*!********************************!*\
  !*** ./app/usercenter/main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _reduxConnect = __webpack_require__(/*! redux-connect */ 293);
	
	var _auth = __webpack_require__(/*! ../redux/reducers/auth */ 376);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 376:
/*!************************************!*\
  !*** ./app/redux/reducers/auth.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	exports.isLoaded = isLoaded;
	exports.load = load;
	exports.login = login;
	exports.logout = logout;
	
	var _immutable = __webpack_require__(/*! immutable */ 377);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LOAD = 'bohe/auth/LOAD';
	var LOAD_SUCCESS = 'bohe/auth/LOAD_SUCCESS';
	var LOAD_FAIL = 'bohe/auth/LOAD_FAIL';
	var LOGIN = 'bohe/auth/LOGIN';
	var LOGIN_SUCCESS = 'bohe/auth/LOGIN_SUCCESS';
	var LOGIN_FAIL = 'bohe/auth/LOGIN_FAIL';
	var LOGOUT = 'bohe/auth/LOGOUT';
	var LOGOUT_SUCCESS = 'bohe/auth/LOGOUT_SUCCESS';
	var LOGOUT_FAIL = 'bohe/auth/LOGOUT_FAIL';
	
	var initialState = _immutable2.default.Map({
	    loaded: false
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    switch (action.type) {
	        case LOAD:
	            return state.set('loaded', true);
	        case LOAD_SUCCESS:
	            return state.merge({ loading: false, loaded: true, user: action.result });
	        case LOAD_FAIL:
	            return state.merge({ loading: false, loaded: false, user: action.error });
	        case LOGIN:
	            return state.merge({ loggingIn: true });
	        case LOGIN_SUCCESS:
	            return state.merge({ loggingIn: false, user: action.result });
	        case LOGIN_FAIL:
	            return state.merge({ loggingIn: false, user: null, loginError: action.error });
	
	        case LOGOUT:
	            return state.merge({ loggingOut: true });
	        case LOGOUT_SUCCESS:
	            return state.merge({
	                loggingOut: false,
	                user: null
	            });
	        case LOGOUT_FAIL:
	            return state.merge({
	                loggingOut: false,
	                logoutError: action.error
	            });
	        default:
	            return state;
	    }
	}
	
	function isLoaded(globalState) {
	    return globalState.auth && globalState.auth.loaded;
	}
	
	function load(_ref) {
	    var openid = _ref.openid;
	
	    var params = {};
	    if (__SERVER__ && openid) {
	
	        params.openid = openid;
	    } else if (localStorage && localStorage.jwtToken) {
	
	        params.jwtToken = localStorage.jwtToken;
	    }
	    return {
	        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
	        promise: function promise(client) {
	            return client.GET('http://192.168.10.10/userinfo/rest', { params: params });
	        }
	    };
	}
	
	function login(name) {
	    return {
	        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
	        promise: function promise(client) {
	            return client.POST('/login', {
	                data: {
	                    name: name
	                }
	            });
	        }
	    };
	}
	
	function logout() {
	    return {
	        types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
	        promise: function promise(client) {
	            return client.get('/logout');
	        }
	    };
	}

/***/ },

/***/ 377:
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = require("immutable");

/***/ }

};
//# sourceMappingURL=0.a908cbe95bab31b7335f.hot-update.js.map