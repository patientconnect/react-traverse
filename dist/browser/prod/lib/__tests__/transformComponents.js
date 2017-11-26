'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

var _asFunction = require('should/as-function');

var _asFunction2 = _interopRequireDefault(_asFunction);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;

var _ref = (0, _jsx3.default)('div', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref2 = (0, _jsx3.default)('span', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref3 = (0, _jsx3.default)('div', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref4 = (0, _jsx3.default)('span', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {}, void 0, 'foo'));

var _ref5 = (0, _jsx3.default)('div', {
  className: 'bar'
}, void 0, 'bar');

var _ref7 = (0, _jsx3.default)('span', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {
  className: 'bar'
}, void 0, 'bar'));

var _ref8 = (0, _jsx3.default)('div', {
  className: 'bar'
}, void 0, 'bar');

var _ref10 = (0, _jsx3.default)('span', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {
  className: 'bar'
}, void 0, 'bar'));

var _ref11 = (0, _jsx3.default)('div', {
  className: 'bar'
}, void 0, 'bar');

var _ref13 = (0, _jsx3.default)('span', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {
  className: 'bar'
}, void 0, 'bar'));

var _ref14 = (0, _jsx3.default)('div', {
  className: 'bar'
}, void 0, 'bar');

var _ref16 = (0, _jsx3.default)('span', {
  className: 'wrapper'
}, void 0, (0, _jsx3.default)('span', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {
  className: 'bar'
}, void 0, 'bar')));

var _ref17 = (0, _jsx3.default)('div', {
  className: 'bar'
}, void 0, 'bar');

var _ref19 = (0, _jsx3.default)('span', {
  className: 'foo'
}, void 0, (0, _jsx3.default)('span', {
  className: 'bar'
}, void 0, 'bar'));

var _ref20 = (0, _jsx3.default)('div', {
  className: 'bar'
}, void 0, 'bar');

