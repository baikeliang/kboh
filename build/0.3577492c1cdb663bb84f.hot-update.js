require("source-map-support").install();
exports.id = 0;
exports.modules = {

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
	      console.log('project');
	      assign(projectMeta, {
	        handleProClick: this.handleProClick
	      }, {
	        key: i
	      });
	
	      return _react2.default.createElement(_projectRender2.default, projectMeta);
	    }.bind(this));
	  },
	  render: function render() {
	    console.log('TTTTTTTTTTTTTT');
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

/***/ }

};
//# sourceMappingURL=0.3577492c1cdb663bb84f.hot-update.js.map