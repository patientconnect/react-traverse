'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

exports.default = wrapRender;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isStatelessComponent = require('./isStatelessComponent');

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRenderMemo = new _weakMap2.default();
function wrapRender(transformNode) {
  if (!wrapRenderMemo.has(transformNode)) {
    wrapRenderMemo.set(transformNode, new _weakMap2.default());
  }
  var memo = wrapRenderMemo.get(transformNode);
  return function (type) {
    if (!memo.has(type)) {
      memo.set(type, function () {
        if ((0, _isStatelessComponent2.default)(type)) {
          var _class, _temp;

          return _temp = _class = function (_React$Component) {
            (0, _inherits3.default)(_class, _React$Component);

            function _class() {
              (0, _classCallCheck3.default)(this, _class);
              return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
            }

            _class.prototype.render = function () {
              function render() {
                return transformNode(type(this.props));
              }

              return render;
            }();

            return _class;
          }(_react2.default.Component), _class.displayName = type.displayName || type.name, _class.propTypes = type.propTypes, _temp;
        }
        return function (_type) {
          (0, _inherits3.default)(_class2, _type);

          function _class2() {
            (0, _classCallCheck3.default)(this, _class2);
            return (0, _possibleConstructorReturn3.default)(this, _type.apply(this, arguments));
          }

          _class2.prototype.render = function () {
            function render() {
              return transformNode(_type.prototype.render.call(this));
            }

            return render;
          }();

          return _class2;
        }(type);
      }());
    }
    return memo.get(type);
  };
}