"use strict";

exports.__esModule = true;
exports.FeatureToggles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/feature-toggles.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var FeatureToggles = function FeatureToggles(_ref) {
  var _ref$features = _ref.features,
      features = _ref$features === void 0 ? [] : _ref$features,
      children = _ref.children;
  return _react.default.createElement(_context.Provider, {
    value: features,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, children);
};

exports.FeatureToggles = FeatureToggles;
FeatureToggles.propTypes = {
  features: _propTypes.default.array
};
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FeatureToggles, "FeatureToggles", "/home/sam/git/react-feature-toggles/src/feature-toggles.js");
  leaveModule(module);
})();

;