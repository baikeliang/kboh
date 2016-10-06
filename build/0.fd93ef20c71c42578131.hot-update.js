require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 234:
/*!*********************************!*\
  !*** ./app/usercenter/login.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIdSwiper = __webpack_require__(/*! react-id-swiper */ 236);
	
	var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _login = __webpack_require__(/*! ../common/css/login.css */ 237);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Login = _react2.default.createClass({
	     displayName: 'Login',
	     render: function render() {
	          var params = {
	               pagination: '.swiper-pagination',
	               paginationClickable: true,
	               nextButton: '.swiper-button-next',
	               prevButton: '.swiper-button-prev',
	               spaceBetween: 30
	          };
	          return _react2.default.createElement(
	               _reactIdSwiper2.default,
	               {
	                    pagination: params.pagination,
	                    paginationClickable: params.paginationClickable,
	                    nextButton: params.nextButton,
	                    prevButton: params.prevButton,
	                    spaceBetween: params.spaceBetween },
	               _react2.default.createElement(
	                    'div',
	                    null,
	                    'Slide 1'
	               ),
	               _react2.default.createElement(
	                    'div',
	                    null,
	                    'Slide 2'
	               ),
	               _react2.default.createElement(
	                    'div',
	                    null,
	                    'Slide 3'
	               ),
	               _react2.default.createElement(
	                    'div',
	                    null,
	                    'Slide 4'
	               ),
	               _react2.default.createElement(
	                    'div',
	                    null,
	                    'Slide 5'
	               )
	          );
	     }
	});
	module.exports = Login;

/***/ }

};
//# sourceMappingURL=0.fd93ef20c71c42578131.hot-update.js.map