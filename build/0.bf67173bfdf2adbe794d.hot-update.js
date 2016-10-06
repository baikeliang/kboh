require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 209:
/*!********************************!*\
  !*** external "object.assign" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = require("object.assign");

/***/ },

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
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
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

/***/ 412:
/*!********************************!*\
  !*** ./app/usercenter/main.js ***!
  \********************************/
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
	
	var _dec, _class;
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _weuiMin = __webpack_require__(/*! ../common/css/weui.min.css */ 184);
	
	var _weuiMin2 = _interopRequireDefault(_weuiMin);
	
	var _style = __webpack_require__(/*! ../common/css/style.css */ 187);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _bluebird = __webpack_require__(/*! bluebird */ 375);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _reduxConnect = __webpack_require__(/*! redux-connect */ 293);
	
	var _auth = __webpack_require__(/*! ../redux/reducers/auth */ 413);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UserCenter = (_dec = (0, _reduxConnect.asyncConnect)([{
			promise: function promise(_ref) {
					var _ref$store = _ref.store;
					var dispatch = _ref$store.dispatch;
					var getState = _ref$store.getState;
					var params = _ref.params;
	
					var promises = [];
					console.log('HHHHHHHHHHHHHHHHHHHH');
					if (!(0, _auth.isLoaded)(getState())) {
							console.log('JJJJJJJJJJJJJJJJJJHH');
							console.log(params);
							promises.push(dispatch((0, _auth.load)(params)));
					}
	
					return _bluebird2.default.all(promises);
			}
	}]), _dec(_class = function (_Component) {
			(0, _inherits3.default)(UserCenter, _Component);
	
			function UserCenter() {
					(0, _classCallCheck3.default)(this, UserCenter);
					return (0, _possibleConstructorReturn3.default)(this, (UserCenter.__proto__ || (0, _getPrototypeOf2.default)(UserCenter)).apply(this, arguments));
			}
	
			(0, _createClass3.default)(UserCenter, [{
					key: 'render',
					value: function render() {
							return _react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
											'header',
											{ className: _style2.default.p_top + ' ' + _style2.default.huanzhebg },
											_react2.default.createElement(
													'dl',
													null,
													_react2.default.createElement(
															'dt',
															{ id: 'userImg' },
															_react2.default.createElement('img', { src: this.props.photo ? this.props.photo : __webpack_require__(/*! ../common/images/userPic.png */ 253), alt: '' })
													),
													_react2.default.createElement(
															'dd',
															{ id: 'userName' },
															this.props.username ? this.props.username : '完善个人信息'
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'set.html', className: _style2.default.anniu },
													_react2.default.createElement('img', { className: _style2.default.shezhi, src: __webpack_require__(/*! ../common/images/shezhi.png */ 214), alt: '' })
											)
									),
									_react2.default.createElement(
											'a',
											{ className: _style2.default.chuzhen, href: '/usercenter/toOrder', id: 'IwantOrdertab' },
											_react2.default.createElement(
													'div',
													{ className: _style2.default.chuzhenson },
													_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe1.png */ 215), alt: '' }),
													_react2.default.createElement(
															'div',
															{ className: _style2.default.rtop_r },
															_react2.default.createElement(
																	'h6',
																	{ className: _style2.default.spantitle },
																	'我要预约'
															),
															_react2.default.createElement('span', { className: _style2.default.spancon })
													),
													_react2.default.createElement('div', { className: _style2.default.clear })
											)
									),
									_react2.default.createElement(
											'div',
											{ className: _style2.default.block },
											_react2.default.createElement(
													'a',
													{ href: 'myOrder.html', className: _style2.default.a1 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe2.png */ 216), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'我的预约'
															)
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'myCase.html', className: _style2.default.a2 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe3.png */ 217), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'我的病历'
															)
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'myBillList.html', className: _style2.default.a1 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe4.png */ 218), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'我的账单'
															)
													)
											),
											_react2.default.createElement(
													'a',
													{ href: 'personmsg.html', className: _style2.default.a2 },
													_react2.default.createElement(
															'div',
															{ className: _style2.default.blockson },
															_react2.default.createElement('img', { src: __webpack_require__(/*! ../common/images/huanzhe5.png */ 219), alt: '' }),
															_react2.default.createElement(
																	'span',
																	null,
																	'个人信息'
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
					// methods
	
			}]);
			return UserCenter;
	}(_react.Component)) || _class);
	exports.default = UserCenter;

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
	        { className: 'chooseTitle' },
	        '选择预约项目'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'chooseProjbox' },
	        _react2.default.createElement(
	          'div',
	          { className: 'chooseProjboxdl', id: 'chooseProjboxdl' },
	          this.renderProjects()
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'opcitybox', style: {
	            display: "none"
	          } },
	        _react2.default.createElement('span', null)
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'opacityTipbox', style: {
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
	            { className: 'fuzhentip' },
	            _react2.default.createElement(
	              'span',
	              { className: 'reOrderCancel' },
	              '以后再说'
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'wantReorder' },
	              '我要复诊'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'fotIcon' },
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

