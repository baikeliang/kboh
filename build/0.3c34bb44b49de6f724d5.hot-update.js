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
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _projectsRender2.default,
	          { projectMetas: [{
	              id: '1',
	              servicename: "洗牙",
	              logo_url: ''
	            }, {
	              id: '2',
	              servicename: "拔牙",
	              logo_url: ''
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

/***/ },

/***/ 439:
/*!***************************************!*\
  !*** ./app/toorder/projectsRender.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _projectRender = __webpack_require__(/*! ./projectRender.js */ 440);
	
	var _projectRender2 = _interopRequireDefault(_projectRender);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var assign = __webpack_require__(/*! object.assign */ 209).getPolyfill();
	
	var Projects = _react2.default.createClass({
	  displayName: 'Projects',
	
	  propTypes: {
	    projectMetas: _react2.default.PropTypes.array.isRequired
	  },
	  handleProClick: function handleProClick(projectInfo) {},
	  renderProjects: function renderProjects() {
	    return this.props.projectMetas.map(function (projectMeta, i) {
	      assign(projectMeta, {
	        handleProClick: this.handleProClick
	      }, {
	        key: i
	      });
	
	      return _react2.default.createElement(_projectRender2.default, projectMeta);
	    }.bind(this));
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h3',
	        { className: _style2.default.chooseTitle },
	        '选择预约项目'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _style2.default.chooseProjbox },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.chooseProjboxdl, id: 'chooseProjboxdl' },
	          this.renderProjects()
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _style2.default.opcitybox, style: {
	            display: "none"
	          } },
	        _react2.default.createElement('span', null)
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _style2.default.opacityTipbox, style: {
	            display: "none"
	          } },
	        _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(
	            'label',
	            null,
	            '您是否要复诊？'
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: _style2.default.fuzhentip },
	            _react2.default.createElement(
	              'span',
	              { className: _style2.default.reOrderCancel },
	              '以后再说'
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: _style2.default.wantReorder },
	              '我要复诊'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _style2.default.fotIcon },
	        _react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/logo2.png */ 210), alt: '' }),
	        _react2.default.createElement(
	          'p',
	          null,
	          '轻快预约   从“齿”简单'
	        )
	      )
	    );
	  }
	});
	
	module.exports = Projects;

/***/ },

/***/ 441:
/*!***************************************!*\
  !*** ./app/toorder/chooseForOther.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _projectsRender = __webpack_require__(/*! ./projectsRender.js */ 439);
	
	var _projectsRender2 = _interopRequireDefault(_projectsRender);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChooseForOther = _react2.default.createClass({
	                   displayName: 'ChooseForOther',
	                   render: function render() {
	                                      return _react2.default.createElement(
	                                                         'div',
	                                                         { className: _style2.default.choosetop, style: { marginTop: 0, display: "none" }, id: 'choseBoxtop1' },
	                                                         _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: _style2.default.weui_cells },
	                                                                            _react2.default.createElement(
	                                                                                               'div',
	                                                                                               { className: _style2.default.weui_cell },
	                                                                                               _react2.default.createElement(
	                                                                                                                  'div',
	                                                                                                                  { className: _style2.default.weui_cell_hd, style: { height: '25px' } },
	                                                                                                                  _react2.default.createElement('p', { id: 'name' }),
	                                                                                                                  _react2.default.createElement('span', { id: 'phone' })
	                                                                                               ),
	                                                                                               _react2.default.createElement(
	                                                                                                                  'a',
	                                                                                                                  { className: _style2.default.forOther, id: 'forOtherBtn', href: 'chooseOther.html' },
	                                                                                                                  '为他人预约'
	                                                                                               )
	                                                                            )
	                                                         )
	                                      );
	                   }
	});
	
	module.exports = ChooseForOther;

/***/ },

/***/ 442:
/*!*********************************************!*\
  !*** ./app/toorder/cancelChooseForOther.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _projectsRender = __webpack_require__(/*! ./projectsRender.js */ 439);
	
	var _projectsRender2 = _interopRequireDefault(_projectsRender);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CancelChooseForOther = _react2.default.createClass({
	                       displayName: 'CancelChooseForOther',
	                       render: function render() {
	                                              return _react2.default.createElement(
	                                                                     'div',
	                                                                     { className: _style2.default.choosetop, style: { marginTop: 0, display: "none" }, id: 'choseBoxtop2' },
	                                                                     _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { className: _style2.default.weui_cells },
	                                                                                            _react2.default.createElement(
	                                                                                                                   'div',
	                                                                                                                   { className: _style2.default.weui_cell },
	                                                                                                                   _react2.default.createElement(
	                                                                                                                                          'div',
	                                                                                                                                          { className: _style2.default.weui_cell_hd, style: { height: '25px' } },
	                                                                                                                                          _react2.default.createElement('p', { id: 'name2' }),
	                                                                                                                                          _react2.default.createElement('span', { id: 'phone2' })
	                                                                                                                   ),
	                                                                                                                   _react2.default.createElement(
	                                                                                                                                          'a',
	                                                                                                                                          { className: _style2.default.forOther, id: 'forOtherBtn_cancel', href: 'javascript:;' },
	                                                                                                                                          '取消为他人预约'
	                                                                                                                   )
	                                                                                            )
	                                                                     )
	                                              );
	                       }
	});
	module.exports = CancelChooseForOther;

/***/ }

};
//# sourceMappingURL=0.3c34bb44b49de6f724d5.hot-update.js.map