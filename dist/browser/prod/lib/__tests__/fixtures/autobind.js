'use strict';

exports.__esModule = true;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/reflect/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _ownKeys = require('babel-runtime/core-js/reflect/own-keys');

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _defineProperty = require('babel-runtime/core-js/reflect/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = autobind;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */

/*
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + (typeof fn === 'undefined' ? 'undefined' : (0, _typeof3.default)(fn)));
  }

  return {
    configurable: true,
    get: function () {
      function get() {
        if (this === target.prototype) {
          return fn;
        }
        var boundFn = fn.bind(this);
        (0, _defineProperty2.default)(this, key, {
          value: boundFn,
          configurable: true,
          writable: true
        });
        return boundFn;
      }

      return get;
    }()
  };
}

/*
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = (0, _ownKeys2.default)(target.prototype);

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = (0, _getOwnPropertyDescriptor2.default)(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      (0, _defineProperty2.default)(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

function autobind() {
  if (arguments.length === 1) {
    return boundClass.apply(void 0, arguments);
  }
  return boundMethod.apply(void 0, arguments);
}