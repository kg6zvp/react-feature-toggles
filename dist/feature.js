"use strict";

exports.__esModule = true;
exports.Feature = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/feature.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var noop = function noop() {
  return null;
};

var Feature = function Feature(_ref) {
  var activeComponent = _ref.activeComponent,
      children = _ref.children,
      _ref$inactiveComponen = _ref.inactiveComponent,
      inactiveComponent = _ref$inactiveComponen === void 0 ? noop : _ref$inactiveComponen,
      name = _ref.name;
  return _react.default.createElement(_context.Consumer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, function (features) {
    console.log('features', JSON.stringify(features, null, 2));
    console.log('typeof features', typeof features);
    var Component = features.includes(name) ? activeComponent : inactiveComponent;
    return activeComponent ? _react.default.createElement(Component, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }) : children({
      features: features
    });
  });
};

exports.Feature = Feature;
Feature.propTypes = {
  activeComponent: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  inactiveComponent: _propTypes.default.func,
  name: _propTypes.default.string
};
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(noop, "noop", "/home/sam/git/react-feature-toggles/src/feature.js");
  reactHotLoader.register(Feature, "Feature", "/home/sam/git/react-feature-toggles/src/feature.js");
  leaveModule(module);
})();

;