require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 411:
/*!*****************************!*\
  !*** ./app/toorder/main.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 334);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 338);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 339);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 343);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 366);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _projectsRender = __webpack_require__(/*! ./projectsRender.js */ 439);
	
	var _projectsRender2 = _interopRequireDefault(_projectsRender);
	
	var _chooseForOther = __webpack_require__(/*! ./chooseForOther.js */ 441);
	
	var _chooseForOther2 = _interopRequireDefault(_chooseForOther);
	
	var _cancelChooseForOther = __webpack_require__(/*! ./cancelChooseForOther.js */ 442);
	
	var _cancelChooseForOther2 = _interopRequireDefault(_cancelChooseForOther);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	const ToOrder = React.createClass({
	
	  render() {
	    return (<div>
	              <Projects projectMetas ={[{
	        id: '1',
	        servicename: "洗牙",
	        logo_url: ''
	      }, {
	        id: '2',
	        servicename: "拔牙",
	        logo_url: ''
	      }]}> </Projects>
	              </div>);
	  }
	});
	*/
	
	var ToOrder = function (_Component) {
	  (0, _inherits3.default)(ToOrder, _Component);
	
	  function ToOrder() {
	    (0, _classCallCheck3.default)(this, ToOrder);
	    return (0, _possibleConstructorReturn3.default)(this, (ToOrder.__proto__ || (0, _getPrototypeOf2.default)(ToOrder)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ToOrder, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log("aaaaa!!!!!");
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _projectsRender2.default,
	          { projectMetas: [{
	              id: '1',
	              servicename: "洗牙",
	              logo_url: __webpack_require__(/*! ../common/images/pro1.png */ 443)
	            }, {
	              id: '2',
	              servicename: "拔牙",
	              logo_url: __webpack_require__(/*! ../common/images/pro2.png */ 444)
	            }] },
	          ' '
	        )
	      );
	    }
	
	    // methods
	
	  }]);
	  return ToOrder;
	}(_react.Component);
	//module.exports = ToOrder;
	
	
	exports.default = ToOrder;

/***/ }

};
//# sourceMappingURL=0.bfb86c8b9027fa1a1a5b.hot-update.js.map