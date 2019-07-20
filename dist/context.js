"use strict";

exports.__esModule = true;
exports.Provider = exports.Consumer = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _React$createContext = _react.default.createContext([]),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;

exports.Provider = Provider;
exports.Consumer = Consumer;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Consumer, "Consumer", "/home/sam/git/react-feature-toggles/src/context.js");
  reactHotLoader.register(Provider, "Provider", "/home/sam/git/react-feature-toggles/src/context.js");
  leaveModule(module);
})();

;