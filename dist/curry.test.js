"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _riteway = require("riteway");

var _curry = _interopRequireDefault(require("./curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addTwo = function addTwo(a, b) {
  return a + b;
};

var addThree = function addThree(a, b, c) {
  return a + b + c;
};

(0, _riteway.describe)('curry()',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(assert) {
    var given, curriedAddTwo, _given, curriedAddThree;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            given = 'a function with 2 arguments';
            curriedAddTwo = (0, _curry.default)(addTwo);
            assert({
              given: given,
              should: 'return a new function',
              actual: typeof curriedAddTwo,
              expected: 'function'
            });
            assert({
              given: given,
              should: 'return a function that can be used in curried format',
              actual: curriedAddTwo(3)(5),
              expected: 8
            });
            assert({
              given: given,
              should: 'return a function that can be used in uncurried format',
              actual: curriedAddTwo(3, 5),
              expected: 8
            });
            _given = 'a function with 3 arguments';
            curriedAddThree = (0, _curry.default)(addThree);
            assert({
              given: _given,
              should: 'return a new function',
              actual: typeof curriedAddThree,
              expected: 'function'
            });
            assert({
              given: _given,
              should: 'return a function that can be used in curried format',
              actual: curriedAddThree(3)(5)(2),
              expected: 10
            });
            assert({
              given: _given,
              should: 'return a function that can be used in uncurried format',
              actual: curriedAddThree(3, 5, 2),
              expected: 10
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addTwo, "addTwo", "/home/sam/git/react-feature-toggles/src/curry.test.js");
  reactHotLoader.register(addThree, "addThree", "/home/sam/git/react-feature-toggles/src/curry.test.js");
  leaveModule(module);
})();

;