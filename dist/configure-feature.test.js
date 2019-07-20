"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

var _riteway = require("riteway");

var _cheerio = _interopRequireDefault(require("cheerio"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _configureFeature = require("./configure-feature");

var _context2 = require("./context");

var _jsxFileName = "/home/sam/git/react-feature-toggles/src/configure-feature.test.js";

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

(0, _riteway.describe)('configureFeature()',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(assert) {
    var ActiveComponent, InactiveComponent, ConfiguredFeature, features, $, _ActiveComponent, _InactiveComponent, _ConfiguredFeature, _features, _$;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ActiveComponent = createTestComponent('active');
            InactiveComponent = createTestComponent('inactive');
            ConfiguredFeature = (0, _configureFeature.configureFeature)(InactiveComponent)('game')(ActiveComponent);
            features = [];
            $ = _cheerio.default.load(render(_react.default.createElement(_context2.Provider, {
              value: features,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }, _react.default.createElement(ConfiguredFeature, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            }))));
            assert({
              given: 'the feature is not enabled',
              should: 'not render the Active component',
              actual: $('.active').length,
              expected: 0
            });
            assert({
              given: 'the feature is not enabled',
              should: 'render the Inactive component',
              actual: $('.inactive').length,
              expected: 1
            });
            _ActiveComponent = createTestComponent('active');
            _InactiveComponent = createTestComponent('inactive');
            _ConfiguredFeature = (0, _configureFeature.configureFeature)(_InactiveComponent, 'game', _ActiveComponent);
            _features = ['game', 'bar', 'baz'];
            _$ = _cheerio.default.load(render(_react.default.createElement(_context2.Provider, {
              value: _features,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            }, _react.default.createElement(_ConfiguredFeature, {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            }))));
            assert({
              given: 'the feature is enabled',
              should: 'not render the Inactive component',
              actual: _$('.inactive').length,
              expected: 0
            });
            assert({
              given: 'the feature is enabled',
              should: 'render the Active component',
              actual: _$('.active').length,
              expected: 1
            });

          case 14:
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

  reactHotLoader.register(render, "render", "/home/sam/git/react-feature-toggles/src/configure-feature.test.js");
  reactHotLoader.register(createTestComponent, "createTestComponent", "/home/sam/git/react-feature-toggles/src/configure-feature.test.js");
  leaveModule(module);
})();

;