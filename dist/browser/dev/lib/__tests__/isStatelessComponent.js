'use strict';var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _asFunction = require('should/as-function');var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _global = global,describe = _global.describe,it = _global.it;

describe('isStatelessComponent', function () {
  function RegularFunctionComponent() {
    return _react2.default.createElement('div', null);
  }

  var ArrowFunctionComponent = function ArrowFunctionComponent() {return _react2.default.createElement('div', null);};var

  ClassComponent = function (_React$Component) {(0, _inherits3.default)(ClassComponent, _React$Component);function ClassComponent() {(0, _classCallCheck3.default)(this, ClassComponent);return (0, _possibleConstructorReturn3.default)(this, (ClassComponent.__proto__ || (0, _getPrototypeOf2.default)(ClassComponent)).apply(this, arguments));}(0, _createClass3.default)(ClassComponent, [{ key: 'render', value: function () {function render()
        {
          return _react2.default.createElement('div', null);
        }return render;}() }]);return ClassComponent;}(_react2.default.Component);


  it('detects regular functions as stateless components', function () {var _ref =
    _react2.default.createElement(RegularFunctionComponent, null),type = _ref.type;
    (0, _asFunction2.default)((0, _.isStatelessComponent)(type)).be.exactly(true);
  });

  it('detects arrow functions as stateless components', function () {var _ref2 =
    _react2.default.createElement(ArrowFunctionComponent, null),type = _ref2.type;
    (0, _asFunction2.default)((0, _.isStatelessComponent)(type)).be.exactly(true);
  });

  it('detects classes extending React.Component as stateful components', function () {var _ref3 =
    _react2.default.createElement(ClassComponent, null),type = _ref3.type;
    (0, _asFunction2.default)((0, _.isStatelessComponent)(type)).be.exactly(false);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcaXNTdGF0ZWxlc3NDb21wb25lbnQuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZGVzY3JpYmUiLCJpdCIsIlJlZ3VsYXJGdW5jdGlvbkNvbXBvbmVudCIsIkFycm93RnVuY3Rpb25Db21wb25lbnQiLCJDbGFzc0NvbXBvbmVudCIsIkNvbXBvbmVudCIsInR5cGUiLCJiZSIsImV4YWN0bHkiXSwibWFwcGluZ3MiOiI7QUFDQSw4QjtBQUNBLGdEOztBQUVBLHNCLDJHQUp5QkEsTSxDQUFqQkMsUSxXQUFBQSxRLENBQVVDLEUsV0FBQUEsRTs7QUFNbEJELFNBQVMsc0JBQVQsRUFBaUMsWUFBTTtBQUNyQyxXQUFTRSx3QkFBVCxHQUFvQztBQUNsQyxXQUFPLDBDQUFQO0FBQ0Q7O0FBRUQsTUFBTUMseUJBQXlCLFNBQXpCQSxzQkFBeUIsV0FBTSwwQ0FBTixFQUEvQixDQUxxQzs7QUFPL0JDLGdCQVArQjtBQVExQjtBQUNQLGlCQUFPLDBDQUFQO0FBQ0QsU0FWa0MsOENBT1IsZ0JBQU1DLFNBUEU7OztBQWFyQ0osS0FBRyxtREFBSCxFQUF3RCxZQUFNO0FBQzNDLGtDQUFDLHdCQUFELE9BRDJDLENBQ3BESyxJQURvRCxRQUNwREEsSUFEb0Q7QUFFNUQsOEJBQU8sNEJBQXFCQSxJQUFyQixDQUFQLEVBQW1DQyxFQUFuQyxDQUFzQ0MsT0FBdEMsQ0FBOEMsSUFBOUM7QUFDRCxHQUhEOztBQUtBUCxLQUFHLGlEQUFILEVBQXNELFlBQU07QUFDekMsa0NBQUMsc0JBQUQsT0FEeUMsQ0FDbERLLElBRGtELFNBQ2xEQSxJQURrRDtBQUUxRCw4QkFBTyw0QkFBcUJBLElBQXJCLENBQVAsRUFBbUNDLEVBQW5DLENBQXNDQyxPQUF0QyxDQUE4QyxJQUE5QztBQUNELEdBSEQ7O0FBS0FQLEtBQUcsa0VBQUgsRUFBdUUsWUFBTTtBQUMxRCxrQ0FBQyxjQUFELE9BRDBELENBQ25FSyxJQURtRSxTQUNuRUEsSUFEbUU7QUFFM0UsOEJBQU8sNEJBQXFCQSxJQUFyQixDQUFQLEVBQW1DQyxFQUFuQyxDQUFzQ0MsT0FBdEMsQ0FBOEMsS0FBOUM7QUFDRCxHQUhEO0FBSUQsQ0EzQkQiLCJmaWxlIjoiX190ZXN0c19fXFxpc1N0YXRlbGVzc0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVzY3JpYmUsIGl0IH0gPSBnbG9iYWw7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzaG91bGQgZnJvbSAnc2hvdWxkL2FzLWZ1bmN0aW9uJztcclxuXHJcbmltcG9ydCB7IGlzU3RhdGVsZXNzQ29tcG9uZW50IH0gZnJvbSAnLi4nO1xyXG5cclxuZGVzY3JpYmUoJ2lzU3RhdGVsZXNzQ29tcG9uZW50JywgKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIFJlZ3VsYXJGdW5jdGlvbkNvbXBvbmVudCgpIHtcclxuICAgIHJldHVybiA8ZGl2IC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgQXJyb3dGdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IDxkaXYgLz47XHJcblxyXG4gIGNsYXNzIENsYXNzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDxkaXYgLz47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpdCgnZGV0ZWN0cyByZWd1bGFyIGZ1bmN0aW9ucyBhcyBzdGF0ZWxlc3MgY29tcG9uZW50cycsICgpID0+IHtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gPFJlZ3VsYXJGdW5jdGlvbkNvbXBvbmVudCAvPjtcclxuICAgIHNob3VsZChpc1N0YXRlbGVzc0NvbXBvbmVudCh0eXBlKSkuYmUuZXhhY3RseSh0cnVlKTtcclxuICB9KTtcclxuXHJcbiAgaXQoJ2RldGVjdHMgYXJyb3cgZnVuY3Rpb25zIGFzIHN0YXRlbGVzcyBjb21wb25lbnRzJywgKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0eXBlIH0gPSA8QXJyb3dGdW5jdGlvbkNvbXBvbmVudCAvPjtcclxuICAgIHNob3VsZChpc1N0YXRlbGVzc0NvbXBvbmVudCh0eXBlKSkuYmUuZXhhY3RseSh0cnVlKTtcclxuICB9KTtcclxuXHJcbiAgaXQoJ2RldGVjdHMgY2xhc3NlcyBleHRlbmRpbmcgUmVhY3QuQ29tcG9uZW50IGFzIHN0YXRlZnVsIGNvbXBvbmVudHMnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHR5cGUgfSA9IDxDbGFzc0NvbXBvbmVudCAvPjtcclxuICAgIHNob3VsZChpc1N0YXRlbGVzc0NvbXBvbmVudCh0eXBlKSkuYmUuZXhhY3RseShmYWxzZSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=