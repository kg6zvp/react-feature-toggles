"use strict";

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _riteway = require("riteway");

var _cheerio = _interopRequireDefault(require("cheerio"));

var _withFeatureToggles = require("./with-feature-toggles");

var _context2 = require("./context");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/with-feature-toggles.test.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var render = _server.default.renderToStaticMarkup;

var createTestComponent = function createTestComponent() {
  return function (_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        propCheck = _ref.propCheck;

    return _react.default.createElement(_context2.Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, function (features) {
      return _react.default.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react.default.createElement("div", {
        className: "features",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, features.toString()), _react.default.createElement("div", {
        className: "prop-check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, propCheck));
    });
  };
};

(0, _riteway.describe)('withFeatureToggles()',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(assert) {
    var Component, Page, $, _Component, features, _Page, _$, _Component2, _features, _Page2, _$2, _Component3, _Page3, propCheck, _$3;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = createTestComponent();
            Page = (0, _withFeatureToggles.withFeatureToggles)()(Component);
            $ = _cheerio.default.load(render(_react.default.createElement(Page, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            })));
            assert({
              given: 'no features argument',
              should: 'provide an empty array of features via context',
              actual: $('.features').text(),
              expected: ''
            });
            _Component = createTestComponent();
            features = [];
            _Page = (0, _withFeatureToggles.withFeatureToggles)({
              features: features
            })(_Component);
            _$ = _cheerio.default.load(render(_react.default.createElement(_Page, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            })));
            assert({
              given: 'empty features array',
              should: 'provide the correct features via context',
              actual: _$('.features').text(),
              expected: ''
            });
            _Component2 = createTestComponent();
            _features = ['foo', 'bar', 'baz'];
            _Page2 = (0, _withFeatureToggles.withFeatureToggles)({
              features: _features
            })(_Component2);
            _$2 = _cheerio.default.load(render(_react.default.createElement(_Page2, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            })));
            assert({
              given: 'features array',
              should: 'provide the correct features via context',
              actual: _$2('.features').text(),
              expected: _features.toString()
            });
            _Component3 = createTestComponent();
            _Page3 = (0, _withFeatureToggles.withFeatureToggles)()(_Component3);
            propCheck = 'bacon and eggs';
            _$3 = _cheerio.default.load(render(_react.default.createElement(_Page3, {
              propCheck: propCheck,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            })));
            assert({
              given: 'props',
              should: 'pass through props',
              actual: _$3('.prop-check').text(),
              expected: 'bacon and eggs'
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, "render", "/home/sam/git/react-feature-toggles/src/with-feature-toggles.test.js");
  reactHotLoader.register(createTestComponent, "createTestComponent", "/home/sam/git/react-feature-toggles/src/with-feature-toggles.test.js");
  leaveModule(module);
})();

;