require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 413:
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
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
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
	    console.log('LLLLLLLLL' + globalState);
	    return globalState.auth && globalState.auth.loaded;
	}
	
	function load(_ref) {
	    var openid = _ref.openid;
	
	    var params = {};
	    console.log('YYYYYY ' + openid);
	
	    if (__SERVER__ && openid) {
	
	        params.openid = openid;
	    } else if (localStorage && localStorage.jwtToken) {
	
	        params.jwtToken = localStorage.jwtToken;
	    }
	    return {
	        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
	        promise: function promise(client) {
	            return client.GET('http://192.168.10.10/userinfo/rest?', { params: params }, {
	                format: function format(response) {
	                    if (response.status >= 400) {
	                        throw new Error("Bad response from server");
	                    }
	                    console.log('>>>>>>>>>>>>>>>>');
	                    return response.json();
	                },
	                done: function done(user) {
	                    console.log('MMMMMM' + user);
	                    console.log('<>>>>');
	                    console.log(user);
	                    console.log('>>>>>>');
	                    if (user.valid == 1) {
	
	                        return _bluebird2.default.resolve(user);
	                    } else {
	                        var err = { info: 'auth' };
	                        return _bluebird2.default.reject(err);
	                    }
	                },
	                error: function error(err) {
	                    console.log(err);
	                    console.log('GGGGGGGGGGGGGG');
	                    return _bluebird2.default.reject({ info: 'wire' });
	                }
	            });
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

/***/ 431:
/*!*****************************************!*\
  !*** ./app/isomorphic-api/ApiClient.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 432);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 434);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 427);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 338);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ 250);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _urlSearchParamsPolyfill = __webpack_require__(/*! url-search-params-polyfill */ 252);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var methods = ['GET', 'POST'];
	
	var ApiClient = function ApiClient(args) {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, ApiClient);
	
	    // code
	    methods.forEach(function (method) {
	        return _this[method] = function (path) {
	            var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	            var params = _ref2.params;
	            var data = _ref2.data;
	            var _ref = arguments[2];
	            var format = _ref.format;
	            var done = _ref.done;
	            var error = _ref.error;
	
	            ///////////////////////////////
	            var u = new _urlSearchParamsPolyfill.URLSearchParams();
	            console.log(method);
	            var req = {
	                method: method,
	                mode: 'cors',
	                cache: 'default'
	            };
	            if (method == 'GET' && params) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(params)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var key = _step.value;
	
	                        u.append(key, params[key]);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            } else if (method == 'POST' && data) {
	
	                req.body = (0, _stringify2.default)(data);
	                req.headers = {
	                    'Content-Type': 'application/json'
	                };
	            }
	            console.log('8888888888' + path + u);
	            return (0, _isomorphicFetch2.default)(path + u, req).then(format).then(done, error);
	        };
	    });
	}
	
	// methods
	;
	
	exports.default = ApiClient;

/***/ }

};
//# sourceMappingURL=0.21094c2a83e6db47ff79.hot-update.js.map