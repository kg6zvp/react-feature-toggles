"use strict";

exports.__esModule = true;
exports.configureFeature = void 0;

var _react = _interopRequireDefault(require("react"));

var _curry = _interopRequireDefault(require("./curry"));

var _feature = require("./feature");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/configure-feature.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var configureFeature = (0, _curry.default)(function (inactiveComponent, name, activeComponent) {
  return function () {
    return _react.default.createElement(_feature.Feature, {
      name: name,
      inactiveComponent: inactiveComponent,
      activeComponent: activeComponent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    });
  };
});
exports.configureFeature = configureFeature;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(configureFeature, "configureFeature", "/home/sam/git/react-feature-toggles/src/configure-feature.js");
  leaveModule(module);
})();

;