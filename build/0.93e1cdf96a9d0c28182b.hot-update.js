require("source-map-support").install();
exports.id = 0;
exports.modules = {

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
	            var done = _ref.done;
	            var error = _ref.error;
	
	            ///////////////////////////////
	            var u = new _urlSearchParamsPolyfill.URLSearchParams();
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
	            return (0, _isomorphicFetch2.default)(path + u, req).then(done, error);
	        };
	    });
	}
	
	// methods
	;
	
	exports.default = ApiClient;

/***/ }

};
//# sourceMappingURL=0.93e1cdf96a9d0c28182b.hot-update.js.map