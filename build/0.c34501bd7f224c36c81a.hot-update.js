require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 223:
/*!******************************************!*\
  !*** ./app/usercenter/mycase/mycases.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mycase = __webpack_require__(/*! ./mycase.js */ 225);
	
	var _mycase2 = _interopRequireDefault(_mycase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MyCases = _react2.default.createClass({
					displayName: 'MyCases',
	
					propTypes: {
									orderMetas: _react2.default.PropTypes.array.isRequired
					},
					handleProClick: function handleProClick(caseInfo) {},
					renderProjects: function renderProjects() {
									return this.props.caseMetas.map(function (caseMeta, i) {
													assign(caseMeta, { handleProClick: this.handleProClick }, { key: i });
	
													return _react2.default.createElement(_mycase2.default, caseMeta);
									}.bind(this));
					},
					render: function render() {
									return renderProjects();
					}
	});
	
	module.export = MyCases;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 224)(module)))

/***/ }

};
//# sourceMappingURL=0.c34501bd7f224c36c81a.hot-update.js.map