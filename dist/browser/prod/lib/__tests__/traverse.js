'use strict';

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var _ref = (0, _jsx3.default)('span', {}, void 0, 'Foo:');

var _ref2 = (0, _jsx3.default)('span', {}, void 0, 'Bar:');

var _ref3 = (0, _jsx3.default)('li', {}, void 0, 'foo');

var _ref4 = (0, _jsx3.default)('li', {}, void 0, 'Bar');

var _ref5 = (0, _jsx3.default)('li', {}, void 0, 'BAZ');

var _ref6 = (0, _jsx3.default)('li', {}, void 0, 'buZZ');

var _ref7 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('div', {}, void 0, 1));

var _ref8 = (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, 'FOO'), (0, _jsx3.default)('li', {}, void 0, 'BAR'), (0, _jsx3.default)('li', {}, void 0, 'BAZ'), (0, _jsx3.default)('li', {}, void 0, 'BUZZ'), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('span', {}, void 0, 'Foo:'), (0, _jsx3.default)('span', {}, void 0, 'BAZZ')), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('span', {}, void 0, 'Bar:'), (0, _jsx3.default)('span', {}, void 0, 'FOZZ'))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('div', {}, void 0, 1)));

describe('traverse', function () {
  it('capitalize all text', function () {
    var Foo = function (_React$Component) {
      (0, _inherits3.default)(Foo, _React$Component);

      function Foo() {
        (0, _classCallCheck3.default)(this, Foo);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
      }

      Foo.prototype.render = function () {
        function render() {
          return (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)('span', {}, void 0, this.props.children));
        }

        return render;
      }();

      return Foo;
    }(_react2.default.Component);

    Foo.propTypes = {
      children: _react2.default.PropTypes.node
    };

    function Bar(props) {
      return (0, _jsx3.default)('div', {}, void 0, _ref2, (0, _jsx3.default)('span', {}, void 0, props.children));
    }
    Bar.propTypes = {
      children: _react2.default.PropTypes.node
    };
    var original = (0, _jsx3.default)('ul', {}, void 0, _ref3, _ref4, _ref5, _ref6, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(Foo, {}, void 0, 'bazZ'), (0, _jsx3.default)(Bar, {}, void 0, 'fozZ')), _ref7);
    var traversed = (0, _2.default)(original, {
      Text: function () {
        function Text(path) {
          if (typeof path.node === 'string') {
            return path.node.toUpperCase();
          }
          return path.node;
        }

        return Text;
      }()
    });
    var expected = _ref8;
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(traversed)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });
});