'use strict';var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');var _server2 = _interopRequireDefault(_server);
var _asFunction = require('should/as-function');var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');var _2 = _interopRequireDefault(_);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _global = global,describe = _global.describe,it = _global.it;

describe('wrapRender', function () {
  function wrapFoo(node) {
    return (0, _2.default)(node, {
      DOMElement: function DOMElement(path) {
        var nextProps = (0, _extends3.default)({}, path.node.props);
        if (nextProps.className === 'foo') {
          nextProps.className = nextProps.className + ' foo-wrapped';
        }
        return _react2.default.cloneElement.apply(_react2.default, [
        path.node,
        nextProps].concat((0, _toConsumableArray3.default)(
        path.traverseChildren())));

      } });

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
    Foo = function (_React$Component) {(0, _inherits3.default)(Foo, _React$Component);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function render()
        {
          return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
        } }]);return Foo;}(_react2.default.Component);


    var WrappedFoo = (0, _.wrapRender)(wrapFoo)(Foo);

    var actual = _react2.default.createElement(WrappedFoo, null);
    var expected = _react2.default.createElement('div', { className: 'foo foo-wrapped' }, _react2.default.createElement('span', null, 'foo'));
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });

  it('decorates stateful components', function () {var _dec, _class;var

    WrappedFoo = (_dec = (0, _.wrapRender)(wrapFoo), _dec(_class = function (_React$Component2) {(0, _inherits3.default)(WrappedFoo, _React$Component2);function WrappedFoo() {(0, _classCallCheck3.default)(this, WrappedFoo);return (0, _possibleConstructorReturn3.default)(this, (WrappedFoo.__proto__ || (0, _getPrototypeOf2.default)(WrappedFoo)).apply(this, arguments));}(0, _createClass3.default)(WrappedFoo, [{ key: 'render', value: function render()
        {
          return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
        } }]);return WrappedFoo;}(_react2.default.Component)) || _class);


    var actual = _react2.default.createElement(WrappedFoo, null);
    var expected = _react2.default.createElement('div', { className: 'foo foo-wrapped' }, _react2.default.createElement('span', null, 'foo'));
    (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcd3JhcFJlbmRlci5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJkZXNjcmliZSIsIml0Iiwid3JhcEZvbyIsIm5vZGUiLCJET01FbGVtZW50IiwicGF0aCIsIm5leHRQcm9wcyIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2xvbmVFbGVtZW50IiwidHJhdmVyc2VDaGlsZHJlbiIsIkZvbyIsIldyYXBwZWRGb28iLCJhY3R1YWwiLCJleHBlY3RlZCIsInJlbmRlclRvU3RhdGljTWFya3VwIiwiYmUiLCJleGFjdGx5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0FBQ0EsOEI7QUFDQSwwQztBQUNBLGdEOztBQUVBLHNCLDhJQUx5QkEsTSxDQUFqQkMsUSxXQUFBQSxRLENBQVVDLEUsV0FBQUEsRTs7QUFPbEJELFNBQVMsWUFBVCxFQUF1QixZQUFNO0FBQzNCLFdBQVNFLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ3JCLFdBQU8sZ0JBQVNBLElBQVQsRUFBZTtBQUNwQkMsZ0JBRG9CLHNCQUNUQyxJQURTLEVBQ0g7QUFDZixZQUFNQyxZQUFZLHVCQUFjLEVBQWQsRUFBa0JELEtBQUtGLElBQUwsQ0FBVUksS0FBNUIsQ0FBbEI7QUFDQSxZQUFHRCxVQUFVRSxTQUFWLEtBQXdCLEtBQTNCLEVBQWtDO0FBQ2hDRixvQkFBVUUsU0FBVixHQUF5QkYsVUFBVUUsU0FBbkM7QUFDRDtBQUNELGVBQU8sZ0JBQU1DLFlBQU47QUFDTEosYUFBS0YsSUFEQTtBQUVMRyxpQkFGSztBQUdGRCxhQUFLSyxnQkFBTCxFQUhFLEdBQVA7O0FBS0QsT0FYbUIsRUFBZixDQUFQOztBQWFEOztBQUVEVCxLQUFHLDRCQUFILEVBQWlDLFlBQU07QUFDckMsYUFBU1UsR0FBVCxHQUFlO0FBQ2IsYUFBTyx1Q0FBSyxXQUFVLEtBQWYsSUFBcUIsNENBQU8sS0FBUCxDQUFyQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTUMsYUFBYSxrQkFBV1YsT0FBWCxFQUFvQlMsR0FBcEIsQ0FBbkI7O0FBRUEsUUFBTUUsU0FBUyw4QkFBQyxVQUFELE9BQWY7QUFDQSxRQUFNQyxXQUFXLHVDQUFLLFdBQVUsaUJBQWYsSUFBaUMsNENBQU8sS0FBUCxDQUFqQyxDQUFqQjtBQUNBLDhCQUFPLGlCQUFlQyxvQkFBZixDQUFvQ0YsTUFBcEMsQ0FBUCxFQUFvREcsRUFBcEQsQ0FBdURDLE9BQXZELENBQStELGlCQUFlRixvQkFBZixDQUFvQ0QsUUFBcEMsQ0FBL0Q7QUFDRCxHQVZEOztBQVlBYixLQUFHLDJCQUFILEVBQWdDLFlBQU07QUFDOUJVLE9BRDhCO0FBRXpCO0FBQ1AsaUJBQU8sdUNBQUssV0FBVSxLQUFmLElBQXFCLDRDQUFPLEtBQVAsQ0FBckIsQ0FBUDtBQUNELFNBSmlDLGtCQUNsQixnQkFBTU8sU0FEWTs7O0FBT3BDLFFBQU1OLGFBQWEsa0JBQVdWLE9BQVgsRUFBb0JTLEdBQXBCLENBQW5COztBQUVBLFFBQU1FLFNBQVMsOEJBQUMsVUFBRCxPQUFmO0FBQ0EsUUFBTUMsV0FBVyx1Q0FBSyxXQUFVLGlCQUFmLElBQWlDLDRDQUFPLEtBQVAsQ0FBakMsQ0FBakI7QUFDQSw4QkFBTyxpQkFBZUMsb0JBQWYsQ0FBb0NGLE1BQXBDLENBQVAsRUFBb0RHLEVBQXBELENBQXVEQyxPQUF2RCxDQUErRCxpQkFBZUYsb0JBQWYsQ0FBb0NELFFBQXBDLENBQS9EO0FBQ0QsR0FaRDs7QUFjQWIsS0FBRywrQkFBSCxFQUFvQyxZQUFNOztBQUVsQ1csY0FGa0MsV0FDdkMsa0JBQVdWLE9BQVgsQ0FEdUM7QUFHN0I7QUFDUCxpQkFBTyx1Q0FBSyxXQUFVLEtBQWYsSUFBcUIsNENBQU8sS0FBUCxDQUFyQixDQUFQO0FBQ0QsU0FMcUMseUJBRWYsZ0JBQU1nQixTQUZTOzs7QUFReEMsUUFBTUwsU0FBUyw4QkFBQyxVQUFELE9BQWY7QUFDQSxRQUFNQyxXQUFXLHVDQUFLLFdBQVUsaUJBQWYsSUFBaUMsNENBQU8sS0FBUCxDQUFqQyxDQUFqQjtBQUNBLDhCQUFPLGlCQUFlQyxvQkFBZixDQUFvQ0YsTUFBcEMsQ0FBUCxFQUFvREcsRUFBcEQsQ0FBdURDLE9BQXZELENBQStELGlCQUFlRixvQkFBZixDQUFvQ0QsUUFBcEMsQ0FBL0Q7QUFDRCxHQVhEO0FBWUQsQ0F2REQiLCJmaWxlIjoiX190ZXN0c19fXFx3cmFwUmVuZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkZXNjcmliZSwgaXQgfSA9IGdsb2JhbDtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgc2hvdWxkIGZyb20gJ3Nob3VsZC9hcy1mdW5jdGlvbic7XHJcblxyXG5pbXBvcnQgdHJhdmVyc2UsIHsgd3JhcFJlbmRlciB9IGZyb20gJy4uJztcclxuXHJcbmRlc2NyaWJlKCd3cmFwUmVuZGVyJywgKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIHdyYXBGb28obm9kZSkge1xyXG4gICAgcmV0dXJuIHRyYXZlcnNlKG5vZGUsIHtcclxuICAgICAgRE9NRWxlbWVudChwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcGF0aC5ub2RlLnByb3BzKTtcclxuICAgICAgICBpZihuZXh0UHJvcHMuY2xhc3NOYW1lID09PSAnZm9vJykge1xyXG4gICAgICAgICAgbmV4dFByb3BzLmNsYXNzTmFtZSA9IGAke25leHRQcm9wcy5jbGFzc05hbWV9IGZvby13cmFwcGVkYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChcclxuICAgICAgICAgIHBhdGgubm9kZSxcclxuICAgICAgICAgIG5leHRQcm9wcyxcclxuICAgICAgICAgIC4uLnBhdGgudHJhdmVyc2VDaGlsZHJlbigpLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGl0KCd3cmFwcyBzdGF0ZWxlc3MgY29tcG9uZW50cycsICgpID0+IHtcclxuICAgIGZ1bmN0aW9uIEZvbygpIHtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmb28nPjxzcGFuPnsnZm9vJ308L3NwYW4+PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFdyYXBwZWRGb28gPSB3cmFwUmVuZGVyKHdyYXBGb28pKEZvbyk7XHJcblxyXG4gICAgY29uc3QgYWN0dWFsID0gPFdyYXBwZWRGb28gLz47XHJcbiAgICBjb25zdCBleHBlY3RlZCA9IDxkaXYgY2xhc3NOYW1lPSdmb28gZm9vLXdyYXBwZWQnPjxzcGFuPnsnZm9vJ308L3NwYW4+PC9kaXY+O1xyXG4gICAgc2hvdWxkKFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGFjdHVhbCkpLmJlLmV4YWN0bHkoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZXhwZWN0ZWQpKTtcclxuICB9KTtcclxuXHJcbiAgaXQoJ3dyYXBzIHN0YXRlZnVsIGNvbXBvbmVudHMnLCAoKSA9PiB7XHJcbiAgICBjbGFzcyBGb28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmb28nPjxzcGFuPnsnZm9vJ308L3NwYW4+PC9kaXY+O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgV3JhcHBlZEZvbyA9IHdyYXBSZW5kZXIod3JhcEZvbykoRm9vKTtcclxuXHJcbiAgICBjb25zdCBhY3R1YWwgPSA8V3JhcHBlZEZvbyAvPjtcclxuICAgIGNvbnN0IGV4cGVjdGVkID0gPGRpdiBjbGFzc05hbWU9J2ZvbyBmb28td3JhcHBlZCc+PHNwYW4+eydmb28nfTwvc3Bhbj48L2Rpdj47XHJcbiAgICBzaG91bGQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoYWN0dWFsKSkuYmUuZXhhY3RseShSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChleHBlY3RlZCkpO1xyXG4gIH0pO1xyXG5cclxuICBpdCgnZGVjb3JhdGVzIHN0YXRlZnVsIGNvbXBvbmVudHMnLCAoKSA9PiB7XHJcbiAgICBAd3JhcFJlbmRlcih3cmFwRm9vKVxyXG4gICAgY2xhc3MgV3JhcHBlZEZvbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvbyc+PHNwYW4+eydmb28nfTwvc3Bhbj48L2Rpdj47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3R1YWwgPSA8V3JhcHBlZEZvbyAvPjtcclxuICAgIGNvbnN0IGV4cGVjdGVkID0gPGRpdiBjbGFzc05hbWU9J2ZvbyBmb28td3JhcHBlZCc+PHNwYW4+eydmb28nfTwvc3Bhbj48L2Rpdj47XHJcbiAgICBzaG91bGQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoYWN0dWFsKSkuYmUuZXhhY3RseShSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChleHBlY3RlZCkpO1xyXG4gIH0pO1xyXG59KTtcclxuIl19