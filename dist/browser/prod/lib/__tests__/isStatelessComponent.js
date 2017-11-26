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

var _asFunction = require('should/as-function');

var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;

var _ref = (0, _jsx3.default)('div', {});

var _ref2 = (0, _jsx3.default)('div', {});

var _ref3 = (0, _jsx3.default)('div', {});

describe('isStatelessComponent', function () {
  function RegularFunctionComponent() {
    return _ref;
  }

  var ArrowFunctionComponent = function ArrowFunctionComponent() {
    return _ref2;
  };

  var ClassComponent = function (_React$Component) {
    (0, _inherits3.default)(ClassComponent, _React$Component);

    function ClassComponent() {
      (0, _classCallCheck3.default)(this, ClassComponent);
      return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    ClassComponent.prototype.render = function () {
      function render() {
        return _ref3;
      }

      return render;
    }();

    return ClassComponent;
  }(_react2.default.Component);

  var _ref5 = (0, _jsx3.default)(RegularFunctionComponent, {});

  it('detects regular functions as stateless components', function () {
    var _ref4 = _ref5,
        type = _ref4.type;

    (0, _asFunction2.default)((0, _.isStatelessComponent)(type)).be.exactly(true);
  });

  var _ref7 = (0, _jsx3.default)(ArrowFunctionComponent, {});

  it('detects arrow functions as stateless components', function () {
    var _ref6 = _ref7,
        type = _ref6.type;

    (0, _asFunction2.default)((0, _.isStatelessComponent)(type)).be.exactly(true);
  });

  var _ref9 = (0, _jsx3.default)(ClassComponent, {});

  it('detects classes extending React.Component as stateful components', function () {
    var _ref8 = _ref9,
        type = _ref8.type;

    (0, _asFunction2.default)((0, _.isStatelessComponent)(type)).be.exactly(false);
  });
});