/***/ 440:
/*!**************************************!*\
  !*** ./app/toorder/projectRender.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(/*! react */ 11);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Project = _react2.default.createClass({
	    displayName: "Project",
	
	    propTypes: {
	        id: _react2.default.PropTypes.string.isRequired,
	        servicename: _react2.default.PropTypes.string.isRequired,
	        logo_url: _react2.default.PropTypes.string.isRequired,
	        handleProClick: _react2.default.PropTypes.func.isRequired,
	        key: _react2.default.PropTypes.number.isRequired
	    },
	    handleProClick: function handleProClick(event) {
	
	        this.props.handleProClick({ id: this.props.id, servicename: this.props.servicename });
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { key: key },
	            " ",
	            _react2.default.createElement(
	                "dl",
	                { onClick: this.handleProClick },
	                " ",
	                _react2.default.createElement(
	                    "dt",
	                    null,
	                    " ",
	                    _react2.default.createElement("img", { src: this.props.logo_url, alt: "" }),
	                    " "
	                ),
	                "  ",
	                _react2.default.createElement(
	                    "dd",
	                    null,
	                    " ",
	                    this.props.servicename,
	                    " "
	                ),
	                "  "
	            ),
	            " ",
	            _react2.default.createElement(
	                "div",
	                { className: "clear" },
	                " "
	            ),
	            " "
	        );
	    }
	});
	module.exports = Project;

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
	                                                         { className: 'choosetop', style: { marginTop: 0, display: "none" }, id: 'choseBoxtop1' },
	                                                         _react2.default.createElement(
	                                                                            'div',
	                                                                            { className: 'weui_cells' },
	                                                                            _react2.default.createElement(
	                                                                                               'div',
	                                                                                               { className: 'weui_cell' },
	                                                                                               _react2.default.createElement(
	                                                                                                                  'div',
	                                                                                                                  { className: 'weui_cell_hd', style: { height: '25px' } },
	                                                                                                                  _react2.default.createElement('p', { id: 'name' }),
	                                                                                                                  _react2.default.createElement('span', { id: 'phone' })
	                                                                                               ),
	                                                                                               _react2.default.createElement(
	                                                                                                                  'a',
	                                                                                                                  { className: 'forOther', id: 'forOtherBtn', href: 'chooseOther.html' },
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
	                                                                     { 'class': 'choosetop', style: { marginTop: 0, display: "none" }, id: 'choseBoxtop2' },
	                                                                     _react2.default.createElement(
	                                                                                            'div',
	                                                                                            { 'class': 'weui_cells' },
	                                                                                            _react2.default.createElement(
	                                                                                                                   'div',
	                                                                                                                   { 'class': 'weui_cell' },
	                                                                                                                   _react2.default.createElement(
	                                                                                                                                          'div',
	                                                                                                                                          { 'class': 'weui_cell_hd', style: { height: '25px' } },
	                                                                                                                                          _react2.default.createElement('p', { id: 'name2' }),
	                                                                                                                                          _react2.default.createElement('span', { id: 'phone2' })
	                                                                                                                   ),
	                                                                                                                   _react2.default.createElement(
	                                                                                                                                          'a',
	                                                                                                                                          { 'class': 'forOther', id: 'forOtherBtn_cancel', href: 'javascript:;' },
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
//# sourceMappingURL=0.bf67173bfdf2adbe794d.hot-update.js.map