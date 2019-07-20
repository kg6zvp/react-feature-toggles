"use strict";

exports.__esModule = true;
exports.withFeatureToggles = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _featureToggles = require("./feature-toggles");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/with-feature-toggles.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var withFeatureToggles = function withFeatureToggles(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      features = _ref.features;

  return function (Component) {
    return function (props) {
      return _react.default.createElement(_featureToggles.FeatureToggles, {
        features: features,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }, _react.default.createElement(Component, _extends({}, props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      })));
    };
  };
};

exports.withFeatureToggles = withFeatureToggles;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withFeatureToggles, "withFeatureToggles", "/home/sam/git/react-feature-toggles/src/with-feature-toggles.js");
  leaveModule(module);
})();

;