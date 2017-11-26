'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _get2 = require('babel-runtime/helpers/get');var _get3 = _interopRequireDefault(_get2);var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _weakMap = require('babel-runtime/core-js/weak-map');var _weakMap2 = _interopRequireDefault(_weakMap);exports.default =




wrapRender;var _react = require('react');var _react2 = _interopRequireDefault(_react);var _isStatelessComponent = require('./isStatelessComponent');var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var wrapRenderMemo = new _weakMap2.default();function wrapRender(transformNode) {
  if (!wrapRenderMemo.has(transformNode)) {
    wrapRenderMemo.set(transformNode, new _weakMap2.default());
  }
  var memo = wrapRenderMemo.get(transformNode);
  return function (type) {
    if (!memo.has(type)) {
      memo.set(type, function () {
        if ((0, _isStatelessComponent2.default)(type)) {var _class, _temp;
          return _temp = _class = function (_React$Component) {(0, _inherits3.default)(_class, _React$Component);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));}(0, _createClass3.default)(_class, [{ key: 'render', value: function () {function render()


                {
                  return transformNode(type(this.props));
                }return render;}() }]);return _class;}(_react2.default.Component), _class.displayName = type.displayName || type.name, _class.propTypes = type.propTypes, _temp;

        }
        return function (_type) {(0, _inherits3.default)(_class2, _type);function _class2() {(0, _classCallCheck3.default)(this, _class2);return (0, _possibleConstructorReturn3.default)(this, (_class2.__proto__ || (0, _getPrototypeOf2.default)(_class2)).apply(this, arguments));}(0, _createClass3.default)(_class2, [{ key: 'render', value: function () {function render()
              {
                return transformNode((0, _get3.default)(_class2.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class2.prototype), 'render', this).call(this));
              }return render;}() }]);return _class2;}(type);

      }());
    }
    return memo.get(type);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBSZW5kZXIuanMiXSwibmFtZXMiOlsid3JhcFJlbmRlciIsIndyYXBSZW5kZXJNZW1vIiwidHJhbnNmb3JtTm9kZSIsImhhcyIsInNldCIsIm1lbW8iLCJnZXQiLCJ0eXBlIiwicHJvcHMiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS3dCQSxVLENBTHhCLDhCLDZDQUVBLDhELHdLQUVBLElBQU1DLGlCQUFpQix1QkFBdkIsQ0FDZSxTQUFTRCxVQUFULENBQW9CRSxhQUFwQixFQUFtQztBQUNoRCxNQUFHLENBQUNELGVBQWVFLEdBQWYsQ0FBbUJELGFBQW5CLENBQUosRUFBdUM7QUFDckNELG1CQUFlRyxHQUFmLENBQW1CRixhQUFuQixFQUFrQyx1QkFBbEM7QUFDRDtBQUNELE1BQU1HLE9BQU9KLGVBQWVLLEdBQWYsQ0FBbUJKLGFBQW5CLENBQWI7QUFDQSxTQUFPLFVBQUNLLElBQUQsRUFBVTtBQUNmLFFBQUcsQ0FBQ0YsS0FBS0YsR0FBTCxDQUFTSSxJQUFULENBQUosRUFBb0I7QUFDbEJGLFdBQUtELEdBQUwsQ0FBU0csSUFBVCxFQUFnQixZQUFNO0FBQ3BCLFlBQUcsb0NBQXFCQSxJQUFyQixDQUFILEVBQStCO0FBQzdCOzs7QUFHVztBQUNQLHlCQUFPTCxjQUFjSyxLQUFLLEtBQUtDLEtBQVYsQ0FBZCxDQUFQO0FBQ0QsaUJBTEgsc0NBQXFCLGdCQUFNQyxTQUEzQixVQUNTQyxXQURULEdBQ3VCSCxLQUFLRyxXQUFMLElBQW9CSCxLQUFLSSxJQURoRCxTQUVTQyxTQUZULEdBRXFCTCxLQUFLSyxTQUYxQjs7QUFPRDtBQUNEO0FBQ1c7QUFDUCx1QkFBT1YsNklBQVA7QUFDRCxlQUhILHVDQUFxQkssSUFBckI7O0FBS0QsT0FmYyxFQUFmO0FBZ0JEO0FBQ0QsV0FBT0YsS0FBS0MsR0FBTCxDQUFTQyxJQUFULENBQVA7QUFDRCxHQXBCRDtBQXFCRCIsImZpbGUiOiJ3cmFwUmVuZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBpc1N0YXRlbGVzc0NvbXBvbmVudCBmcm9tICcuL2lzU3RhdGVsZXNzQ29tcG9uZW50JztcclxuXHJcbmNvbnN0IHdyYXBSZW5kZXJNZW1vID0gbmV3IFdlYWtNYXAoKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcFJlbmRlcih0cmFuc2Zvcm1Ob2RlKSB7XHJcbiAgaWYoIXdyYXBSZW5kZXJNZW1vLmhhcyh0cmFuc2Zvcm1Ob2RlKSkge1xyXG4gICAgd3JhcFJlbmRlck1lbW8uc2V0KHRyYW5zZm9ybU5vZGUsIG5ldyBXZWFrTWFwKCkpO1xyXG4gIH1cclxuICBjb25zdCBtZW1vID0gd3JhcFJlbmRlck1lbW8uZ2V0KHRyYW5zZm9ybU5vZGUpO1xyXG4gIHJldHVybiAodHlwZSkgPT4ge1xyXG4gICAgaWYoIW1lbW8uaGFzKHR5cGUpKSB7XHJcbiAgICAgIG1lbW8uc2V0KHR5cGUsICgoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNTdGF0ZWxlc3NDb21wb25lbnQodHlwZSkpIHtcclxuICAgICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lO1xyXG4gICAgICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XHJcbiAgICAgICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtTm9kZSh0eXBlKHRoaXMucHJvcHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgdHlwZSB7XHJcbiAgICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Ob2RlKHN1cGVyLnJlbmRlcigpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZW1vLmdldCh0eXBlKTtcclxuICB9O1xyXG59XHJcbiJdfQ==