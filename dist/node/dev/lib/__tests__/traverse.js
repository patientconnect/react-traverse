'use strict';var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');var _server2 = _interopRequireDefault(_server);
var _asFunction = require('should/as-function');var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');var _2 = _interopRequireDefault(_);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _global = global,describe = _global.describe,it = _global.it;

describe('traverse', function () {
  it('capitalize all text', function () {var
    Foo = function (_React$Component) {(0, _inherits3.default)(Foo, _React$Component);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function render()



        {
          return _react2.default.createElement('div', null,
            _react2.default.createElement('span', null, 'Foo:'), _react2.default.createElement('span', null, this.props.children));

        } }]);return Foo;}(_react2.default.Component);Foo.propTypes = { children: _react2.default.PropTypes.node };

    function Bar(props) {
      return _react2.default.createElement('div', null,
        _react2.default.createElement('span', null, 'Bar:'), _react2.default.createElement('span', null, props.children));

    }
    Bar.propTypes = {
      children: _react2.default.PropTypes.node };

    var original = _react2.default.createElement('ul', null,
      _react2.default.createElement('li', null, 'foo'),
      _react2.default.createElement('li', null, 'Bar'),
      _react2.default.createElement('li', null, 'BAZ'),
      _react2.default.createElement('li', null, 'buZZ'),
      _react2.default.createElement('li', null,
        _react2.default.createElement(Foo, null, 'bazZ'),
        _react2.default.createElement(Bar, null, 'fozZ')),

      _react2.default.createElement('li', null,
        _react2.default.createElement('div', null, 1)));


    var traversed = (0, _2.default)(original, {
      Text: function Text(path) {
        if (typeof path.node === 'string') {
          return path.node.toUpperCase();
        }
        return path.node;
      } });

    var expected = _react2.default.createElement('ul', null,
      _react2.default.createElement('li', null, 'FOO'),
      _react2.default.createElement('li', null, 'BAR'),
      _react2.default.createElement('li', null, 'BAZ'),
      _react2.default.createElement('li', null, 'BUZZ'),
      _react2.default.createElement('li', null,
        _react2.default.createElement('div', null,
          _react2.default.createElement('span', null, 'Foo:'), _react2.default.createElement('span', null, 'BAZZ')),

        _react2.default.createElement('div', null,
          _react2.default.createElement('span', null, 'Bar:'), _react2.default.createElement('span', null, 'FOZZ'))),


      _react2.default.createElement('li', null,
        _react2.default.createElement('div', null, 1)));


    (0, _asFunction2.default)(
    _server2.default.renderToStaticMarkup(traversed)).
    be.exactly(
    _server2.default.renderToStaticMarkup(expected));

  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcdHJhdmVyc2UuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZGVzY3JpYmUiLCJpdCIsIkZvbyIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiQmFyIiwib3JpZ2luYWwiLCJ0cmF2ZXJzZWQiLCJUZXh0IiwicGF0aCIsInRvVXBwZXJDYXNlIiwiZXhwZWN0ZWQiLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsImJlIiwiZXhhY3RseSJdLCJtYXBwaW5ncyI6IjtBQUNBLDhCO0FBQ0EsMEM7QUFDQSxnRDs7QUFFQSxzQiw4SUFMeUJBLE0sQ0FBakJDLFEsV0FBQUEsUSxDQUFVQyxFLFdBQUFBLEU7O0FBT2xCRCxTQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QkMsS0FBRyxxQkFBSCxFQUEwQixZQUFNO0FBQ3hCQyxPQUR3Qjs7OztBQUtuQjtBQUNQLGlCQUFPO0FBQ0wsd0RBQU8sTUFBUCxDQURLLEVBQ2dCLDRDQUFPLEtBQUtDLEtBQUwsQ0FBV0MsUUFBbEIsQ0FEaEIsQ0FBUDs7QUFHRCxTQVQyQixrQkFDWixnQkFBTUMsU0FETSxFQUN4QkgsR0FEd0IsQ0FFckJJLFNBRnFCLEdBRVQsRUFDakJGLFVBQVUsZ0JBQU1HLFNBQU4sQ0FBZ0JDLElBRFQsRUFGUzs7QUFXOUIsYUFBU0MsR0FBVCxDQUFhTixLQUFiLEVBQW9CO0FBQ2xCLGFBQU87QUFDTCxvREFBTyxNQUFQLENBREssRUFDZ0IsNENBQU9BLE1BQU1DLFFBQWIsQ0FEaEIsQ0FBUDs7QUFHRDtBQUNESyxRQUFJSCxTQUFKLEdBQWdCO0FBQ2RGLGdCQUFVLGdCQUFNRyxTQUFOLENBQWdCQyxJQURaLEVBQWhCOztBQUdBLFFBQU1FLFdBQVc7QUFDZixnREFBSyxLQUFMLENBRGU7QUFFZixnREFBSyxLQUFMLENBRmU7QUFHZixnREFBSyxLQUFMLENBSGU7QUFJZixnREFBSyxNQUFMLENBSmU7QUFLZjtBQUNFLHNDQUFDLEdBQUQsUUFBTSxNQUFOLENBREY7QUFFRSxzQ0FBQyxHQUFELFFBQU0sTUFBTixDQUZGLENBTGU7O0FBU2Y7QUFDRSxtREFBTSxDQUFOLENBREYsQ0FUZSxDQUFqQjs7O0FBYUEsUUFBTUMsWUFBWSxnQkFBU0QsUUFBVCxFQUFtQjtBQUNuQ0UsVUFEbUMsZ0JBQzlCQyxJQUQ4QixFQUN4QjtBQUNULFlBQUcsT0FBT0EsS0FBS0wsSUFBWixLQUFxQixRQUF4QixFQUFrQztBQUNoQyxpQkFBT0ssS0FBS0wsSUFBTCxDQUFVTSxXQUFWLEVBQVA7QUFDRDtBQUNELGVBQU9ELEtBQUtMLElBQVo7QUFDRCxPQU5rQyxFQUFuQixDQUFsQjs7QUFRQSxRQUFNTyxXQUFXO0FBQ2YsZ0RBQUssS0FBTCxDQURlO0FBRWYsZ0RBQUssS0FBTCxDQUZlO0FBR2YsZ0RBQUssS0FBTCxDQUhlO0FBSWYsZ0RBQUssTUFBTCxDQUplO0FBS2Y7QUFDRTtBQUNFLHNEQUFPLE1BQVAsQ0FERixFQUN1Qiw0Q0FBTyxNQUFQLENBRHZCLENBREY7O0FBSUU7QUFDRSxzREFBTyxNQUFQLENBREYsRUFDdUIsNENBQU8sTUFBUCxDQUR2QixDQUpGLENBTGU7OztBQWFmO0FBQ0UsbURBQU0sQ0FBTixDQURGLENBYmUsQ0FBakI7OztBQWlCQTtBQUNFLHFCQUFlQyxvQkFBZixDQUFvQ0wsU0FBcEMsQ0FERjtBQUVFTSxNQUZGLENBRUtDLE9BRkw7QUFHRSxxQkFBZUYsb0JBQWYsQ0FBb0NELFFBQXBDLENBSEY7O0FBS0QsR0E5REQ7QUErREQsQ0FoRUQiLCJmaWxlIjoiX190ZXN0c19fXFx0cmF2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVzY3JpYmUsIGl0IH0gPSBnbG9iYWw7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHNob3VsZCBmcm9tICdzaG91bGQvYXMtZnVuY3Rpb24nO1xyXG5cclxuaW1wb3J0IHRyYXZlcnNlIGZyb20gJy4uJztcclxuXHJcbmRlc2NyaWJlKCd0cmF2ZXJzZScsICgpID0+IHtcclxuICBpdCgnY2FwaXRhbGl6ZSBhbGwgdGV4dCcsICgpID0+IHtcclxuICAgIGNsYXNzIEZvbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5ub2RlLFxyXG4gICAgICB9O1xyXG4gICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57J0ZvbzonfTwvc3Bhbj48c3Bhbj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBCYXIocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+eydCYXI6J308L3NwYW4+PHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cclxuICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgQmFyLnByb3BUeXBlcyA9IHtcclxuICAgICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5ub2RlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9yaWdpbmFsID0gPHVsPlxyXG4gICAgICA8bGk+eydmb28nfTwvbGk+XHJcbiAgICAgIDxsaT57J0Jhcid9PC9saT5cclxuICAgICAgPGxpPnsnQkFaJ308L2xpPlxyXG4gICAgICA8bGk+eydidVpaJ308L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPEZvbz57J2JhelonfTwvRm9vPlxyXG4gICAgICAgIDxCYXI+eydmb3paJ308L0Jhcj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxkaXY+ezF9PC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPjtcclxuICAgIGNvbnN0IHRyYXZlcnNlZCA9IHRyYXZlcnNlKG9yaWdpbmFsLCB7XHJcbiAgICAgIFRleHQocGF0aCkge1xyXG4gICAgICAgIGlmKHR5cGVvZiBwYXRoLm5vZGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGF0aC5ub2RlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoLm5vZGU7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGV4cGVjdGVkID0gPHVsPlxyXG4gICAgICA8bGk+eydGT08nfTwvbGk+XHJcbiAgICAgIDxsaT57J0JBUid9PC9saT5cclxuICAgICAgPGxpPnsnQkFaJ308L2xpPlxyXG4gICAgICA8bGk+eydCVVpaJ308L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPnsnRm9vOid9PC9zcGFuPjxzcGFuPnsnQkFaWid9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57J0JhcjonfTwvc3Bhbj48c3Bhbj57J0ZPWlonfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxkaXY+ezF9PC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPjtcclxuICAgIHNob3VsZChcclxuICAgICAgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAodHJhdmVyc2VkKVxyXG4gICAgKS5iZS5leGFjdGx5KFxyXG4gICAgICBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChleHBlY3RlZClcclxuICAgICk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=