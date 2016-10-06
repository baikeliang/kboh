require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 421:
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
	
	var _urlSearchParamsPolyfill = __webpack_require__(/*! url-search-params-polyfill */ 252);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ajax = {
			getUserInfoByOpenid: function getUserInfoByOpenid(_ref) {
					var openid = _ref.openid;
	
	
					var u = new _urlSearchParamsPolyfill.URLSearchParams();
					u.append('openid', openid);
					return (0, _isomorphicFetch2.default)('http://192.168.10.10/userinfo/rest?' + u, {
							method: 'GET',
							mode: 'cors',
							cache: 'default'
					}).then(function (response) {
							console.log('hhhhhhh>>>>>>>>>>>>>>>>');
							console.log(response);
							console.log('hhhhhhh>>>>>>>>>>>>>>>>');
							if (response.status >= 400) {
									throw new Error("Bad response from server");
							}
							console.log('>>>>>>>>>>>>>>>>');
							return response.json();
					}, function (error) {
							console.log(error);
					}).then(function (json) {
							console.log(json);
					});
			}
	};
	
	exports.default = ajax;

/***/ }

};
//# sourceMappingURL=0.de06742e37917a52eb39.hot-update.js.map