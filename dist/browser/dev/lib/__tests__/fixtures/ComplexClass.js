'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _apply = require('babel-runtime/core-js/reflect/apply');var _apply2 = _interopRequireDefault(_apply);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _dec, _dec2, _class, _desc, _value, _class2;var _autobind = require('./autobind');var _autobind2 = _interopRequireDefault(_autobind);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object['ke' + 'ys'](descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = void 0;}if (desc.initializer === void 0) {Object['define' + 'Property'](target, property, desc);desc = null;}return desc;}var

Base = function () {
  function Base(v) {(0, _classCallCheck3.default)(this, Base);
    this.v = v;
  }return Base;}();


function multiply(by) {
  return function () {function $multiply(target, name, descriptor) {
      return (0, _extends3.default)({},
      descriptor, {
        value: function () {function value() {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
            return by * (0, _apply2.default)(descriptor.value, this, args);
          }return value;}() });

    }return $multiply;}();
}

var FIVE = 5;
var SEVEN = 7;var


Complex = (_dec =
multiply(SEVEN), _dec2 =




multiply(1 / SEVEN), (0, _autobind2.default)(_class = (_class2 = function (_Base) {(0, _inherits3.default)(Complex, _Base);function Complex() {(0, _classCallCheck3.default)(this, Complex);return (0, _possibleConstructorReturn3.default)(this, (Complex.__proto__ || (0, _getPrototypeOf2.default)(Complex)).apply(this, arguments));}(0, _createClass3.default)(Complex, [{ key: 'multiplyByFortyFive', value: function () {function multiplyByFortyFive()
      {
        return SEVEN * this.constructor.multiplyByFortyFive(this.v);
      }return multiplyByFortyFive;}() }], [{ key: 'multiplyByFortyFive', value: function () {function multiplyByFortyFive(v) {return FIVE * v;}return multiplyByFortyFive;}() }]);return Complex;}(Base), (_applyDecoratedDescriptor(_class2, 'multiplyByFortyFive', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class2, 'multiplyByFortyFive'), _class2), _applyDecoratedDescriptor(_class2.prototype, 'multiplyByFortyFive', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'multiplyByFortyFive'), _class2.prototype)), _class2)) || _class);


var x = Complex;exports.default =

x;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcZml4dHVyZXNcXENvbXBsZXhDbGFzcy5qcyJdLCJuYW1lcyI6WyJCYXNlIiwidiIsIm11bHRpcGx5IiwiYnkiLCIkbXVsdGlwbHkiLCJ0YXJnZXQiLCJuYW1lIiwiZGVzY3JpcHRvciIsInZhbHVlIiwiYXJncyIsIkZJVkUiLCJTRVZFTiIsIkNvbXBsZXgiLCJjb25zdHJ1Y3RvciIsIm11bHRpcGx5QnlGb3J0eUZpdmUiLCJ4Il0sIm1hcHBpbmdzIjoid3JDQUFBLHNDOztBQUVNQSxJO0FBQ0osZ0JBQVlDLENBQVosRUFBZTtBQUNiLFNBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNELEc7OztBQUdILFNBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0FBQ3BCLHNCQUFPLFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxJQUEzQixFQUFpQ0MsVUFBakMsRUFBNkM7QUFDbEQ7QUFDS0EsZ0JBREw7QUFFRUMsYUFGRixnQ0FFaUIsbUNBQU5DLElBQU0sZ0RBQU5BLElBQU07QUFDYixtQkFBT04sS0FBSyxxQkFBY0ksV0FBV0MsS0FBekIsRUFBZ0MsSUFBaEMsRUFBc0NDLElBQXRDLENBQVo7QUFDRCxXQUpIOztBQU1ELEtBUEQsT0FBZ0JMLFNBQWhCO0FBUUQ7O0FBRUQsSUFBTU0sT0FBTyxDQUFiO0FBQ0EsSUFBTUMsUUFBUSxDQUFkLEM7OztBQUdNQyxPO0FBQ0hWLFNBQVNTLEtBQVQsQzs7Ozs7QUFLQVQsU0FBUyxJQUFJUyxLQUFiLEM7QUFDcUI7QUFDcEIsZUFBT0EsUUFBUSxLQUFLRSxXQUFMLENBQWlCQyxtQkFBakIsQ0FBcUMsS0FBS2IsQ0FBMUMsQ0FBZjtBQUNELE8sbUhBUDBCQSxDLEVBQUcsQ0FDNUIsT0FBT1MsT0FBT1QsQ0FBZCxDQUNELEMsb0RBSm1CRCxJOzs7QUFZdEIsSUFBTWUsSUFBSUgsT0FBVixDOztBQUVlRyxDIiwiZmlsZSI6Il9fdGVzdHNfX1xcZml4dHVyZXNcXENvbXBsZXhDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRvYmluZCBmcm9tICcuL2F1dG9iaW5kJztcclxuXHJcbmNsYXNzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKHYpIHtcclxuICAgIHRoaXMudiA9IHY7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtdWx0aXBseShieSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAkbXVsdGlwbHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kZXNjcmlwdG9yLFxyXG4gICAgICB2YWx1ZSguLi5hcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ5ICogUmVmbGVjdC5hcHBseShkZXNjcmlwdG9yLnZhbHVlLCB0aGlzLCBhcmdzKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgRklWRSA9IDU7XHJcbmNvbnN0IFNFVkVOID0gNztcclxuXHJcbkBhdXRvYmluZFxyXG5jbGFzcyBDb21wbGV4IGV4dGVuZHMgQmFzZSB7XHJcbiAgQG11bHRpcGx5KFNFVkVOKVxyXG4gIHN0YXRpYyBtdWx0aXBseUJ5Rm9ydHlGaXZlKHYpIHtcclxuICAgIHJldHVybiBGSVZFICogdjtcclxuICB9XHJcblxyXG4gIEBtdWx0aXBseSgxIC8gU0VWRU4pXHJcbiAgbXVsdGlwbHlCeUZvcnR5Rml2ZSgpIHtcclxuICAgIHJldHVybiBTRVZFTiAqIHRoaXMuY29uc3RydWN0b3IubXVsdGlwbHlCeUZvcnR5Rml2ZSh0aGlzLnYpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgeCA9IENvbXBsZXg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB4O1xyXG4iXX0=