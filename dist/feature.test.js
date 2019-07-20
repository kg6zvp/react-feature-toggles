"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("regenerator-runtime/runtime");

var _riteway = require("riteway");

var _cheerio = _interopRequireDefault(require("cheerio"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _feature = require("./feature");

var _context2 = require("./context");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/feature.test.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var render = _server.default.renderToStaticMarkup;

var createTestComponent = function createTestComponent(componentName) {
  return function () {
    return _react.default.createElement("div", {
      className: componentName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    });
  };
};

(0, _riteway.describe)('Feature()',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(assert) {
    var ActiveComponent, InactiveComponent, features, $, _ActiveComponent, _InactiveComponent, _features, _$, _ActiveComponent2, _features2, _$2, _ActiveComponent3, _features3, _$3, _InactiveComponent2, _ActiveComponent4, _features4, _$4;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ActiveComponent = createTestComponent('active');
            InactiveComponent = createTestComponent('inactive');
            features = ['foo', 'bar', 'baz'];
            $ = _cheerio.default.load(render(_react.default.createElement(_context2.Provider, {
              value: features,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            }, _react.default.createElement(_feature.Feature, {
              name: "foo",
              inactiveComponent: InactiveComponent,
              activeComponent: ActiveComponent,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            }))));
            assert({
              given: 'the feature is enabled and an inactive component',
              should: 'not render the inactive component',
              actual: $('.inactive').length,
              expected: 0
            });
            assert({
              given: 'the feature is enabled and an active component',
              should: 'render the active component',
              actual: $('.active').length,
              expected: 1
            });
            _ActiveComponent = createTestComponent('active');
            _InactiveComponent = createTestComponent('inactive');
            _features = ['foo', 'bar', 'baz'];
            _$ = _cheerio.default.load(render(_react.default.createElement(_context2.Provider, {
              value: _features,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            }, _react.default.createElement(_feature.Feature, {
              name: "help",
              inactiveComponent: _InactiveComponent,
              activeComponent: _ActiveComponent,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            }))));
            assert({
              given: 'the feature is not enabled and an inactive component',
              should: 'render the inactive component',
              actual: _$('.inactive').length,
              expected: 1
            });
            assert({
              given: 'the feature is not enabled and an active component',
              should: 'not render the active component',
              actual: _$('.active').length,
              expected: 0
            });
            _ActiveComponent2 = createTestComponent('active');
            _features2 = ['foo', 'bar', 'baz'];
            _$2 = _cheerio.default.load(render(_react.default.createElement(_context2.Provider, {
              value: _features2,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            }, _react.default.createElement(_feature.Feature, {
              name: "foo",
              activeComponent: _ActiveComponent2,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            }))));
            assert({
              given: 'the feature is enabled, no inactive component',
              should: 'render the active component',
              actual: _$2('.active').length,
              expected: 1
            });
            _ActiveComponent3 = createTestComponent('active');
            _features3 = ['foo', 'bar', 'baz'];
            _$3 = _cheerio.default.load(render(_react.default.createElement(_context2.Provider, {
              value: _features3,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            }, _react.default.createElement(_feature.Feature, {
              name: "help",
              activeComponent: _ActiveComponent3,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            }))));
            assert({
              given: 'the feature is not enabled, no inactive component',
              should: 'render the the default inactive component',
              actual: _$3.html(),
              expected: ''
            });
            _InactiveComponent2 = createTestComponent('inactive');
            _ActiveComponent4 = createTestComponent('active');
            _features4 = ['foo', 'bar', 'baz'];
            _$4 = _cheerio.default.load(render(_react.default.createElement(_context2.Provider, {
              value: _features4,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            }, _react.default.createElement(_feature.Feature, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              }
            }, function (_ref2) {
              var features = _ref2.features;
              return features.includes('bar') ? _react.default.createElement(_ActiveComponent4, {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                }
              }) : _react.default.createElement(_InactiveComponent2, {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                }
              });
            }))));
            assert({
              given: 'no active component prop',
              should: 'act as a render prop component',
              actual: _$4('.active').length,
              expected: 1
            });
            assert({
              given: 'no active component prop',
              should: 'act as a render prop component',
              actual: _$4('.inactive').length,
              expected: 0
            });

          case 26:
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

  reactHotLoader.register(render, "render", "/home/sam/git/react-feature-toggles/src/feature.test.js");
  reactHotLoader.register(createTestComponent, "createTestComponent", "/home/sam/git/react-feature-toggles/src/feature.test.js");
  leaveModule(module);
})();

;