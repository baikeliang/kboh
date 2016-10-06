require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ 243:
/*!***************************!*\
  !*** ./app/browermock.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mockBrowser = __webpack_require__(/*! mock-browser */ 242);
	
	(function () {
	
	  var MockBrowser = _mockBrowser.mocks.MockBrowser;
	
	  global.window = MockBrowser.createWindow();
	
	  global.navigator = global.window.navigator;
	
	  global.document = MockBrowser.createDocument();
	
	  console.log(".............");
	})();

/***/ }

};
//# sourceMappingURL=0.cdcb28622701cea3737d.hot-update.js.map