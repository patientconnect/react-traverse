'use strict';

exports.__esModule = true;
exports.default = exports.defaultTraverse = void 0;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.kindOf = kindOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function kindOf(node) {
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return 'Empty';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return 'Text';
  }
  if (Array.isArray(node)) {
    return 'Fragment';
  }
  var type = node.type;

  if (typeof type === 'string') {
    return 'DOMElement';
  }
  return 'ComponentElement';
}

function _defaultTraverse(path) {
  var kind = kindOf(path.node);
  if (kind === 'Empty') {
    return path.node;
  }
  if (kind === 'Text') {
    return path.node;
  }
  if (kind === 'Fragment') {
    return path.node.map(path.traverse);
  }
  return _react2.default.cloneElement.apply(_react2.default, [path.node, path.node.props].concat((0, _toConsumableArray3.default)(path.traverseChildren())));
}

exports.defaultTraverse = _defaultTraverse;
function _traverse(node, visitor) {
  var _visitor$Empty = visitor.Empty,
      Empty = _visitor$Empty === void 0 ? _defaultTraverse : _visitor$Empty,
      _visitor$Text = visitor.Text,
      Text = _visitor$Text === void 0 ? _defaultTraverse : _visitor$Text,
      _visitor$Fragment = visitor.Fragment,
      Fragment = _visitor$Fragment === void 0 ? _defaultTraverse : _visitor$Fragment,
      _visitor$DOMElement = visitor.DOMElement,
      DOMElement = _visitor$DOMElement === void 0 ? _defaultTraverse : _visitor$DOMElement,
      _visitor$ComponentEle = visitor.ComponentElement,
      ComponentElement = _visitor$ComponentEle === void 0 ? _defaultTraverse : _visitor$ComponentEle;

  var path = {
    node: node,
    kindOf: kindOf,
    defaultTraverse: function () {
      function defaultTraverse() {
        return _defaultTraverse(path);
      }

      return defaultTraverse;
    }(),
    traverse: function () {
      function traverse(childNode) {
        var childVisitor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : visitor;

        return _traverse(childNode, childVisitor);
      }

      return traverse;
    }(),
    traverseChildren: function () {
      function traverseChildren() {
        var childVisitor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : visitor;

        return _react2.default.Children.toArray(path.node.props.children).map(function (childNode) {
          return path.traverse(childNode, childVisitor);
        });
      }

      return traverseChildren;
    }(),

    visitor: visitor
  };
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return Empty(path); // eslint-disable-line new-cap
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return Text(path); // eslint-disable-line new-cap
  }
  if (Array.isArray(node)) {
    return Fragment(path); // eslint-disable-line new-cap
  }
  var type = node.type;

  if (typeof type === 'string') {
    return DOMElement(path); // eslint-disable-line new-cap
  }
  return ComponentElement(path); // eslint-disable-line new-cap
}
exports.default = _traverse;