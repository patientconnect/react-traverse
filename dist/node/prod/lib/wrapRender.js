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
          return _temp = _class = function (_React$Component) {(0, _inherits3.default)(_class, _React$Component);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));}(0, _createClass3.default)(_class, [{ key: 'render', value: function render()


              {
                return transformNode(type(this.props));
              } }]);return _class;}(_react2.default.Component), _class.displayName = type.displayName || type.name, _class.propTypes = type.propTypes, _temp;

        }
        return function (_type) {(0, _inherits3.default)(_class2, _type);function _class2() {(0, _classCallCheck3.default)(this, _class2);return (0, _possibleConstructorReturn3.default)(this, (_class2.__proto__ || (0, _getPrototypeOf2.default)(_class2)).apply(this, arguments));}(0, _createClass3.default)(_class2, [{ key: 'render', value: function render()
            {
              return transformNode((0, _get3.default)(_class2.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class2.prototype), 'render', this).call(this));
            } }]);return _class2;}(type);

      }());
    }
    return memo.get(type);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBSZW5kZXIuanMiXSwibmFtZXMiOlsid3JhcFJlbmRlciIsIndyYXBSZW5kZXJNZW1vIiwidHJhbnNmb3JtTm9kZSIsImhhcyIsInNldCIsIm1lbW8iLCJnZXQiLCJ0eXBlIiwicHJvcHMiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS3dCQSxVLENBTHhCLDhCLDZDQUVBLDhELHdLQUVBLElBQU1DLGlCQUFpQix1QkFBdkIsQ0FDZSxTQUFTRCxVQUFULENBQW9CRSxhQUFwQixFQUFtQztBQUNoRCxNQUFHLENBQUNELGVBQWVFLEdBQWYsQ0FBbUJELGFBQW5CLENBQUosRUFBdUM7QUFDckNELG1CQUFlRyxHQUFmLENBQW1CRixhQUFuQixFQUFrQyx1QkFBbEM7QUFDRDtBQUNELE1BQU1HLE9BQU9KLGVBQWVLLEdBQWYsQ0FBbUJKLGFBQW5CLENBQWI7QUFDQSxTQUFPLFVBQUNLLElBQUQsRUFBVTtBQUNmLFFBQUcsQ0FBQ0YsS0FBS0YsR0FBTCxDQUFTSSxJQUFULENBQUosRUFBb0I7QUFDbEJGLFdBQUtELEdBQUwsQ0FBU0csSUFBVCxFQUFnQixZQUFNO0FBQ3BCLFlBQUcsb0NBQXFCQSxJQUFyQixDQUFILEVBQStCO0FBQzdCOzs7QUFHVztBQUNQLHVCQUFPTCxjQUFjSyxLQUFLLEtBQUtDLEtBQVYsQ0FBZCxDQUFQO0FBQ0QsZUFMSCxxQkFBcUIsZ0JBQU1DLFNBQTNCLFVBQ1NDLFdBRFQsR0FDdUJILEtBQUtHLFdBQUwsSUFBb0JILEtBQUtJLElBRGhELFNBRVNDLFNBRlQsR0FFcUJMLEtBQUtLLFNBRjFCOztBQU9EO0FBQ0Q7QUFDVztBQUNQLHFCQUFPViw2SUFBUDtBQUNELGFBSEgsc0JBQXFCSyxJQUFyQjs7QUFLRCxPQWZjLEVBQWY7QUFnQkQ7QUFDRCxXQUFPRixLQUFLQyxHQUFMLENBQVNDLElBQVQsQ0FBUDtBQUNELEdBcEJEO0FBcUJEIiwiZmlsZSI6IndyYXBSZW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGlzU3RhdGVsZXNzQ29tcG9uZW50IGZyb20gJy4vaXNTdGF0ZWxlc3NDb21wb25lbnQnO1xyXG5cclxuY29uc3Qgd3JhcFJlbmRlck1lbW8gPSBuZXcgV2Vha01hcCgpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cmFwUmVuZGVyKHRyYW5zZm9ybU5vZGUpIHtcclxuICBpZighd3JhcFJlbmRlck1lbW8uaGFzKHRyYW5zZm9ybU5vZGUpKSB7XHJcbiAgICB3cmFwUmVuZGVyTWVtby5zZXQodHJhbnNmb3JtTm9kZSwgbmV3IFdlYWtNYXAoKSk7XHJcbiAgfVxyXG4gIGNvbnN0IG1lbW8gPSB3cmFwUmVuZGVyTWVtby5nZXQodHJhbnNmb3JtTm9kZSk7XHJcbiAgcmV0dXJuICh0eXBlKSA9PiB7XHJcbiAgICBpZighbWVtby5oYXModHlwZSkpIHtcclxuICAgICAgbWVtby5zZXQodHlwZSwgKCgpID0+IHtcclxuICAgICAgICBpZihpc1N0YXRlbGVzc0NvbXBvbmVudCh0eXBlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XHJcbiAgICAgICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcclxuICAgICAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Ob2RlKHR5cGUodGhpcy5wcm9wcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyB0eXBlIHtcclxuICAgICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybU5vZGUoc3VwZXIucmVuZGVyKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lbW8uZ2V0KHR5cGUpO1xyXG4gIH07XHJcbn1cclxuIl19