'use strict';var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');var _server2 = _interopRequireDefault(_server);
var _asFunction = require('should/as-function');var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');var _2 = _interopRequireDefault(_);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _global = global,describe = _global.describe,it = _global.it;

describe('traverse', function () {
  it('capitalize all text', function () {var
    Foo = function (_React$Component) {(0, _inherits3.default)(Foo, _React$Component);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function () {function render()



          {
            return _react2.default.createElement('div', null,
              _react2.default.createElement('span', null, 'Foo:'), _react2.default.createElement('span', null, this.props.children));

          }return render;}() }]);return Foo;}(_react2.default.Component);Foo.propTypes = { children: _react2.default.PropTypes.node };

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
      Text: function () {function Text(path) {
          if (typeof path.node === 'string') {
            return path.node.toUpperCase();
          }
          return path.node;
        }return Text;}() });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcdHJhdmVyc2UuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZGVzY3JpYmUiLCJpdCIsIkZvbyIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiQmFyIiwib3JpZ2luYWwiLCJ0cmF2ZXJzZWQiLCJUZXh0IiwicGF0aCIsInRvVXBwZXJDYXNlIiwiZXhwZWN0ZWQiLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsImJlIiwiZXhhY3RseSJdLCJtYXBwaW5ncyI6IjtBQUNBLDhCO0FBQ0EsMEM7QUFDQSxnRDs7QUFFQSxzQiw4SUFMeUJBLE0sQ0FBakJDLFEsV0FBQUEsUSxDQUFVQyxFLFdBQUFBLEU7O0FBT2xCRCxTQUFTLFVBQVQsRUFBcUIsWUFBTTtBQUN6QkMsS0FBRyxxQkFBSCxFQUEwQixZQUFNO0FBQ3hCQyxPQUR3Qjs7OztBQUtuQjtBQUNQLG1CQUFPO0FBQ0wsMERBQU8sTUFBUCxDQURLLEVBQ2dCLDRDQUFPLEtBQUtDLEtBQUwsQ0FBV0MsUUFBbEIsQ0FEaEIsQ0FBUDs7QUFHRCxXQVQyQixtQ0FDWixnQkFBTUMsU0FETSxFQUN4QkgsR0FEd0IsQ0FFckJJLFNBRnFCLEdBRVQsRUFDakJGLFVBQVUsZ0JBQU1HLFNBQU4sQ0FBZ0JDLElBRFQsRUFGUzs7QUFXOUIsYUFBU0MsR0FBVCxDQUFhTixLQUFiLEVBQW9CO0FBQ2xCLGFBQU87QUFDTCxvREFBTyxNQUFQLENBREssRUFDZ0IsNENBQU9BLE1BQU1DLFFBQWIsQ0FEaEIsQ0FBUDs7QUFHRDtBQUNESyxRQUFJSCxTQUFKLEdBQWdCO0FBQ2RGLGdCQUFVLGdCQUFNRyxTQUFOLENBQWdCQyxJQURaLEVBQWhCOztBQUdBLFFBQU1FLFdBQVc7QUFDZixnREFBSyxLQUFMLENBRGU7QUFFZixnREFBSyxLQUFMLENBRmU7QUFHZixnREFBSyxLQUFMLENBSGU7QUFJZixnREFBSyxNQUFMLENBSmU7QUFLZjtBQUNFLHNDQUFDLEdBQUQsUUFBTSxNQUFOLENBREY7QUFFRSxzQ0FBQyxHQUFELFFBQU0sTUFBTixDQUZGLENBTGU7O0FBU2Y7QUFDRSxtREFBTSxDQUFOLENBREYsQ0FUZSxDQUFqQjs7O0FBYUEsUUFBTUMsWUFBWSxnQkFBU0QsUUFBVCxFQUFtQjtBQUNuQ0UsVUFEbUMsNkJBQzlCQyxJQUQ4QixFQUN4QjtBQUNULGNBQUcsT0FBT0EsS0FBS0wsSUFBWixLQUFxQixRQUF4QixFQUFrQztBQUNoQyxtQkFBT0ssS0FBS0wsSUFBTCxDQUFVTSxXQUFWLEVBQVA7QUFDRDtBQUNELGlCQUFPRCxLQUFLTCxJQUFaO0FBQ0QsU0FOa0MsaUJBQW5CLENBQWxCOztBQVFBLFFBQU1PLFdBQVc7QUFDZixnREFBSyxLQUFMLENBRGU7QUFFZixnREFBSyxLQUFMLENBRmU7QUFHZixnREFBSyxLQUFMLENBSGU7QUFJZixnREFBSyxNQUFMLENBSmU7QUFLZjtBQUNFO0FBQ0Usc0RBQU8sTUFBUCxDQURGLEVBQ3VCLDRDQUFPLE1BQVAsQ0FEdkIsQ0FERjs7QUFJRTtBQUNFLHNEQUFPLE1BQVAsQ0FERixFQUN1Qiw0Q0FBTyxNQUFQLENBRHZCLENBSkYsQ0FMZTs7O0FBYWY7QUFDRSxtREFBTSxDQUFOLENBREYsQ0FiZSxDQUFqQjs7O0FBaUJBO0FBQ0UscUJBQWVDLG9CQUFmLENBQW9DTCxTQUFwQyxDQURGO0FBRUVNLE1BRkYsQ0FFS0MsT0FGTDtBQUdFLHFCQUFlRixvQkFBZixDQUFvQ0QsUUFBcEMsQ0FIRjs7QUFLRCxHQTlERDtBQStERCxDQWhFRCIsImZpbGUiOiJfX3Rlc3RzX19cXHRyYXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkZXNjcmliZSwgaXQgfSA9IGdsb2JhbDtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgc2hvdWxkIGZyb20gJ3Nob3VsZC9hcy1mdW5jdGlvbic7XHJcblxyXG5pbXBvcnQgdHJhdmVyc2UgZnJvbSAnLi4nO1xyXG5cclxuZGVzY3JpYmUoJ3RyYXZlcnNlJywgKCkgPT4ge1xyXG4gIGl0KCdjYXBpdGFsaXplIGFsbCB0ZXh0JywgKCkgPT4ge1xyXG4gICAgY2xhc3MgRm9vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXHJcbiAgICAgIH07XHJcbiAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgIDxzcGFuPnsnRm9vOid9PC9zcGFuPjxzcGFuPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIEJhcihwcm9wcykge1xyXG4gICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8c3Bhbj57J0JhcjonfTwvc3Bhbj48c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxyXG4gICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBCYXIucHJvcFR5cGVzID0ge1xyXG4gICAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSA8dWw+XHJcbiAgICAgIDxsaT57J2Zvbyd9PC9saT5cclxuICAgICAgPGxpPnsnQmFyJ308L2xpPlxyXG4gICAgICA8bGk+eydCQVonfTwvbGk+XHJcbiAgICAgIDxsaT57J2J1WlonfTwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8Rm9vPnsnYmF6Wid9PC9Gb28+XHJcbiAgICAgICAgPEJhcj57J2ZvelonfTwvQmFyPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGRpdj57MX08L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+O1xyXG4gICAgY29uc3QgdHJhdmVyc2VkID0gdHJhdmVyc2Uob3JpZ2luYWwsIHtcclxuICAgICAgVGV4dChwYXRoKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHBhdGgubm9kZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIHJldHVybiBwYXRoLm5vZGUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGgubm9kZTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXhwZWN0ZWQgPSA8dWw+XHJcbiAgICAgIDxsaT57J0ZPTyd9PC9saT5cclxuICAgICAgPGxpPnsnQkFSJ308L2xpPlxyXG4gICAgICA8bGk+eydCQVonfTwvbGk+XHJcbiAgICAgIDxsaT57J0JVWlonfTwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+eydGb286J308L3NwYW4+PHNwYW4+eydCQVpaJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPnsnQmFyOid9PC9zcGFuPjxzcGFuPnsnRk9aWid9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGRpdj57MX08L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+O1xyXG4gICAgc2hvdWxkKFxyXG4gICAgICBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCh0cmF2ZXJzZWQpXHJcbiAgICApLmJlLmV4YWN0bHkoXHJcbiAgICAgIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGV4cGVjdGVkKVxyXG4gICAgKTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==