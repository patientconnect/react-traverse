'use strict';var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _server = require('react-dom/server');var _server2 = _interopRequireDefault(_server);
var _sha = require('sha1');var _sha2 = _interopRequireDefault(_sha);
var _asFunction = require('should/as-function');var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');var _2 = _interopRequireDefault(_);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _global = global,describe = _global.describe,it = _global.it;

describe('transformComponents', function () {
  describe('replaces divs with spans', function () {
    function replaceDivsWithSpansInNode(node) {
      return (0, _2.default)(node, {
        DOMElement: function () {function DOMElement(path) {
            if (path.node.type !== 'div') {
              return path.defaultTraverse();
            }
            return _react2.default.createElement.apply(_react2.default, [
            'span',
            path.node.props].concat((0, _toConsumableArray3.default)(
            path.traverseChildren())));

          }return DOMElement;}() });

    }

    var replaceDivsWithSpansInComponent = (0, _.wrapRender)(replaceDivsWithSpansInNode);

    it('replaces in stateless components', function () {
      function Foo() {
        return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
      }

      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = _react2.default.createElement(TransformedFoo, null);
      var expected = _react2.default.createElement('span', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in stateful components', function () {var
      Foo = function (_React$Component) {(0, _inherits3.default)(Foo, _React$Component);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function () {function render()
            {
              return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
            }return render;}() }]);return Foo;}(_react2.default.Component);


      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = _react2.default.createElement(TransformedFoo, null);
      var expected = _react2.default.createElement('span', { className: 'foo' }, _react2.default.createElement('span', null, 'foo'));
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in nested stateless components', function () {
      function Bar() {
        return _react2.default.createElement('div', { className: 'bar' }, 'bar');
      }

      function Foo() {
        return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement(Bar, null));
      }

      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = _react2.default.createElement(TransformedFoo, null);
      var expected = _react2.default.createElement('span', { className: 'foo' },
        _react2.default.createElement('span', { className: 'bar' },
          'bar'));


      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in nested stateful components', function () {var
      Bar = function (_React$Component2) {(0, _inherits3.default)(Bar, _React$Component2);function Bar() {(0, _classCallCheck3.default)(this, Bar);return (0, _possibleConstructorReturn3.default)(this, (Bar.__proto__ || (0, _getPrototypeOf2.default)(Bar)).apply(this, arguments));}(0, _createClass3.default)(Bar, [{ key: 'render', value: function () {function render()
            {
              return _react2.default.createElement('div', { className: 'bar' }, 'bar');
            }return render;}() }]);return Bar;}(_react2.default.Component);var


      Foo = function (_React$Component3) {(0, _inherits3.default)(Foo, _React$Component3);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function () {function render()
            {
              return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement(Bar, null));
            }return render;}() }]);return Foo;}(_react2.default.Component);


      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = _react2.default.createElement(TransformedFoo, null);
      var expected = _react2.default.createElement('span', { className: 'foo' },
        _react2.default.createElement('span', { className: 'bar' },
          'bar'));


      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in nested mixed stateless and stateful components', function () {
      function Bar() {
        return _react2.default.createElement('div', { className: 'bar' }, 'bar');
      }var

      Foo = function (_React$Component4) {(0, _inherits3.default)(Foo, _React$Component4);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function () {function render()
            {
              return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement(Bar, null));
            }return render;}() }]);return Foo;}(_react2.default.Component);


      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = _react2.default.createElement(TransformedFoo, null);
      var expected = _react2.default.createElement('span', { className: 'foo' },
        _react2.default.createElement('span', { className: 'bar' },
          'bar'));


      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in complex components nested in a ReactElement', function () {
      function Bar() {
        return _react2.default.createElement('div', { className: 'bar' }, 'bar');
      }var

      Foo = function (_React$Component5) {(0, _inherits3.default)(Foo, _React$Component5);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function () {function render()
            {
              return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement(Bar, null));
            }return render;}() }]);return Foo;}(_react2.default.Component);


      var actual = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(
      _react2.default.createElement('div', { className: 'wrapper' },
        _react2.default.createElement(Foo, null)));


      var expected = _react2.default.createElement('span', { className: 'wrapper' },
        _react2.default.createElement('span', { className: 'foo' },
          _react2.default.createElement('span', { className: 'bar' },
            'bar')));



      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('decorates mixed stateless and stateful components', function () {var _dec, _class;
      function Bar() {
        return _react2.default.createElement('div', { className: 'bar' }, 'bar');
      }var


      TransformedFoo = (_dec = (0, _.transformComponents)(replaceDivsWithSpansInComponent), _dec(_class = function (_React$Component6) {(0, _inherits3.default)(TransformedFoo, _React$Component6);function TransformedFoo() {(0, _classCallCheck3.default)(this, TransformedFoo);return (0, _possibleConstructorReturn3.default)(this, (TransformedFoo.__proto__ || (0, _getPrototypeOf2.default)(TransformedFoo)).apply(this, arguments));}(0, _createClass3.default)(TransformedFoo, [{ key: 'render', value: function () {function render()
            {
              return _react2.default.createElement('div', { className: 'foo' }, _react2.default.createElement(Bar, null));
            }return render;}() }]);return TransformedFoo;}(_react2.default.Component)) || _class);


      var actual = _react2.default.createElement(TransformedFoo, null);
      var expected = _react2.default.createElement('span', { className: 'foo' },
        _react2.default.createElement('span', { className: 'bar' },
          'bar'));


      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });
  });

  describe('hashes all classNames', function () {
    var HASH_LENGTH = 10;

    function hashClassName(hashKey) {
      return function (className) {return (0, _sha2.default)(className + ':' + hashKey).slice(0, HASH_LENGTH);}; // eslint-disable-line new-cap
    }

    function hashAllClassNamesInNode(hashKey) {
      return function (node) {return (0, _2.default)(node, {
          DOMElement: function () {function DOMElement(path) {
              if (typeof path.node.props.className !== 'string') {
                return path.defaultTraverse();
              }
              var nextProps = (0, _extends3.default)({}, path.node.props);
              nextProps.className = path.node.props.className.
              split(' ').
              map(hashClassName(hashKey)).
              join(' ');
              return _react2.default.cloneElement.apply(_react2.default, [
              path.node,
              nextProps].concat((0, _toConsumableArray3.default)(
              path.traverseChildren())));

            }return DOMElement;}() });};

    }

    function createTransformComponent(hashKey) {
      return (0, _.wrapRender)(hashAllClassNamesInNode(hashKey));
    }

    it('hashes all classNames correctly', function () {var _dec2, _class2;
      var hashKey = 'foobar';

      function Bar() {
        return _react2.default.createElement('div', { className: 'bar' }, 'bar');
      }var


      Foo = (_dec2 = (0, _.transformComponents)(createTransformComponent(hashKey)), _dec2(_class2 = function (_React$Component7) {(0, _inherits3.default)(Foo, _React$Component7);function Foo() {(0, _classCallCheck3.default)(this, Foo);return (0, _possibleConstructorReturn3.default)(this, (Foo.__proto__ || (0, _getPrototypeOf2.default)(Foo)).apply(this, arguments));}(0, _createClass3.default)(Foo, [{ key: 'render', value: function () {function render()
            {
              return _react2.default.createElement('div', { className: 'foo' },
                _react2.default.createElement('span', { className: 'foo-bar bar-foo' },
                  _react2.default.createElement(Bar, null)));


            }return render;}() }]);return Foo;}(_react2.default.Component)) || _class2);


      var actual = _react2.default.createElement(Foo, null);
      var expected = _react2.default.createElement('div', { className: hashClassName(hashKey)('foo') },
        _react2.default.createElement('span', { className: hashClassName(hashKey)('foo-bar') + ' ' + hashClassName(hashKey)('bar-foo') },
          _react2.default.createElement('div', { className: hashClassName(hashKey)('bar') },
            'bar')));



      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcdHJhbnNmb3JtQ29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJkZXNjcmliZSIsIml0IiwicmVwbGFjZURpdnNXaXRoU3BhbnNJbk5vZGUiLCJub2RlIiwiRE9NRWxlbWVudCIsInBhdGgiLCJ0eXBlIiwiZGVmYXVsdFRyYXZlcnNlIiwiY3JlYXRlRWxlbWVudCIsInByb3BzIiwidHJhdmVyc2VDaGlsZHJlbiIsInJlcGxhY2VEaXZzV2l0aFNwYW5zSW5Db21wb25lbnQiLCJGb28iLCJUcmFuc2Zvcm1lZEZvbyIsImFjdHVhbCIsImV4cGVjdGVkIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJiZSIsImV4YWN0bHkiLCJDb21wb25lbnQiLCJCYXIiLCJIQVNIX0xFTkdUSCIsImhhc2hDbGFzc05hbWUiLCJoYXNoS2V5IiwiY2xhc3NOYW1lIiwic2xpY2UiLCJoYXNoQWxsQ2xhc3NOYW1lc0luTm9kZSIsIm5leHRQcm9wcyIsInNwbGl0IiwibWFwIiwiam9pbiIsImNsb25lRWxlbWVudCIsImNyZWF0ZVRyYW5zZm9ybUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtBQUNBLDhCO0FBQ0EsMEM7QUFDQSwyQjtBQUNBLGdEOztBQUVBLHNCLDhJQU55QkEsTSxDQUFqQkMsUSxXQUFBQSxRLENBQVVDLEUsV0FBQUEsRTs7QUFRbEJELFNBQVMscUJBQVQsRUFBZ0MsWUFBTTtBQUNwQ0EsV0FBUywwQkFBVCxFQUFxQyxZQUFNO0FBQ3pDLGFBQVNFLDBCQUFULENBQW9DQyxJQUFwQyxFQUEwQztBQUN4QyxhQUFPLGdCQUFTQSxJQUFULEVBQWU7QUFDcEJDLGtCQURvQixtQ0FDVEMsSUFEUyxFQUNIO0FBQ2YsZ0JBQUdBLEtBQUtGLElBQUwsQ0FBVUcsSUFBVixLQUFtQixLQUF0QixFQUE2QjtBQUMzQixxQkFBT0QsS0FBS0UsZUFBTCxFQUFQO0FBQ0Q7QUFDRCxtQkFBTyxnQkFBTUMsYUFBTjtBQUNMLGtCQURLO0FBRUxILGlCQUFLRixJ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LG1DQVF4QixnQkFBTUosU0FSa0I7OztBQWtCMUMsVUFBTUwsU0FBUyw4QkFBQyxHQUFELE9BQWY7QUFDQSxVQUFNQyxXQUFXLHVDQUFLLFdBQVdPLGNBQWNDLE9BQWQsRUFBdUIsS0FBdkIsQ0FBaEI7QUFDZixnREFBTSxXQUFjRCxjQUFjQyxPQUFkLEVBQXVCLFNBQXZCLENBQWQsU0FBbURELGNBQWNDLE9BQWQsRUFBdUIsU0FBdkIsQ0FBekQ7QUFDRSxpREFBSyxXQUFXRCxjQUFjQyxPQUFkLEVBQXVCLEtBQXZCLENBQWhCO0FBQ0csaUJBREgsQ0FERixDQURlLENBQWpCOzs7O0FBT0EsZ0NBQU8saUJBQWVQLG9CQUFmLENBQW9DRixNQUFwQyxDQUFQLEVBQW9ERyxFQUFwRCxDQUF1REMsT0FBdkQsQ0FBK0QsaUJBQWVGLG9CQUFmLENBQW9DRCxRQUFwQyxDQUEvRDtBQUNELEtBM0JEO0FBNEJELEdBM0REO0FBNERELENBdE5EIiwiZmlsZSI6Il9fdGVzdHNfX1xcdHJhbnNmb3JtQ29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVzY3JpYmUsIGl0IH0gPSBnbG9iYWw7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHNoYTEgZnJvbSAnc2hhMSc7XHJcbmltcG9ydCBzaG91bGQgZnJvbSAnc2hvdWxkL2FzLWZ1bmN0aW9uJztcclxuXHJcbmltcG9ydCB0cmF2ZXJzZSwgeyB0cmFuc2Zvcm1Db21wb25lbnRzLCB3cmFwUmVuZGVyIH0gZnJvbSAnLi4nO1xyXG5cclxuZGVzY3JpYmUoJ3RyYW5zZm9ybUNvbXBvbmVudHMnLCAoKSA9PiB7XHJcbiAgZGVzY3JpYmUoJ3JlcGxhY2VzIGRpdnMgd2l0aCBzcGFucycsICgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VEaXZzV2l0aFNwYW5zSW5Ob2RlKG5vZGUpIHtcclxuICAgICAgcmV0dXJuIHRyYXZlcnNlKG5vZGUsIHtcclxuICAgICAgICBET01FbGVtZW50KHBhdGgpIHtcclxuICAgICAgICAgIGlmKHBhdGgubm9kZS50eXBlICE9PSAnZGl2Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0aC5kZWZhdWx0VHJhdmVyc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnc3BhbicsXHJcbiAgICAgICAgICAgIHBhdGgubm9kZS5wcm9wcyxcclxuICAgICAgICAgICAgLi4ucGF0aC50cmF2ZXJzZUNoaWxkcmVuKCksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VEaXZzV2l0aFNwYW5zSW5Db21wb25lbnQgPSB3cmFwUmVuZGVyKHJlcGxhY2VEaXZzV2l0aFNwYW5zSW5Ob2RlKTtcclxuXHJcbiAgICBpdCgncmVwbGFjZXMgaW4gc3RhdGVsZXNzIGNvbXBvbmVudHMnLCAoKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIEZvbygpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvbyc+PHNwYW4+eydmb28nfTwvc3Bhbj48L2Rpdj47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IFRyYW5zZm9ybWVkRm9vID0gdHJhbnNmb3JtQ29tcG9uZW50cyhyZXBsYWNlRGl2c1dpdGhTcGFuc0luQ29tcG9uZW50KShGb28pO1xyXG4gICAgICBjb25zdCBhY3R1YWwgPSA8VHJhbnNmb3JtZWRGb28gLz47XHJcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gPHNwYW4gY2xhc3NOYW1lPSdmb28nPjxzcGFuPnsnZm9vJ308L3NwYW4+PC9zcGFuPjtcclxuICAgICAgc2hvdWxkKFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGFjdHVhbCkpLmJlLmV4YWN0bHkoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZXhwZWN0ZWQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdyZXBsYWNlcyBpbiBzdGF0ZWZ1bCBjb21wb25lbnRzJywgKCkgPT4ge1xyXG4gICAgICBjbGFzcyBGb28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZm9vJz48c3Bhbj57J2Zvbyd9PC9zcGFuPjwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IFRyYW5zZm9ybWVkRm9vID0gdHJhbnNmb3JtQ29tcG9uZW50cyhyZXBsYWNlRGl2c1dpdGhTcGFuc0luQ29tcG9uZW50KShGb28pO1xyXG4gICAgICBjb25zdCBhY3R1YWwgPSA8VHJhbnNmb3JtZWRGb28gLz47XHJcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gPHNwYW4gY2xhc3NOYW1lPSdmb28nPjxzcGFuPnsnZm9vJ308L3NwYW4+PC9zcGFuPjtcclxuICAgICAgc2hvdWxkKFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGFjdHVhbCkpLmJlLmV4YWN0bHkoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZXhwZWN0ZWQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdyZXBsYWNlcyBpbiBuZXN0ZWQgc3RhdGVsZXNzIGNvbXBvbmVudHMnLCAoKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIEJhcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Jhcic+eydiYXInfTwvZGl2PjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gRm9vKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZm9vJz48QmFyIC8+PC9kaXY+O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBUcmFuc2Zvcm1lZEZvbyA9IHRyYW5zZm9ybUNvbXBvbmVudHMocmVwbGFjZURpdnNXaXRoU3BhbnNJbkNvbXBvbmVudCkoRm9vKTtcclxuICAgICAgY29uc3QgYWN0dWFsID0gPFRyYW5zZm9ybWVkRm9vIC8+O1xyXG4gICAgICBjb25zdCBleHBlY3RlZCA9IDxzcGFuIGNsYXNzTmFtZT0nZm9vJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Jhcic+XHJcbiAgICAgICAgICB7J2Jhcid9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+O1xyXG4gICAgICBzaG91bGQoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoYWN0dWFsKSkuYmUuZXhhY3RseShSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChleHBlY3RlZCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ3JlcGxhY2VzIGluIG5lc3RlZCBzdGF0ZWZ1bCBjb21wb25lbnRzJywgKCkgPT4ge1xyXG4gICAgICBjbGFzcyBCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nYmFyJz57J2Jhcid9PC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY2xhc3MgRm9vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvbyc+PEJhciAvPjwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IFRyYW5zZm9ybWVkRm9vID0gdHJhbnNmb3JtQ29tcG9uZW50cyhyZXBsYWNlRGl2c1dpdGhTcGFuc0luQ29tcG9uZW50KShGb28pO1xyXG4gICAgICBjb25zdCBhY3R1YWwgPSA8VHJhbnNmb3JtZWRGb28gLz47XHJcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gPHNwYW4gY2xhc3NOYW1lPSdmb28nPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmFyJz5cclxuICAgICAgICAgIHsnYmFyJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj47XHJcbiAgICAgIHNob3VsZChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChhY3R1YWwpKS5iZS5leGFjdGx5KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGV4cGVjdGVkKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgncmVwbGFjZXMgaW4gbmVzdGVkIG1peGVkIHN0YXRlbGVzcyBhbmQgc3RhdGVmdWwgY29tcG9uZW50cycsICgpID0+IHtcclxuICAgICAgZnVuY3Rpb24gQmFyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nYmFyJz57J2Jhcid9PC9kaXY+O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjbGFzcyBGb28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZm9vJz48QmFyIC8+PC9kaXY+O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgVHJhbnNmb3JtZWRGb28gPSB0cmFuc2Zvcm1Db21wb25lbnRzKHJlcGxhY2VEaXZzV2l0aFNwYW5zSW5Db21wb25lbnQpKEZvbyk7XHJcbiAgICAgIGNvbnN0IGFjdHVhbCA9IDxUcmFuc2Zvcm1lZEZvbyAvPjtcclxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSA8c3BhbiBjbGFzc05hbWU9J2Zvbyc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiYXInPlxyXG4gICAgICAgICAgeydiYXInfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9zcGFuPjtcclxuICAgICAgc2hvdWxkKFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGFjdHVhbCkpLmJlLmV4YWN0bHkoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZXhwZWN0ZWQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdyZXBsYWNlcyBpbiBjb21wbGV4IGNvbXBvbmVudHMgbmVzdGVkIGluIGEgUmVhY3RFbGVtZW50JywgKCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBCYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdiYXInPnsnYmFyJ308L2Rpdj47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNsYXNzIEZvbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmb28nPjxCYXIgLz48L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhY3R1YWwgPSB0cmFuc2Zvcm1Db21wb25lbnRzKHJlcGxhY2VEaXZzV2l0aFNwYW5zSW5Db21wb25lbnQpKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cclxuICAgICAgICAgIDxGb28gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSA8c3BhbiBjbGFzc05hbWU9J3dyYXBwZXInPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9vJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmFyJz5cclxuICAgICAgICAgICAgeydiYXInfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9zcGFuPjtcclxuICAgICAgc2hvdWxkKFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGFjdHVhbCkpLmJlLmV4YWN0bHkoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZXhwZWN0ZWQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdkZWNvcmF0ZXMgbWl4ZWQgc3RhdGVsZXNzIGFuZCBzdGF0ZWZ1bCBjb21wb25lbnRzJywgKCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBCYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdiYXInPnsnYmFyJ308L2Rpdj47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEB0cmFuc2Zvcm1Db21wb25lbnRzKHJlcGxhY2VEaXZzV2l0aFNwYW5zSW5Db21wb25lbnQpXHJcbiAgICAgIGNsYXNzIFRyYW5zZm9ybWVkRm9vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvbyc+PEJhciAvPjwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFjdHVhbCA9IDxUcmFuc2Zvcm1lZEZvbyAvPjtcclxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSA8c3BhbiBjbGFzc05hbWU9J2Zvbyc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiYXInPlxyXG4gICAgICAgICAgeydiYXInfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9zcGFuPjtcclxuICAgICAgc2hvdWxkKFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGFjdHVhbCkpLmJlLmV4YWN0bHkoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZXhwZWN0ZWQpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBkZXNjcmliZSgnaGFzaGVzIGFsbCBjbGFzc05hbWVzJywgKCkgPT4ge1xyXG4gICAgY29uc3QgSEFTSF9MRU5HVEggPSAxMDtcclxuXHJcbiAgICBmdW5jdGlvbiBoYXNoQ2xhc3NOYW1lKGhhc2hLZXkpIHtcclxuICAgICAgcmV0dXJuIChjbGFzc05hbWUpID0+IHNoYTEoYCR7Y2xhc3NOYW1lfToke2hhc2hLZXl9YCkuc2xpY2UoMCwgSEFTSF9MRU5HVEgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNoQWxsQ2xhc3NOYW1lc0luTm9kZShoYXNoS2V5KSB7XHJcbiAgICAgIHJldHVybiAobm9kZSkgPT4gdHJhdmVyc2Uobm9kZSwge1xyXG4gICAgICAgIERPTUVsZW1lbnQocGF0aCkge1xyXG4gICAgICAgICAgaWYodHlwZW9mIHBhdGgubm9kZS5wcm9wcy5jbGFzc05hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoLmRlZmF1bHRUcmF2ZXJzZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbmV4dFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcGF0aC5ub2RlLnByb3BzKTtcclxuICAgICAgICAgIG5leHRQcm9wcy5jbGFzc05hbWUgPSBwYXRoLm5vZGUucHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgIC5tYXAoaGFzaENsYXNzTmFtZShoYXNoS2V5KSlcclxuICAgICAgICAgIC5qb2luKCcgJyk7XHJcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxyXG4gICAgICAgICAgICBwYXRoLm5vZGUsXHJcbiAgICAgICAgICAgIG5leHRQcm9wcyxcclxuICAgICAgICAgICAgLi4ucGF0aC50cmF2ZXJzZUNoaWxkcmVuKCksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybUNvbXBvbmVudChoYXNoS2V5KSB7XHJcbiAgICAgIHJldHVybiB3cmFwUmVuZGVyKGhhc2hBbGxDbGFzc05hbWVzSW5Ob2RlKGhhc2hLZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpdCgnaGFzaGVzIGFsbCBjbGFzc05hbWVzIGNvcnJlY3RseScsICgpID0+IHtcclxuICAgICAgY29uc3QgaGFzaEtleSA9ICdmb29iYXInO1xyXG5cclxuICAgICAgZnVuY3Rpb24gQmFyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nYmFyJz57J2Jhcid9PC9kaXY+O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAdHJhbnNmb3JtQ29tcG9uZW50cyhjcmVhdGVUcmFuc2Zvcm1Db21wb25lbnQoaGFzaEtleSkpXHJcbiAgICAgIGNsYXNzIEZvbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmb28nPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Zvby1iYXIgYmFyLWZvbyc+XHJcbiAgICAgICAgICAgICAgPEJhciAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhY3R1YWwgPSA8Rm9vIC8+O1xyXG4gICAgICBjb25zdCBleHBlY3RlZCA9IDxkaXYgY2xhc3NOYW1lPXtoYXNoQ2xhc3NOYW1lKGhhc2hLZXkpKCdmb28nKX0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtoYXNoQ2xhc3NOYW1lKGhhc2hLZXkpKCdmb28tYmFyJyl9ICR7aGFzaENsYXNzTmFtZShoYXNoS2V5KSgnYmFyLWZvbycpfWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hhc2hDbGFzc05hbWUoaGFzaEtleSkoJ2JhcicpfT5cclxuICAgICAgICAgICAgeydiYXInfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj47XHJcbiAgICAgIHNob3VsZChSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChhY3R1YWwpKS5iZS5leGFjdGx5KFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGV4cGVjdGVkKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==