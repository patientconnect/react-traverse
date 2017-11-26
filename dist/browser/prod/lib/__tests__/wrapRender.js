'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _asFunction = require('should/as-function');

var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;

var _ref = (0, _jsx3.default)('div', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref2 = (0, _jsx3.default)('div', {
  className: 'foo foo-wrapped'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref3 = (0, _jsx3.default)('div', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref4 = (0, _jsx3.default)('div', {
  className: 'foo foo-wrapped'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref5 = (0, _jsx3.default)('div', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref6 = (0, _jsx3.default)('div', {
  className: 'foo foo-wrapped'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

describe('wrapRender', function () {
  function wrapFoo(node) {
    return (0, _2.default)(node, {
      DOMElement: function () {
        function DOMElement(path) {
          var nextProps = (0, _extends3.default)({}, path.node.props);
          if (nextProps.className === 'foo') {
            nextProps.className = nextProps.className + ' foo-wrapped';
          }
          return _react2.default.cloneElement.apply(_react2.default, [path.node, nextProps].concat((0, _toConsumableArray3.default)(path.traverseChildren())));
        }

        return DOMElement;
      }()
    });
  }

  it('wraps stateless components', function () {
    function Foo() {
      return _ref;
    }

    var WrappedFoo = (0, _.wrapRender)(wrapFoo)(Foo);

    var actual = (0, _jsx3.default)(WrappedFoo, {});
    var expected = _ref2;
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });

  it('wraps stateful components', function () {
    var Foo = function (_React$Component) {
      (0, _inherits3.default)(Foo, _React$Component);

      function Foo() {
        (0, _classCallCheck3.default)(this, Foo);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
      }

      Foo.prototype.render = function () {
        function render() {
          return _ref3;
        }

        return render;
      }();

      return Foo;
    }(_react2.default.Component);

    var WrappedFoo = (0, _.wrapRender)(wrapFoo)(Foo);

    var actual = (0, _jsx3.default)(WrappedFoo, {});
    var expected = _ref4;
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });

  it('decorates stateful components', function () {
    var _dec, _class;

    var WrappedFoo = (_dec = (0, _.wrapRender)(wrapFoo), _dec(_class = function (_React$Component2) {
      (0, _inherits3.default)(WrappedFoo, _React$Component2);

      function WrappedFoo() {
        (0, _classCallCheck3.default)(this, WrappedFoo);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component2.apply(this, arguments));
      }

      WrappedFoo.prototype.render = function () {
        function render() {
          return _ref5;
        }

        return render;
      }();

      return WrappedFoo;
    }(_react2.default.Component)) || _class);


    var actual = (0, _jsx3.default)(WrappedFoo, {});
    var expected = _ref6;
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });
});