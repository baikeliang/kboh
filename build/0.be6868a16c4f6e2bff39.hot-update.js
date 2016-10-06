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
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _urlSearchParamsPolyfill = __webpack_require__(/*! url-search-params-polyfill */ 252);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ajax = {
					getUserInfoByOpenid: function getUserInfoByOpenid(_ref) {
									var openid = _ref.openid;
	
	
									var u = new _urlSearchParamsPolyfill.URLSearchParams();
									u.append('openid', openid);
									return (0, _isomorphicFetch2.default)('http://192.168.10.10/userinfo/rest?openid=asdaaaa', {
													method: 'GET',
													mode: 'cors',
													cache: 'default'
									}).then(function (res) {
													console.log('MMMMMM' + res);
													var user = res.json();
													console.log('<>>>>');
													console.log(user);
													console.log('>>>>>>');
													if (user.valid == 1) {
	
																	return _bluebird2.default.resolve(user);
													} else {
																	var err = { info: 'auth' };
																	return _bluebird2.default.reject(err);
													}
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
//# sourceMappingURL=0.be6868a16c4f6e2bff39.hot-update.js.map