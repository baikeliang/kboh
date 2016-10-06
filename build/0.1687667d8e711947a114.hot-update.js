require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 249:
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
	
	__webpack_require__(/*! url-search-params-polyfill */ 252);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ajax = {
			getUserInfoByOpenid: function getUserInfoByOpenid(_ref) {
					var openid = _ref.openid;
	
	
					var u = new URLSearchParams();
					u.append('openid', openid);
	
					(0, _isomorphicFetch2.default)('http://192.168.10.10/userinfobyopenid/rest?' + u, {
							method: 'GET',
							mode: 'cors',
							cache: 'default'
					}).then(function (response) {
							if (response.status >= 400) {
									throw new Error("Bad response from server");
							}
							return response.json();
					}).then(function (user) {
							console.log(user);
					});
			}
	};
	
	exports.default = ajax;

/***/ },

/***/ 252:
/*!*********************************************!*\
  !*** external "url-search-params-polyfill" ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = require("url-search-params-polyfill");

/***/ }

};
//# sourceMappingURL=0.1687667d8e711947a114.hot-update.js.map