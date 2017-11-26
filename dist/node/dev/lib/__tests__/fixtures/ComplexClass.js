'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _apply = require('babel-runtime/core-js/reflect/apply');var _apply2 = _interopRequireDefault(_apply);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _dec, _dec2, _class, _desc, _value, _class2;var _autobind = require('./autobind');var _autobind2 = _interopRequireDefault(_autobind);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object['ke' + 'ys'](descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = void 0;}if (desc.initializer === void 0) {Object['define' + 'Property'](target, property, desc);desc = null;}return desc;}var

Base =
function Base(v) {(0, _classCallCheck3.default)(this, Base);
  this.v = v;
};


function multiply(by) {
  return function $multiply(target, name, descriptor) {
    return (0, _extends3.default)({},
    descriptor, {
      value: function value() {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
        return by * (0, _apply2.default)(descriptor.value, this, args);
      } });

  };
}

var FIVE = 5;
var SEVEN = 7;var


Complex = (_dec =
multiply(SEVEN), _dec2 =




multiply(1 / SEVEN), (0, _autobind2.default)(_class = (_class2 = function (_Base) {(0, _inherits3.default)(Complex, _Base);function Complex() {(0, _classCallCheck3.default)(this, Complex);return (0, _possibleConstructorReturn3.default)(this, (Complex.__proto__ || (0, _getPrototypeOf2.default)(Complex)).apply(this, arguments));}(0, _createClass3.default)(Complex, [{ key: 'multiplyByFortyFive', value: function multiplyByFortyFive()
    {
      return SEVEN * this.constructor.multiplyByFortyFive(this.v);
    } }], [{ key: 'multiplyByFortyFive', value: function multiplyByFortyFive(v) {return FIVE * v;} }]);return Complex;}(Base), (_applyDecoratedDescriptor(_class2, 'multiplyByFortyFive', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class2, 'multiplyByFortyFive'), _class2), _applyDecoratedDescriptor(_class2.prototype, 'multiplyByFortyFive', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'multiplyByFortyFive'), _class2.prototype)), _class2)) || _class);


var x = Complex;exports.default =

x;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcZml4dHVyZXNcXENvbXBsZXhDbGFzcy5qcyJdLCJuYW1lcyI6WyJCYXNlIiwidiIsIm11bHRpcGx5IiwiYnkiLCIkbXVsdGlwbHkiLCJ0YXJnZXQiLCJuYW1lIiwiZGVzY3JpcHRvciIsInZhbHVlIiwiYXJncyIsIkZJVkUiLCJTRVZFTiIsIkNvbXBsZXgiLCJjb25zdHJ1Y3RvciIsIm11bHRpcGx5QnlGb3J0eUZpdmUiLCJ4Il0sIm1hcHBpbmdzIjoid3JDQUFBLHNDOztBQUVNQSxJO0FBQ0osY0FBWUMsQ0FBWixFQUFlO0FBQ2IsT0FBS0EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0QsQzs7O0FBR0gsU0FBU0MsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0I7QUFDcEIsU0FBTyxTQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsSUFBM0IsRUFBaUNDLFVBQWpDLEVBQTZDO0FBQ2xEO0FBQ0tBLGNBREw7QUFFRUMsV0FGRixtQkFFaUIsbUNBQU5DLElBQU0sZ0RBQU5BLElBQU07QUFDYixlQUFPTixLQUFLLHFCQUFjSSxXQUFXQyxLQUF6QixFQUFnQyxJQUFoQyxFQUFzQ0MsSUFBdEMsQ0FBWjtBQUNELE9BSkg7O0FBTUQsR0FQRDtBQVFEOztBQUVELElBQU1DLE9BQU8sQ0FBYjtBQUNBLElBQU1DLFFBQVEsQ0FBZCxDOzs7QUFHTUMsTztBQUNIVixTQUFTUyxLQUFULEM7Ozs7O0FBS0FULFNBQVMsSUFBSVMsS0FBYixDO0FBQ3FCO0FBQ3BCLGFBQU9BLFFBQVEsS0FBS0UsV0FBTCxDQUFpQkMsbUJBQWpCLENBQXFDLEtBQUtiLENBQTFDLENBQWY7QUFDRCxLLHdFQVAwQkEsQyxFQUFHLENBQzVCLE9BQU9TLE9BQU9ULENBQWQsQ0FDRCxDLHNCQUptQkQsSTs7O0FBWXRCLElBQU1lLElBQUlILE9BQVYsQzs7QUFFZUcsQyIsImZpbGUiOiJfX3Rlc3RzX19cXGZpeHR1cmVzXFxDb21wbGV4Q2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b2JpbmQgZnJvbSAnLi9hdXRvYmluZCc7XHJcblxyXG5jbGFzcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvcih2KSB7XHJcbiAgICB0aGlzLnYgPSB2O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbXVsdGlwbHkoYnkpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gJG11bHRpcGx5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGVzY3JpcHRvcixcclxuICAgICAgdmFsdWUoLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiBieSAqIFJlZmxlY3QuYXBwbHkoZGVzY3JpcHRvci52YWx1ZSwgdGhpcywgYXJncyk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IEZJVkUgPSA1O1xyXG5jb25zdCBTRVZFTiA9IDc7XHJcblxyXG5AYXV0b2JpbmRcclxuY2xhc3MgQ29tcGxleCBleHRlbmRzIEJhc2Uge1xyXG4gIEBtdWx0aXBseShTRVZFTilcclxuICBzdGF0aWMgbXVsdGlwbHlCeUZvcnR5Rml2ZSh2KSB7XHJcbiAgICByZXR1cm4gRklWRSAqIHY7XHJcbiAgfVxyXG5cclxuICBAbXVsdGlwbHkoMSAvIFNFVkVOKVxyXG4gIG11bHRpcGx5QnlGb3J0eUZpdmUoKSB7XHJcbiAgICByZXR1cm4gU0VWRU4gKiB0aGlzLmNvbnN0cnVjdG9yLm11bHRpcGx5QnlGb3J0eUZpdmUodGhpcy52KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHggPSBDb21wbGV4O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeDtcclxuIl19