require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 220:
/*!********************************************!*\
  !*** ./app/usercenter/myorder/myorders.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _myorder = __webpack_require__(/*! ./myorder.js */ 221);
	
	var _myorder2 = _interopRequireDefault(_myorder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MyOrders = _react2.default.createClass({
					displayName: 'MyOrders',
	
					propTypes: {
									orderMetas: _react2.default.PropTypes.array.isRequired
					},
					handleProClick: function handleProClick(orderInfo) {},
					renderProjects: function renderProjects() {
									return this.props.orderMetas.map(function (orderMeta, i) {
													assign(orderMeta, { handleProClick: this.handleProClick }, { key: i });
	
													return _react2.default.createElement(_myorder2.default, orderMeta);
									}.bind(this));
					},
					render: function render() {
									return this.renderProjects();
					}
	});
	module.exports = MyOrders;

/***/ }

};
//# sourceMappingURL=0.3cca09b721a85e514763.hot-update.js.map