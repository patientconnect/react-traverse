'use strict';

exports.__esModule = true;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _apply = require('babel-runtime/core-js/reflect/apply');

var _apply2 = _interopRequireDefault(_apply);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _dec, _dec2, _class, _desc, _value, _class2;

var _autobind = require('./autobind');

var _autobind2 = _interopRequireDefault(_autobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Base = function () {
  function Base(v) {
    (0, _classCallCheck3.default)(this, Base);

    this.v = v;
  }

  return Base;
}();

function multiply(by) {
  return function () {
    function $multiply(target, name, descriptor) {
      return (0, _extends3.default)({}, descriptor, {
        value: function () {
          function value() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return by * (0, _apply2.default)(descriptor.value, this, args);
          }

          return value;
        }()
      });
    }

    return $multiply;
  }();
}

var FIVE = 5;
var SEVEN = 7;

var Complex = (_dec = multiply(SEVEN), _dec2 = multiply(1 / SEVEN), (0, _autobind2.default)(_class = (_class2 = function (_Base) {
  (0, _inherits3.default)(Complex, _Base);

  function Complex() {
    (0, _classCallCheck3.default)(this, Complex);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  Complex.multiplyByFortyFive = function () {
    function multiplyByFortyFive(v) {
      return FIVE * v;
    }

    return multiplyByFortyFive;
  }();

  Complex.prototype.multiplyByFortyFive = function () {
    function multiplyByFortyFive() {
      return SEVEN * this.constructor.multiplyByFortyFive(this.v);
    }

    return multiplyByFortyFive;
  }();

  return Complex;
}(Base), (_applyDecoratedDescriptor(_class2, 'multiplyByFortyFive', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class2, 'multiplyByFortyFive'), _class2), _applyDecoratedDescriptor(_class2.prototype, 'multiplyByFortyFive', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'multiplyByFortyFive'), _class2.prototype)), _class2)) || _class);


var x = Complex;

exports.default = x;