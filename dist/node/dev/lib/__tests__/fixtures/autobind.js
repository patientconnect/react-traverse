'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getOwnPropertyDescriptor = require('babel-runtime/core-js/reflect/get-own-property-descriptor');var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);var _ownKeys = require('babel-runtime/core-js/reflect/own-keys');var _ownKeys2 = _interopRequireDefault(_ownKeys);var _defineProperty = require('babel-runtime/core-js/reflect/define-property');var _defineProperty2 = _interopRequireDefault(_defineProperty);var _typeof2 = require('babel-runtime/helpers/typeof');var _typeof3 = _interopRequireDefault(_typeof2);exports.default =


































































autobind;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
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
                                                                                                        */ /*
                                                                                                            * Return a descriptor removing the value and returning a getter
                                                                                                            * The getter will return a .bind version of the function
                                                                                                            * and memoize the result against a symbol on the instance
                                                                                                            */function boundMethod(target, key, descriptor) {var fn = descriptor.value;if (typeof fn !== 'function') {throw new Error('@autobind decorator can only be applied to methods not: ' + (typeof fn === 'undefined' ? 'undefined' : (0, _typeof3.default)(fn)));}return { configurable: true, get: function get() {if (this === target.prototype) {return fn;}var boundFn = fn.bind(this);(0, _defineProperty2.default)(this, key, { value: boundFn, configurable: true, writable: true });return boundFn;} };} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Use boundMethod to bind all methods on the target.prototype
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */function boundClass(target) {// (Using reflect to get all keys including symbols)
  var keys = (0, _ownKeys2.default)(target.prototype);keys.forEach(function (key) {// Ignore special case target method
    if (key === 'constructor') {return;}var descriptor = (0, _getOwnPropertyDescriptor2.default)(target.prototype, key); // Only methods need binding
    if (typeof descriptor.value === 'function') {(0, _defineProperty2.default)(target.prototype, key, boundMethod(target, key, descriptor));}});return target;}function autobind() {if (arguments.length === 1) {return boundClass.apply(void 0, arguments);}return boundMethod.apply(void 0, arguments);}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcZml4dHVyZXNcXGF1dG9iaW5kLmpzIl0sIm5hbWVzIjpbImF1dG9iaW5kIiwiYm91bmRNZXRob2QiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjcmlwdG9yIiwiZm4iLCJ2YWx1ZSIsIkVycm9yIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwicHJvdG90eXBlIiwiYm91bmRGbiIsImJpbmQiLCJ3cml0YWJsZSIsImJvdW5kQ2xhc3MiLCJrZXlzIiwiZm9yRWFjaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1Fd0JBLFEsK0ZBbkV4Qjs7Ozs7Ozs7Ozs7OzsyR0FlQzs7Ozs4R0FLRCxTQUFTQyxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsR0FBN0IsRUFBa0NDLFVBQWxDLEVBQThDLENBQzVDLElBQU1DLEtBQUtELFdBQVdFLEtBQXRCLENBRUEsSUFBRyxPQUFPRCxFQUFQLEtBQWMsVUFBakIsRUFBNkIsQ0FDM0IsTUFBTSxJQUFJRSxLQUFKLHNFQUE0RUYsRUFBNUUsdURBQTRFQSxFQUE1RSxHQUFOLENBQ0QsQ0FFRCxPQUFPLEVBQ0xHLGNBQWMsSUFEVCxFQUVMQyxHQUZLLGlCQUVDLENBQ0osSUFBSSxTQUFTUCxPQUFPUSxTQUFwQixFQUErQixDQUM3QixPQUFPTCxFQUFQLENBQ0QsQ0FDRCxJQUFNTSxVQUFVTixHQUFHTyxJQUFILENBQVEsSUFBUixDQUFoQixDQUNBLDhCQUF1QixJQUF2QixFQUE2QlQsR0FBN0IsRUFBa0MsRUFDaENHLE9BQU9LLE9BRHlCLEVBRWhDSCxjQUFjLElBRmtCLEVBR2hDSyxVQUFVLElBSHNCLEVBQWxDLEVBS0EsT0FBT0YsT0FBUCxDQUNELENBYkksRUFBUCxDQWVELEMsQ0FFQTs7NmxCQUdELFNBQVNHLFVBQVQsQ0FBb0JaLE1BQXBCLEVBQTRCLENBQzNCO0FBQ0MsTUFBTWEsT0FBTyx1QkFBZ0JiLE9BQU9RLFNBQXZCLENBQWIsQ0FFQUssS0FBS0MsT0FBTCxDQUFhLFVBQUNiLEdBQUQsRUFBUyxDQUNyQjtBQUNDLFFBQUlBLFFBQVEsYUFBWixFQUEyQixDQUN6QixPQUNELENBRUQsSUFBTUMsYUFBYSx3Q0FBaUNGLE9BQU9RLFNBQXhDLEVBQW1EUCxHQUFuRCxDQUFuQixDQU5vQixDQVFyQjtBQUNDLFFBQUksT0FBT0MsV0FBV0UsS0FBbEIsS0FBNEIsVUFBaEMsRUFBNEMsQ0FDMUMsOEJBQXVCSixPQUFPUSxTQUE5QixFQUF5Q1AsR0FBekMsRUFBOENGLFlBQVlDLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCQyxVQUF6QixDQUE5QyxFQUNELENBQ0YsQ0FaRCxFQWFBLE9BQU9GLE1BQVAsQ0FDRCxDQUVjLFNBQVNGLFFBQVQsR0FBMkIsQ0FDeEMsSUFBRyxVQUFLaUIsTUFBTCxLQUFnQixDQUFuQixFQUFzQixDQUNwQixPQUFPSCxtQ0FBUCxDQUNELENBQ0QsT0FBT2Isb0NBQVAsQ0FDRCIsImZpbGUiOiJfX3Rlc3RzX19cXGZpeHR1cmVzXFxhdXRvYmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBjb3B5cmlnaHQgMjAxNSwgQW5kcmV5IFBvcHAgPDhtYXlkYXlAZ21haWwuY29tPlxyXG4gKlxyXG4gKiBUaGUgZGVjb3JhdG9yIG1heSBiZSB1c2VkIG9uIGNsYXNzZXMgb3IgbWV0aG9kc1xyXG4gKiBgYGBcclxuICogQGF1dG9iaW5kXHJcbiAqIGNsYXNzIEZ1bGxCb3VuZCB7fVxyXG4gKlxyXG4gKiBjbGFzcyBQYXJ0Qm91bmQge1xyXG4gKiAgIEBhdXRvYmluZFxyXG4gKiAgIG1ldGhvZCAoKSB7fVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuXHJcbiAvKlxyXG4gICogUmV0dXJuIGEgZGVzY3JpcHRvciByZW1vdmluZyB0aGUgdmFsdWUgYW5kIHJldHVybmluZyBhIGdldHRlclxyXG4gICogVGhlIGdldHRlciB3aWxsIHJldHVybiBhIC5iaW5kIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uXHJcbiAgKiBhbmQgbWVtb2l6ZSB0aGUgcmVzdWx0IGFnYWluc3QgYSBzeW1ib2wgb24gdGhlIGluc3RhbmNlXHJcbiAgKi9cclxuZnVuY3Rpb24gYm91bmRNZXRob2QodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICBjb25zdCBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XHJcblxyXG4gIGlmKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBAYXV0b2JpbmQgZGVjb3JhdG9yIGNhbiBvbmx5IGJlIGFwcGxpZWQgdG8gbWV0aG9kcyBub3Q6ICR7dHlwZW9mIGZufWApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldCgpIHtcclxuICAgICAgaWYgKHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUpIHtcclxuICAgICAgICByZXR1cm4gZm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYm91bmRGbiA9IGZuLmJpbmQodGhpcyk7XHJcbiAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XHJcbiAgICAgICAgdmFsdWU6IGJvdW5kRm4sXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGJvdW5kRm47XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbiAvKlxyXG4gICogVXNlIGJvdW5kTWV0aG9kIHRvIGJpbmQgYWxsIG1ldGhvZHMgb24gdGhlIHRhcmdldC5wcm90b3R5cGVcclxuICAqL1xyXG5mdW5jdGlvbiBib3VuZENsYXNzKHRhcmdldCkge1xyXG4gLy8gKFVzaW5nIHJlZmxlY3QgdG8gZ2V0IGFsbCBrZXlzIGluY2x1ZGluZyBzeW1ib2xzKVxyXG4gIGNvbnN0IGtleXMgPSBSZWZsZWN0Lm93bktleXModGFyZ2V0LnByb3RvdHlwZSk7XHJcblxyXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgIC8vIElnbm9yZSBzcGVjaWFsIGNhc2UgdGFyZ2V0IG1ldGhvZFxyXG4gICAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldC5wcm90b3R5cGUsIGtleSk7XHJcblxyXG4gICAvLyBPbmx5IG1ldGhvZHMgbmVlZCBiaW5kaW5nXHJcbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBrZXksIGJvdW5kTWV0aG9kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b2JpbmQoLi4uYXJncykge1xyXG4gIGlmKGFyZ3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gYm91bmRDbGFzcyguLi5hcmdzKTtcclxuICB9XHJcbiAgcmV0dXJuIGJvdW5kTWV0aG9kKC4uLmFyZ3MpO1xyXG59XHJcbiJdfQ==