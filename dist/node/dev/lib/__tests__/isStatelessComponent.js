'use strict';var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _asFunction = require('should/as-function');var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _global = global,describe = _global.describe,it = _global.it;

describe('isStatelessComponent', function () {
  function RegularFunctionComponent() {
    return _react2.default.createElement('div', null);
  }

  var ArrowFunctionComponent = function ArrowFunctionComponent() {return _react2.default.createElement('div', null);};var

  ClassComponent = function (_React$Component) {(0, _inherits3.default)(ClassComponent, _React$Component);function ClassComponent() {(0, _classCallCheck3.default)(this, ClassComponent);return (0, _possibleConstructorReturn3.default)(this, (ClassComponent.__proto__ || (0, _getPrototypeOf2.default)(ClassComponent)).apply(this, arguments));}(0, _createClass3.default)(ClassComponent, [{ key: 'render', value: function render()
      {
        return _react2.default.createElement('div', null);
      } }]);return ClassComponent;}(_react2.default.Component);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcaXNTdGF0ZWxlc3NDb21wb25lbnQuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZGVzY3JpYmUiLCJpdCIsIlJlZ3VsYXJGdW5jdGlvbkNvbXBvbmVudCIsIkFycm93RnVuY3Rpb25Db21wb25lbnQiLCJDbGFzc0NvbXBvbmVudCIsIkNvbXBvbmVudCIsInR5cGUiLCJiZSIsImV4YWN0bHkiXSwibWFwcGluZ3MiOiI7QUFDQSw4QjtBQUNBLGdEOztBQUVBLHNCLDJHQUp5QkEsTSxDQUFqQkMsUSxXQUFBQSxRLENBQVVDLEUsV0FBQUEsRTs7QUFNbEJELFNBQVMsc0JBQVQsRUFBaUMsWUFBTTtBQUNyQyxXQUFTRSx3QkFBVCxHQUFvQztBQUNsQyxXQUFPLDBDQUFQO0FBQ0Q7O0FBRUQsTUFBTUMseUJBQXlCLFNBQXpCQSxzQkFBeUIsV0FBTSwwQ0FBTixFQUEvQixDQUxxQzs7QUFPL0JDLGdCQVArQjtBQVExQjtBQUNQLGVBQU8sMENBQVA7QUFDRCxPQVZrQyw2QkFPUixnQkFBTUMsU0FQRTs7O0FBYXJDSixLQUFHLG1EQUFILEVBQXdELFlBQU07QUFDM0Msa0NBQUMsd0JBQUQsT0FEMkMsQ0FDcERLLElBRG9ELFFBQ3BEQSxJQURvRDtBQUU1RCw4QkFBTyw0QkFBcUJBLElBQXJCLENBQVAsRUFBbUNDLEVBQW5DLENBQXNDQyxPQUF0QyxDQUE4QyxJQUE5QztBQUNELEdBSEQ7O0FBS0FQLEtBQUcsaURBQUgsRUFBc0QsWUFBTTtBQUN6QyxrQ0FBQyxzQkFBRCxPQUR5QyxDQUNsREssSUFEa0QsU0FDbERBLElBRGtEO0FBRTFELDhCQUFPLDRCQUFxQkEsSUFBckIsQ0FBUCxFQUFtQ0MsRUFBbkMsQ0FBc0NDLE9BQXRDLENBQThDLElBQTlDO0FBQ0QsR0FIRDs7QUFLQVAsS0FBRyxrRUFBSCxFQUF1RSxZQUFNO0FBQzFELGtDQUFDLGNBQUQsT0FEMEQsQ0FDbkVLLElBRG1FLFNBQ25FQSxJQURtRTtBQUUzRSw4QkFBTyw0QkFBcUJBLElBQXJCLENBQVAsRUFBbUNDLEVBQW5DLENBQXNDQyxPQUF0QyxDQUE4QyxLQUE5QztBQUNELEdBSEQ7QUFJRCxDQTNCRCIsImZpbGUiOiJfX3Rlc3RzX19cXGlzU3RhdGVsZXNzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkZXNjcmliZSwgaXQgfSA9IGdsb2JhbDtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHNob3VsZCBmcm9tICdzaG91bGQvYXMtZnVuY3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgaXNTdGF0ZWxlc3NDb21wb25lbnQgfSBmcm9tICcuLic7XHJcblxyXG5kZXNjcmliZSgnaXNTdGF0ZWxlc3NDb21wb25lbnQnLCAoKSA9PiB7XHJcbiAgZnVuY3Rpb24gUmVndWxhckZ1bmN0aW9uQ29tcG9uZW50KCkge1xyXG4gICAgcmV0dXJuIDxkaXYgLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBBcnJvd0Z1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4gPGRpdiAvPjtcclxuXHJcbiAgY2xhc3MgQ2xhc3NDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPGRpdiAvPjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGl0KCdkZXRlY3RzIHJlZ3VsYXIgZnVuY3Rpb25zIGFzIHN0YXRlbGVzcyBjb21wb25lbnRzJywgKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0eXBlIH0gPSA8UmVndWxhckZ1bmN0aW9uQ29tcG9uZW50IC8+O1xyXG4gICAgc2hvdWxkKGlzU3RhdGVsZXNzQ29tcG9uZW50KHR5cGUpKS5iZS5leGFjdGx5KHRydWUpO1xyXG4gIH0pO1xyXG5cclxuICBpdCgnZGV0ZWN0cyBhcnJvdyBmdW5jdGlvbnMgYXMgc3RhdGVsZXNzIGNvbXBvbmVudHMnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHR5cGUgfSA9IDxBcnJvd0Z1bmN0aW9uQ29tcG9uZW50IC8+O1xyXG4gICAgc2hvdWxkKGlzU3RhdGVsZXNzQ29tcG9uZW50KHR5cGUpKS5iZS5leGFjdGx5KHRydWUpO1xyXG4gIH0pO1xyXG5cclxuICBpdCgnZGV0ZWN0cyBjbGFzc2VzIGV4dGVuZGluZyBSZWFjdC5Db21wb25lbnQgYXMgc3RhdGVmdWwgY29tcG9uZW50cycsICgpID0+IHtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gPENsYXNzQ29tcG9uZW50IC8+O1xyXG4gICAgc2hvdWxkKGlzU3RhdGVsZXNzQ29tcG9uZW50KHR5cGUpKS5iZS5leGFjdGx5KGZhbHNlKTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==