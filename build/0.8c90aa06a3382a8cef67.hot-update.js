require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 422:
/*!**************************************************!*\
  !*** ./app/redux/middleware/clientMiddleware.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 255);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 423);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ 430);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	exports.default = clientMiddleware;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function clientMiddleware(client) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	
	    return function (next) {
	      return function (action) {
	        console.log('JJJJJJJJJJJJGG');
	        var promise = action.promise;
	        var types = action.types;
	        var rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'types']); // eslint-disable-line no-redeclare
	
	        if (!promise) {
	          return next(action);
	        }
	        console.log('JJJJJJJJJJJJTT');
	
	        var _types = (0, _slicedToArray3.default)(types, 3);
	
	        var REQUEST = _types[0];
	        var SUCCESS = _types[1];
	        var FAILURE = _types[2];
	
	        next((0, _extends3.default)({}, rest, { type: REQUEST }));
	
	        var actionPromise = promise(client);
	        console.log('JJJJJJJJJJJJTTYY');
	        actionPromise.then(function (result) {
	          return next((0, _extends3.default)({}, rest, { result: result, type: SUCCESS }));
	        }, function (error) {
	          return next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
	        }).catch(function (error) {
	          console.error('MIDDLEWARE ERROR:', error);
	          next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
	        });
	
	        return actionPromise;
	      };
	    };
	  };
	}

/***/ }

};
//# sourceMappingURL=0.8c90aa06a3382a8cef67.hot-update.js.map