describe('transformComponents', function () {
  describe('replaces divs with spans', function () {
    function replaceDivsWithSpansInNode(node) {
      return (0, _2.default)(node, {
        DOMElement: function () {
          function DOMElement(path) {
            if (path.node.type !== 'div') {
              return path.defaultTraverse();
            }
            return _react2.default.createElement.apply(_react2.default, ['span', path.node.props].concat((0, _toConsumableArray3.default)(path.traverseChildren())));
          }

          return DOMElement;
        }()
      });
    }

    var replaceDivsWithSpansInComponent = (0, _.wrapRender)(replaceDivsWithSpansInNode);

    it('replaces in stateless components', function () {
      function Foo() {
        return _ref;
      }

      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = (0, _jsx3.default)(TransformedFoo, {});
      var expected = _ref2;
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in stateful components', function () {
      var Foo = function (_React$Component) {
        (0, _inherits3.default)(Foo, _React$Component);

        function Foo() {
          (0, _classCallCheck3.default)(this, Foo);
          return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
        }

        Foo.prototype.render = function () {
          function render() {
            return _ref3;
          }

          return render;
        }();

        return Foo;
      }(_react2.default.Component);

      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = (0, _jsx3.default)(TransformedFoo, {});
      var expected = _ref4;
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in nested stateless components', function () {
      function Bar() {
        return _ref5;
      }

      var _ref6 = (0, _jsx3.default)('div', {
        className: 'foo'
      }, void 0, (0, _jsx3.default)(Bar, {}));

      function Foo() {
        return _ref6;
      }

      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = (0, _jsx3.default)(TransformedFoo, {});
      var expected = _ref7;
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in nested stateful components', function () {
      var Bar = function (_React$Component2) {
        (0, _inherits3.default)(Bar, _React$Component2);

        function Bar() {
          (0, _classCallCheck3.default)(this, Bar);
          return (0, _possibleConstructorReturn3.default)(this, _React$Component2.apply(this, arguments));
        }

        Bar.prototype.render = function () {
          function render() {
            return _ref8;
          }

          return render;
        }();

        return Bar;
      }(_react2.default.Component);

      var _ref9 = (0, _jsx3.default)('div', {
        className: 'foo'
      }, void 0, (0, _jsx3.default)(Bar, {}));

      var Foo = function (_React$Component3) {
        (0, _inherits3.default)(Foo, _React$Component3);

        function Foo() {
          (0, _classCallCheck3.default)(this, Foo);
          return (0, _possibleConstructorReturn3.default)(this, _React$Component3.apply(this, arguments));
        }

        Foo.prototype.render = function () {
          function render() {
            return _ref9;
          }

          return render;
        }();

        return Foo;
      }(_react2.default.Component);

      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = (0, _jsx3.default)(TransformedFoo, {});
      var expected = _ref10;
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in nested mixed stateless and stateful components', function () {
      function Bar() {
        return _ref11;
      }

      var _ref12 = (0, _jsx3.default)('div', {
        className: 'foo'
      }, void 0, (0, _jsx3.default)(Bar, {}));

      var Foo = function (_React$Component4) {
        (0, _inherits3.default)(Foo, _React$Component4);

        function Foo() {
          (0, _classCallCheck3.default)(this, Foo);
          return (0, _possibleConstructorReturn3.default)(this, _React$Component4.apply(this, arguments));
        }

        Foo.prototype.render = function () {
          function render() {
            return _ref12;
          }

          return render;
        }();

        return Foo;
      }(_react2.default.Component);

      var TransformedFoo = (0, _.transformComponents)(replaceDivsWithSpansInComponent)(Foo);
      var actual = (0, _jsx3.default)(TransformedFoo, {});
      var expected = _ref13;
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('replaces in complex components nested in a ReactElement', function () {
      function Bar() {
        return _ref14;
      }

      var _ref15 = (0, _jsx3.default)('div', {
        className: 'foo'
      }, void 0, (0, _jsx3.default)(Bar, {}));

      var Foo = function (_React$Component5) {
        (0, _inherits3.default)(Foo, _React$Component5);

        function Foo() {
          (0, _classCallCheck3.default)(this, Foo);
          return (0, _possibleConstructorReturn3.default)(this, _React$Component5.apply(this, arguments));
        }

        Foo.prototype.render = function () {
          function render() {
            return _ref15;
          }

          return render;
        }();

        return Foo;
      }(_react2.default.Component);

      var actual = (0, _.transformComponents)(replaceDivsWithSpansInComponent)((0, _jsx3.default)('div', {
        className: 'wrapper'
      }, void 0, (0, _jsx3.default)(Foo, {})));
      var expected = _ref16;
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });

    it('decorates mixed stateless and stateful components', function () {
      var _dec, _class;

      function Bar() {
        return _ref17;
      }

      var _ref18 = (0, _jsx3.default)('div', {
        className: 'foo'
      }, void 0, (0, _jsx3.default)(Bar, {}));

      var TransformedFoo = (_dec = (0, _.transformComponents)(replaceDivsWithSpansInComponent), _dec(_class = function (_React$Component6) {
        (0, _inherits3.default)(TransformedFoo, _React$Component6);

        function TransformedFoo() {
          (0, _classCallCheck3.default)(this, TransformedFoo);
          return (0, _possibleConstructorReturn3.default)(this, _React$Component6.apply(this, arguments));
        }

        TransformedFoo.prototype.render = function () {
          function render() {
            return _ref18;
          }

          return render;
        }();

        return TransformedFoo;
      }(_react2.default.Component)) || _class);


      var actual = (0, _jsx3.default)(TransformedFoo, {});
      var expected = _ref19;
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });
  });

  describe('hashes all classNames', function () {
    var HASH_LENGTH = 10;

    function hashClassName(hashKey) {
      return function (className) {
        return (0, _sha2.default)(className + ':' + hashKey).slice(0, HASH_LENGTH);
      }; // eslint-disable-line new-cap
    }

    function hashAllClassNamesInNode(hashKey) {
      return function (node) {
        return (0, _2.default)(node, {
          DOMElement: function () {
            function DOMElement(path) {
              if (typeof path.node.props.className !== 'string') {
                return path.defaultTraverse();
              }
              var nextProps = (0, _extends3.default)({}, path.node.props);
              nextProps.className = path.node.props.className.split(' ').map(hashClassName(hashKey)).join(' ');
              return _react2.default.cloneElement.apply(_react2.default, [path.node, nextProps].concat((0, _toConsumableArray3.default)(path.traverseChildren())));
            }

            return DOMElement;
          }()
        });
      };
    }

    function createTransformComponent(hashKey) {
      return (0, _.wrapRender)(hashAllClassNamesInNode(hashKey));
    }

    it('hashes all classNames correctly', function () {
      var _dec2, _class2;

      var hashKey = 'foobar';

      function Bar() {
        return _ref20;
      }

      var _ref21 = (0, _jsx3.default)('div', {
        className: 'foo'
      }, void 0, (0, _jsx3.default)('span', {
        className: 'foo-bar bar-foo'
      }, void 0, (0, _jsx3.default)(Bar, {})));

      var Foo = (_dec2 = (0, _.transformComponents)(createTransformComponent(hashKey)), _dec2(_class2 = function (_React$Component7) {
        (0, _inherits3.default)(Foo, _React$Component7);

        function Foo() {
          (0, _classCallCheck3.default)(this, Foo);
          return (0, _possibleConstructorReturn3.default)(this, _React$Component7.apply(this, arguments));
        }

        Foo.prototype.render = function () {
          function render() {
            return _ref21;
          }

          return render;
        }();

        return Foo;
      }(_react2.default.Component)) || _class2);


      var actual = (0, _jsx3.default)(Foo, {});
      var expected = (0, _jsx3.default)('div', {
        className: hashClassName(hashKey)('foo')
      }, void 0, (0, _jsx3.default)('span', {
        className: hashClassName(hashKey)('foo-bar') + ' ' + hashClassName(hashKey)('bar-foo')
      }, void 0, (0, _jsx3.default)('div', {
        className: hashClassName(hashKey)('bar')
      }, void 0, 'bar')));
      (0, _asFunction2.default)(_server2.default.renderToStaticMarkup(actual)).be.exactly(_server2.default.renderToStaticMarkup(expected));
    });
  });
});