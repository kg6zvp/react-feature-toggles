"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _riteway = require("riteway");

var _cheerio = _interopRequireDefault(require("cheerio"));

var _featureToggles = require("./feature-toggles");

var _context2 = require("./context");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/feature-toggles.test.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var render = _server.default.renderToStaticMarkup;
(0, _riteway.describe)('FeatureToggles()',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(assert) {
    var $, _$, features, _$2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $ = _cheerio.default.load(render(_react.default.createElement(_featureToggles.FeatureToggles, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            }, _react.default.createElement(_context2.Consumer, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            }, function (features) {
              return _react.default.createElement("div", {
                className: "features",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              }, features.toString());
            }))));
            assert({
              given: 'no features prop',
              should: 'it should provide an empty array of features via context',
              actual: $('.features').text(),
              expected: ''
            });
            _$ = _cheerio.default.load(render(_react.default.createElement(_featureToggles.FeatureToggles, {
              features: [],
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            }, _react.default.createElement(_context2.Consumer, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            }, function (features) {
              return _react.default.createElement("div", {
                className: "features",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              }, features.toString());
            }))));
            assert({
              given: 'empty features array',
              should: 'it should provide the correct features via context',
              actual: _$('.features').text(),
              expected: ''
            });
            features = ['foo', 'bar', 'baz'];
            _$2 = _cheerio.default.load(render(_react.default.createElement(_featureToggles.FeatureToggles, {
              features: features,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            }, _react.default.createElement(_context2.Consumer, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            }, function (features) {
              return _react.default.createElement("div", {
                className: "features",
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              }, features.toString());
            }))));
            assert({
              given: 'features array',
              should: 'it should provide the correct features via context',
              actual: _$2('.features').text(),
              expected: features.toString()
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
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

  reactHotLoader.register(render, "render", "/home/sam/git/react-feature-toggles/src/feature-toggles.test.js");
  leaveModule(module);
})();

;