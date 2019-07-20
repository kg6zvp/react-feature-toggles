"use strict";

exports.__esModule = true;
exports.default = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var curry = function curry(f, arr) {
  if (arr === void 0) {
    arr = [];
  }

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (a) {
      return a.length === f.length ? f.apply(void 0, a) : curry(f, a);
    }([].concat(arr, args));
  };
};

var _default = curry;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(curry, "curry", "/home/sam/git/react-feature-toggles/src/curry.js");
  reactHotLoader.register(_default, "default", "/home/sam/git/react-feature-toggles/src/curry.js");
  leaveModule(module);
})();

;
module.exports = exports.default;