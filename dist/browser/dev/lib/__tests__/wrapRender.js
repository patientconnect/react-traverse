'use strict';var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');var _server2 = _interopRequireDefault(_server);
var _asFunction = require('should/as-function');var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');var _2 = _interopRequireDefault(_);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _global = global,describe = _global.describe,it = _global.it;

describe('wrapRender', function () {
  function wrapFoo(node) {
    return (0, _2.default)(node, {
      DOMElement: function () {function DOMElement(path) {
          var nextProps = (0, _extends3.default)({}, path.node.props);
          if (nextProps.className === 'foo') {
            nextProps.className = nextProps.className + ' foo-wrapped';
          }
          return _react2.default.cloneElement.apply(_react2.default, [
          path.node,
          nextProps].concat((0, _toConsumableArray3.default)(
          path.traverseChildren())));

        }return DOMElement;}() });

  }

  it('wraps stateless components', function () {
    function Foo() {
      return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
    }

    var WrappedFoo = (0, _.wrapRender)(wrapFoo)(Foo);

    var actual = _react2.default.createElement(WrappedFoo, null);
    var expected = _react2.default.createElement('div', { className: 'foo foo-wrapped' }, _react2.default.createElement('span', null, 'foo'));
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });

  it('wraps stateful components', function () {var
    Foo = function (_React$Component) {(0, _inherits3.default)(Foo, _React$Component);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function () {function render()
          {
            return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
          }return render;}() }]);return Foo;}(_react2.default.Component);


    var WrappedFoo = (0, _.wrapRender)(wrapFoo)(Foo);

    var actual = _react2.default.createElement(WrappedFoo, null);
    var expected = _react2.default.createElement('div', { className: 'foo foo-wrapped' }, _react2.default.createElement('span', null, 'foo'));
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });

  it('decorates stateful components', function () {var _dec, _class;var

    WrappedFoo = (_dec = (0, _.wrapRender)(wrapFoo), _dec(_class = function (_React$Component2) {(0, _inherits3.default)(WrappedFoo, _React$Component2);function WrappedFoo() {(0, _classCallCheck3.default)(this, WrappedFoo);return (0, _possibleConstructorReturn3.default)(this, (WrappedFoo.__proto__ || (0, _getPrototypeOf2.default)(WrappedFoo)).apply(this, arguments));}(0, _createClass3.default)(WrappedFoo, [{ key: 'render', value: function () {function render()
          {
            return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
          }return render;}() }]);return WrappedFoo;}(_react2.default.Component)) || _class);


    var actual = _react2.default.createElement(WrappedFoo, null);
    var expected = _react2.default.createElement('div', { className: 'foo foo-wrapped' }, _react2.default.createElement('span', null, 'foo'));
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcd3JhcFJlbmRlci5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJkZXNjcmliZSIsIml0Iiwid3JhcEZvbyIsIm5vZGUiLCJET01FbGVtZW50IiwicGF0aCIsIm5leHRQcm9wcyIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2xvbmVFbGVtZW50IiwidHJhdmVyc2VDaGlsZHJlbiIsIkZvbyIsIldyYXBwZWRGb28iLCJhY3R1YWwiLCJleHBlY3RlZCIsInJlbmRlclRvU3RhdGljTWFya3VwIiwiYmUiLCJleGFjdGx5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0FBQ0EsOEI7QUFDQSwwQztBQUNBLGdEOztBQUVBLHNCLDhJQUx5QkEsTSxDQUFqQkMsUSxXQUFBQSxRLENBQVVDLEUsV0FBQUEsRTs7QUFPbEJELFNBQVMsWUFBVCxFQUF1QixZQUFNO0FBQzNCLFdBQVNFLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ3JCLFdBQU8sZ0JBQVNBLElBQVQsRUFBZTtBQUNwQkMsZ0JBRG9CLG1DQUNUQyxJQURTLEVBQ0g7QUFDZixjQUFNQyxZQUFZLHVCQUFjLEVBQWQsRUFBa0JELEtBQUtGLElBQUwsQ0FBVUksS0FBNUIsQ0FBbEI7QUFDQSxjQUFHRCxVQUFVRSxTQUFWLEtBQXdCLEtBQTNCLEVBQWtDO0FBQ2hDRixzQkFBVUUsU0FBVixHQUF5QkYsVUFBVUUsU0FBbkM7QUFDRDtBQUNELGlCQUFPLGdCQUFNQyxZQUFOO0FBQ0xKLGVBQUtGLElBREE7QUFFTEcsbUJBRks7QUFHRkQsZUFBS0ssZ0JBQUwsRUFIRSxHQUFQOztBQUtELFNBWG1CLHVCQUFmLENBQVA7O0FBYUQ7O0FBRURULEtBQUcsNEJBQUgsRUFBaUMsWUFBTTtBQUNyQyxhQUFTVSxHQUFULEdBQWU7QUFDYixhQUFPLHVDQUFLLFdBQVUsS0FBZixJQUFxQiw0Q0FBTyxLQUFQLENBQXJCLENBQVA7QUFDRDs7QUFFRCxRQUFNQyxhQUFhLGtCQUFXVixPQUFYLEVBQW9CUyxHQUFwQixDQUFuQjs7QUFFQSxRQUFNRSxTQUFTLDhCQUFDLFVBQUQsT0FBZjtBQUNBLFFBQU1DLFdBQVcsdUNBQUssV0FBVSxpQkFBZixJQUFpQyw0Q0FBTyxLQUFQLENBQWpDLENBQWpCO0FBQ0EsOEJBQU8saUJBQWVDLG9CQUFmLENBQW9DRixNQUFwQyxDQUFQLEVBQW9ERyxFQUFwRCxDQUF1REMsT0FBdkQsQ0FBK0QsaUJBQWVGLG9CQUFmLENBQW9DRCxRQUFwQyxDQUEvRDtBQUNELEdBVkQ7O0FBWUFiLEtBQUcsMkJBQUgsRUFBZ0MsWUFBTTtBQUM5QlUsT0FEOEI7QUFFekI7QUFDUCxtQkFBTyx1Q0FBSyxXQUFVLEtBQWYsSUFBcUIsNENBQU8sS0FBUCxDQUFyQixDQUFQO0FBQ0QsV0FKaUMsbUNBQ2xCLGdCQUFNTyxTQURZOzs7QUFPcEMsUUFBTU4sYUFBYSxrQkFBV1YsT0FBWCxFQUFvQlMsR0FBcEIsQ0FBbkI7O0FBRUEsUUFBTUUsU0FBUyw4QkFBQyxVQUFELE9BQWY7QUFDQSxRQUFNQyxXQUFXLHVDQUFLLFdBQVUsaUJBQWYsSUFBaUMsNENBQU8sS0FBUCxDQUFqQyxDQUFqQjtBQUNBLDhCQUFPLGlCQUFlQyxvQkFBZixDQUFvQ0YsTUFBcEMsQ0FBUCxFQUFvREcsRUFBcEQsQ0FBdURDLE9BQXZELENBQStELGlCQUFlRixvQkFBZixDQUFvQ0QsUUFBcEMsQ0FBL0Q7QUFDRCxHQVpEOztBQWNBYixLQUFHLCtCQUFILEVBQW9DLFlBQU07O0FBRWxDVyxjQUZrQyxXQUN2QyxrQkFBV1YsT0FBWCxDQUR1QztBQUc3QjtBQUNQLG1CQUFPLHVDQUFLLFdBQVUsS0FBZixJQUFxQiw0Q0FBTyxLQUFQLENBQXJCLENBQVA7QUFDRCxXQUxxQywwQ0FFZixnQkFBTWdCLFNBRlM7OztBQVF4QyxRQUFNTCxTQUFTLDhCQUFDLFVBQUQsT0FBZjtBQUNBLFFBQU1DLFdBQVcsdUNBQUssV0FBVSxpQkFBZixJQUFpQyw0Q0FBTyxLQUFQLENBQWpDLENBQWpCO0FBQ0EsOEJBQU8saUJBQWVDLG9CQUFmLENBQW9DRixNQUFwQyxDQUFQLEVBQW9ERyxFQUFwRCxDQUF1REMsT0FBdkQsQ0FBK0QsaUJBQWVGLG9CQUFmLENBQW9DRCxRQUFwQyxDQUEvRDtBQUNELEdBWEQ7QUFZRCxDQXZERCIsImZpbGUiOiJfX3Rlc3RzX19cXHdyYXBSZW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRlc2NyaWJlLCBpdCB9ID0gZ2xvYmFsO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCBzaG91bGQgZnJvbSAnc2hvdWxkL2FzLWZ1bmN0aW9uJztcclxuXHJcbmltcG9ydCB0cmF2ZXJzZSwgeyB3cmFwUmVuZGVyIH0gZnJvbSAnLi4nO1xyXG5cclxuZGVzY3JpYmUoJ3dyYXBSZW5kZXInLCAoKSA9PiB7XHJcbiAgZnVuY3Rpb24gd3JhcEZvbyhub2RlKSB7XHJcbiAgICByZXR1cm4gdHJhdmVyc2Uobm9kZSwge1xyXG4gICAgICBET01FbGVtZW50KHBhdGgpIHtcclxuICAgICAgICBjb25zdCBuZXh0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXRoLm5vZGUucHJvcHMpO1xyXG4gICAgICAgIGlmKG5leHRQcm9wcy5jbGFzc05hbWUgPT09ICdmb28nKSB7XHJcbiAgICAgICAgICBuZXh0UHJvcHMuY2xhc3NOYW1lID0gYCR7bmV4dFByb3BzLmNsYXNzTmFtZX0gZm9vLXdyYXBwZWRgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxyXG4gICAgICAgICAgcGF0aC5ub2RlLFxyXG4gICAgICAgICAgbmV4dFByb3BzLFxyXG4gICAgICAgICAgLi4ucGF0aC50cmF2ZXJzZUNoaWxkcmVuKCksXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXQoJ3dyYXBzIHN0YXRlbGVzcyBjb21wb25lbnRzJywgKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gRm9vKCkge1xyXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvbyc+PHNwYW4+eydmb28nfTwvc3Bhbj48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgV3JhcHBlZEZvbyA9IHdyYXBSZW5kZXIod3JhcEZvbykoRm9vKTtcclxuXHJcbiAgICBjb25zdCBhY3R1YWwgPSA8V3JhcHBlZEZvbyAvPjtcclxuICAgIGNvbnN0IGV4cGVjdGVkID0gPGRpdiBjbGFzc05hbWU9J2ZvbyBmb28td3JhcHBlZCc+PHNwYW4+eydmb28nfTwvc3Bhbj48L2Rpdj47XHJcbiAgICBzaG91bGQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoYWN0dWFsKSkuYmUuZXhhY3RseShSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChleHBlY3RlZCkpO1xyXG4gIH0pO1xyXG5cclxuICBpdCgnd3JhcHMgc3RhdGVmdWwgY29tcG9uZW50cycsICgpID0+IHtcclxuICAgIGNsYXNzIEZvbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvbyc+PHNwYW4+eydmb28nfTwvc3Bhbj48L2Rpdj47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBXcmFwcGVkRm9vID0gd3JhcFJlbmRlcih3cmFwRm9vKShGb28pO1xyXG5cclxuICAgIGNvbnN0IGFjdHVhbCA9IDxXcmFwcGVkRm9vIC8+O1xyXG4gICAgY29uc3QgZXhwZWN0ZWQgPSA8ZGl2IGNsYXNzTmFtZT0nZm9vIGZvby13cmFwcGVkJz48c3Bhbj57J2Zvbyd9PC9zcGFuPjwvZGl2PjtcclxuICAgIHNob3VsZChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChhY3R1YWwpKS5iZS5leGFjdGx5KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGV4cGVjdGVkKSk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KCdkZWNvcmF0ZXMgc3RhdGVmdWwgY29tcG9uZW50cycsICgpID0+IHtcclxuICAgIEB3cmFwUmVuZGVyKHdyYXBGb28pXHJcbiAgICBjbGFzcyBXcmFwcGVkRm9vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZm9vJz48c3Bhbj57J2Zvbyd9PC9zcGFuPjwvZGl2PjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdHVhbCA9IDxXcmFwcGVkRm9vIC8+O1xyXG4gICAgY29uc3QgZXhwZWN0ZWQgPSA8ZGl2IGNsYXNzTmFtZT0nZm9vIGZvby13cmFwcGVkJz48c3Bhbj57J2Zvbyd9PC9zcGFuPjwvZGl2PjtcclxuICAgIHNob3VsZChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChhY3R1YWwpKS5iZS5leGFjdGx5KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGV4cGVjdGVkKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=