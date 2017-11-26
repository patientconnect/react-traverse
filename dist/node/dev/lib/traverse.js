'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.defaultTraverse = void 0;var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);exports.

kindOf = kindOf;var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function kindOf(node) {
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return 'Empty';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return 'Text';
  }
  if (Array.isArray(node)) {
    return 'Fragment';
  }var
  type = node.type;
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
  return _react2.default.cloneElement.apply(_react2.default, [
  path.node,
  path.node.props].concat((0, _toConsumableArray3.default)(
  path.traverseChildren())));

}exports.defaultTraverse = _defaultTraverse;

function _traverse(node, visitor) {var _visitor$Empty =






  visitor.Empty,Empty = _visitor$Empty === void 0 ? _defaultTraverse : _visitor$Empty,_visitor$Text = visitor.Text,Text = _visitor$Text === void 0 ? _defaultTraverse : _visitor$Text,_visitor$Fragment = visitor.Fragment,Fragment = _visitor$Fragment === void 0 ? _defaultTraverse : _visitor$Fragment,_visitor$DOMElement = visitor.DOMElement,DOMElement = _visitor$DOMElement === void 0 ? _defaultTraverse : _visitor$DOMElement,_visitor$ComponentEle = visitor.ComponentElement,ComponentElement = _visitor$ComponentEle === void 0 ? _defaultTraverse : _visitor$ComponentEle;
  var path = {
    node: node,
    kindOf: kindOf,
    defaultTraverse: function defaultTraverse() {
      return _defaultTraverse(path);
    },
    traverse: function traverse(childNode) {var childVisitor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : visitor;
      return _traverse(childNode, childVisitor);
    },
    traverseChildren: function traverseChildren() {var childVisitor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : visitor;
      return _react2.default.Children.toArray(path.node.props.children).map(
      function (childNode) {return path.traverse(childNode, childVisitor);});

    },
    visitor: visitor };

  if (node === null || node === void 0 || typeof node === 'boolean') {
    return Empty(path); // eslint-disable-line new-cap
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return Text(path); // eslint-disable-line new-cap
  }
  if (Array.isArray(node)) {
    return Fragment(path); // eslint-disable-line new-cap
  }var
  type = node.type;
  if (typeof type === 'string') {
    return DOMElement(path); // eslint-disable-line new-cap
  }
  return ComponentElement(path); // eslint-disable-line new-cap
}exports.default = _traverse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlcnNlLmpzIl0sIm5hbWVzIjpbImtpbmRPZiIsIm5vZGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwiZGVmYXVsdFRyYXZlcnNlIiwicGF0aCIsImtpbmQiLCJtYXAiLCJ0cmF2ZXJzZSIsImNsb25lRWxlbWVudCIsInByb3BzIiwidHJhdmVyc2VDaGlsZHJlbiIsInZpc2l0b3IiLCJFbXB0eSIsIlRleHQiLCJGcmFnbWVudCIsIkRPTUVsZW1lbnQiLCJDb21wb25lbnRFbGVtZW50IiwiY2hpbGROb2RlIiwiY2hpbGRWaXNpdG9yIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7O0FBRWdCQSxNLEdBQUFBLE0sQ0FGaEIsOEIsMElBRU8sU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDM0IsTUFBR0EsU0FBUyxJQUFULElBQWlCQSxTQUFTLEtBQUssQ0FBL0IsSUFBb0MsT0FBT0EsSUFBUCxLQUFnQixTQUF2RCxFQUFrRTtBQUNoRSxXQUFPLE9BQVA7QUFDRDtBQUNELE1BQUcsT0FBT0EsSUFBUCxLQUFnQixRQUFoQixJQUE0QixPQUFPQSxJQUFQLEtBQWdCLFFBQS9DLEVBQXlEO0FBQ3ZELFdBQU8sTUFBUDtBQUNEO0FBQ0QsTUFBR0MsTUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUgsRUFBd0I7QUFDdEIsV0FBTyxVQUFQO0FBQ0QsR0FUMEI7QUFVbkJHLE1BVm1CLEdBVVZILElBVlUsQ0FVbkJHLElBVm1CO0FBVzNCLE1BQUcsT0FBT0EsSUFBUCxLQUFnQixRQUFuQixFQUE2QjtBQUMzQixXQUFPLFlBQVA7QUFDRDtBQUNELFNBQU8sa0JBQVA7QUFDRDs7QUFFTSxTQUFTQyxnQkFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDcEMsTUFBTUMsT0FBT1AsT0FBT00sS0FBS0wsSUFBWixDQUFiO0FBQ0EsTUFBR00sU0FBUyxPQUFaLEVBQXFCO0FBQ25CLFdBQU9ELEtBQUtMLElBQVo7QUFDRDtBQUNELE1BQUdNLFNBQVMsTUFBWixFQUFvQjtBQUNsQixXQUFPRCxLQUFLTCxJQUFaO0FBQ0Q7QUFDRCxNQUFHTSxTQUFTLFVBQVosRUFBd0I7QUFDdEIsV0FBT0QsS0FBS0wsSUFBTCxDQUFVTyxHQUFWLENBQWNGLEtBQUtHLFFBQW5CLENBQVA7QUFDRDtBQUNELFNBQU8sZ0JBQU1DLFlBQU47QUFDTEosT0FBS0wsSUFEQTtBQUVMSyxPQUFLTCxJQUFMLENBQVVVLEtBRkw7QUFHRkwsT0FBS00sZ0JBQUwsRUFIRSxHQUFQOztBQUtELEM7O0FBRWMsU0FBU0gsU0FBVCxDQUFrQlIsSUFBbEIsRUFBd0JZLE9BQXhCLEVBQWlDOzs7Ozs7O0FBTzFDQSxTQVAwQyxDQUU1Q0MsS0FGNEMsQ0FFNUNBLEtBRjRDLCtCQUVwQ1QsZ0JBRm9DLGtDQU8xQ1EsT0FQMEMsQ0FHNUNFLElBSDRDLENBRzVDQSxJQUg0Qyw4QkFHckNWLGdCQUhxQyxxQ0FPMUNRLE9BUDBDLENBSTVDRyxRQUo0QyxDQUk1Q0EsUUFKNEMsa0NBSWpDWCxnQkFKaUMsMkNBTzFDUSxPQVAwQyxDQUs1Q0ksVUFMNEMsQ0FLNUNBLFVBTDRDLG9DQUsvQlosZ0JBTCtCLCtDQU8xQ1EsT0FQMEMsQ0FNNUNLLGdCQU40QyxDQU01Q0EsZ0JBTjRDLHNDQU16QmIsZ0JBTnlCO0FBUTlDLE1BQU1DLE9BQU87QUFDWEwsY0FEVztBQUVYRCxrQkFGVztBQUdYSyxtQkFIVyw2QkFHTztBQUNoQixhQUFPQSxpQkFBZ0JDLElBQWhCLENBQVA7QUFDRCxLQUxVO0FBTVhHLFlBTlcsb0JBTUZVLFNBTkUsRUFNaUMsS0FBeEJDLFlBQXdCLG9FQUFUUCxPQUFTO0FBQzFDLGFBQU9KLFVBQVNVLFNBQVQsRUFBb0JDLFlBQXBCLENBQVA7QUFDRCxLQVJVO0FBU1hSLG9CQVRXLDhCQVM4QixLQUF4QlEsWUFBd0Isb0VBQVRQLE9BQVM7QUFDdkMsYUFBTyxnQkFBTVEsUUFBTixDQUFlQyxPQUFmLENBQXVCaEIsS0FBS0wsSUFBTCxDQUFVVSxLQUFWLENBQWdCWSxRQUF2QyxFQUFpRGYsR0FBakQ7QUFDTCxnQkFBQ1csU0FBRCxVQUFlYixLQUFLRyxRQUFMLENBQWNVLFNBQWQsRUFBeUJDLFlBQXpCLENBQWYsRUFESyxDQUFQOztBQUdELEtBYlU7QUFjWFAsb0JBZFcsRUFBYjs7QUFnQkEsTUFBR1osU0FBUyxJQUFULElBQWlCQSxTQUFTLEtBQUssQ0FBL0IsSUFBb0MsT0FBT0EsSUFBUCxLQUFnQixTQUF2RCxFQUFrRTtBQUNoRSxXQUFPYSxNQUFNUixJQUFOLENBQVAsQ0FEZ0UsQ0FDNUM7QUFDckI7QUFDRCxNQUFHLE9BQU9MLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsSUFBUCxLQUFnQixRQUEvQyxFQUF5RDtBQUN2RCxXQUFPYyxLQUFLVCxJQUFMLENBQVAsQ0FEdUQsQ0FDcEM7QUFDcEI7QUFDRCxNQUFHSixNQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSCxFQUF3QjtBQUN0QixXQUFPZSxTQUFTVixJQUFULENBQVAsQ0FEc0IsQ0FDQztBQUN4QixHQWhDNkM7QUFpQ3RDRixNQWpDc0MsR0FpQzdCSCxJQWpDNkIsQ0FpQ3RDRyxJQWpDc0M7QUFrQzlDLE1BQUcsT0FBT0EsSUFBUCxLQUFnQixRQUFuQixFQUE2QjtBQUMzQixXQUFPYSxXQUFXWCxJQUFYLENBQVAsQ0FEMkIsQ0FDRjtBQUMxQjtBQUNELFNBQU9ZLGlCQUFpQlosSUFBakIsQ0FBUCxDQXJDOEMsQ0FxQ2Y7QUFDaEMsQyIsImZpbGUiOiJ0cmF2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2luZE9mKG5vZGUpIHtcclxuICBpZihub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCB8fCB0eXBlb2Ygbm9kZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICByZXR1cm4gJ0VtcHR5JztcclxuICB9XHJcbiAgaWYodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBub2RlID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuICdUZXh0JztcclxuICB9XHJcbiAgaWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgcmV0dXJuICdGcmFnbWVudCc7XHJcbiAgfVxyXG4gIGNvbnN0IHsgdHlwZSB9ID0gbm9kZTtcclxuICBpZih0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiAnRE9NRWxlbWVudCc7XHJcbiAgfVxyXG4gIHJldHVybiAnQ29tcG9uZW50RWxlbWVudCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VHJhdmVyc2UocGF0aCkge1xyXG4gIGNvbnN0IGtpbmQgPSBraW5kT2YocGF0aC5ub2RlKTtcclxuICBpZihraW5kID09PSAnRW1wdHknKSB7XHJcbiAgICByZXR1cm4gcGF0aC5ub2RlO1xyXG4gIH1cclxuICBpZihraW5kID09PSAnVGV4dCcpIHtcclxuICAgIHJldHVybiBwYXRoLm5vZGU7XHJcbiAgfVxyXG4gIGlmKGtpbmQgPT09ICdGcmFnbWVudCcpIHtcclxuICAgIHJldHVybiBwYXRoLm5vZGUubWFwKHBhdGgudHJhdmVyc2UpO1xyXG4gIH1cclxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxyXG4gICAgcGF0aC5ub2RlLFxyXG4gICAgcGF0aC5ub2RlLnByb3BzLFxyXG4gICAgLi4ucGF0aC50cmF2ZXJzZUNoaWxkcmVuKCksXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgdmlzaXRvcikge1xyXG4gIGNvbnN0IHtcclxuICAgIEVtcHR5ID0gZGVmYXVsdFRyYXZlcnNlLFxyXG4gICAgVGV4dCA9IGRlZmF1bHRUcmF2ZXJzZSxcclxuICAgIEZyYWdtZW50ID0gZGVmYXVsdFRyYXZlcnNlLFxyXG4gICAgRE9NRWxlbWVudCA9IGRlZmF1bHRUcmF2ZXJzZSxcclxuICAgIENvbXBvbmVudEVsZW1lbnQgPSBkZWZhdWx0VHJhdmVyc2UsXHJcbiAgfSA9IHZpc2l0b3I7XHJcbiAgY29uc3QgcGF0aCA9IHtcclxuICAgIG5vZGUsXHJcbiAgICBraW5kT2YsXHJcbiAgICBkZWZhdWx0VHJhdmVyc2UoKSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0VHJhdmVyc2UocGF0aCk7XHJcbiAgICB9LFxyXG4gICAgdHJhdmVyc2UoY2hpbGROb2RlLCBjaGlsZFZpc2l0b3IgPSB2aXNpdG9yKSB7XHJcbiAgICAgIHJldHVybiB0cmF2ZXJzZShjaGlsZE5vZGUsIGNoaWxkVmlzaXRvcik7XHJcbiAgICB9LFxyXG4gICAgdHJhdmVyc2VDaGlsZHJlbihjaGlsZFZpc2l0b3IgPSB2aXNpdG9yKSB7XHJcbiAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHBhdGgubm9kZS5wcm9wcy5jaGlsZHJlbikubWFwKFxyXG4gICAgICAgIChjaGlsZE5vZGUpID0+IHBhdGgudHJhdmVyc2UoY2hpbGROb2RlLCBjaGlsZFZpc2l0b3IpXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgdmlzaXRvcixcclxuICB9O1xyXG4gIGlmKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwIHx8IHR5cGVvZiBub2RlID09PSAnYm9vbGVhbicpIHtcclxuICAgIHJldHVybiBFbXB0eShwYXRoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXHJcbiAgfVxyXG4gIGlmKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygbm9kZSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBUZXh0KHBhdGgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcclxuICB9XHJcbiAgaWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgcmV0dXJuIEZyYWdtZW50KHBhdGgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcclxuICB9XHJcbiAgY29uc3QgeyB0eXBlIH0gPSBub2RlO1xyXG4gIGlmKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIERPTUVsZW1lbnQocGF0aCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxyXG4gIH1cclxuICByZXR1cm4gQ29tcG9uZW50RWxlbWVudChwYXRoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXHJcbn1cclxuIl19