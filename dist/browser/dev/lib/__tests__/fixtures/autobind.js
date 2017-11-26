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
                                                                                                            */function boundMethod(target, key, descriptor) {var fn = descriptor.value;if (typeof fn !== 'function') {throw new Error('@autobind decorator can only be applied to methods not: ' + (typeof fn === 'undefined' ? 'undefined' : (0, _typeof3.default)(fn)));}return { configurable: true, get: function () {function get() {if (this === target.prototype) {return fn;}var boundFn = fn.bind(this);(0, _defineProperty2.default)(this, key, { value: boundFn, configurable: true, writable: true });return boundFn;}return get;}() };} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Use boundMethod to bind all methods on the target.prototype
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */function boundClass(target) {// (Using reflect to get all keys including symbols)
  var keys = (0, _ownKeys2.default)(target.prototype);keys.forEach(function (key) {// Ignore special case target method
    if (key === 'constructor') {return;}var descriptor = (0, _getOwnPropertyDescriptor2.default)(target.prototype, key); // Only methods need binding
    if (typeof descriptor.value === 'function') {(0, _defineProperty2.default)(target.prototype, key, boundMethod(target, key, descriptor));}});return target;}function autobind() {if (arguments.length === 1) {return boundClass.apply(void 0, arguments);}return boundMethod.apply(void 0, arguments);}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfX1xcZml4dHVyZXNcXGF1dG9iaW5kLmpzIl0sIm5hbWVzIjpbImF1dG9iaW5kIiwiYm91bmRNZXRob2QiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjcmlwdG9yIiwiZm4iLCJ2YWx1ZSIsIkVycm9yIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwicHJvdG90eXBlIiwiYm91bmRGbiIsImJpbmQiLCJ3cml0YWJsZSIsImJvdW5kQ2xhc3MiLCJrZXlzIiwiZm9yRWFjaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1Fd0JBLFEsK0ZBbkV4Qjs7Ozs7Ozs7Ozs7OzsyR0FlQzs7Ozs4R0FLRCxTQUFTQyxXQUFULENBQXFCQyxNQUFyQixFQUE2QkMsR0FBN0IsRUFBa0NDLFVBQWxDLEVBQThDLENBQzVDLElBQU1DLEtBQUtELFdBQVdFLEtBQXRCLENBRUEsSUFBRyxPQUFPRCxFQUFQLEtBQWMsVUFBakIsRUFBNkIsQ0FDM0IsTUFBTSxJQUFJRSxLQUFKLHNFQUE0RUYsRUFBNUUsdURBQTRFQSxFQUE1RSxHQUFOLENBQ0QsQ0FFRCxPQUFPLEVBQ0xHLGNBQWMsSUFEVCxFQUVMQyxHQUZLLDhCQUVDLENBQ0osSUFBSSxTQUFTUCxPQUFPUSxTQUFwQixFQUErQixDQUM3QixPQUFPTCxFQUFQLENBQ0QsQ0FDRCxJQUFNTSxVQUFVTixHQUFHTyxJQUFILENBQVEsSUFBUixDQUFoQixDQUNBLDhCQUF1QixJQUF2QixFQUE2QlQsR0FBN0IsRUFBa0MsRUFDaENHLE9BQU9LLE9BRHlCLEVBRWhDSCxjQUFjLElBRmtCLEVBR2hDSyxVQUFVLElBSHNCLEVBQWxDLEVBS0EsT0FBT0YsT0FBUCxDQUNELENBYkksZ0JBQVAsQ0FlRCxDLENBRUE7O3duQkFHRCxTQUFTRyxVQUFULENBQW9CWixNQUFwQixFQUE0QixDQUMzQjtBQUNDLE1BQU1hLE9BQU8sdUJBQWdCYixPQUFPUSxTQUF2QixDQUFiLENBRUFLLEtBQUtDLE9BQUwsQ0FBYSxVQUFDYixHQUFELEVBQVMsQ0FDckI7QUFDQyxRQUFJQSxRQUFRLGFBQVosRUFBMkIsQ0FDekIsT0FDRCxDQUVELElBQU1DLGFBQWEsd0NBQWlDRixPQUFPUSxTQUF4QyxFQUFtRFAsR0FBbkQsQ0FBbkIsQ0FOb0IsQ0FRckI7QUFDQyxRQUFJLE9BQU9DLFdBQVdFLEtBQWxCLEtBQTRCLFVBQWhDLEVBQTRDLENBQzFDLDhCQUF1QkosT0FBT1EsU0FBOUIsRUFBeUNQLEdBQXpDLEVBQThDRixZQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QkMsVUFBekIsQ0FBOUMsRUFDRCxDQUNGLENBWkQsRUFhQSxPQUFPRixNQUFQLENBQ0QsQ0FFYyxTQUFTRixRQUFULEdBQTJCLENBQ3hDLElBQUcsVUFBS2lCLE1BQUwsS0FBZ0IsQ0FBbkIsRUFBc0IsQ0FDcEIsT0FBT0gsbUNBQVAsQ0FDRCxDQUNELE9BQU9iLG9DQUFQLENBQ0QiLCJmaWxlIjoiX190ZXN0c19fXFxmaXh0dXJlc1xcYXV0b2JpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAY29weXJpZ2h0IDIwMTUsIEFuZHJleSBQb3BwIDw4bWF5ZGF5QGdtYWlsLmNvbT5cclxuICpcclxuICogVGhlIGRlY29yYXRvciBtYXkgYmUgdXNlZCBvbiBjbGFzc2VzIG9yIG1ldGhvZHNcclxuICogYGBgXHJcbiAqIEBhdXRvYmluZFxyXG4gKiBjbGFzcyBGdWxsQm91bmQge31cclxuICpcclxuICogY2xhc3MgUGFydEJvdW5kIHtcclxuICogICBAYXV0b2JpbmRcclxuICogICBtZXRob2QgKCkge31cclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcblxyXG4gLypcclxuICAqIFJldHVybiBhIGRlc2NyaXB0b3IgcmVtb3ZpbmcgdGhlIHZhbHVlIGFuZCByZXR1cm5pbmcgYSBnZXR0ZXJcclxuICAqIFRoZSBnZXR0ZXIgd2lsbCByZXR1cm4gYSAuYmluZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxyXG4gICogYW5kIG1lbW9pemUgdGhlIHJlc3VsdCBhZ2FpbnN0IGEgc3ltYm9sIG9uIHRoZSBpbnN0YW5jZVxyXG4gICovXHJcbmZ1bmN0aW9uIGJvdW5kTWV0aG9kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XHJcbiAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG5cclxuICBpZih0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgQGF1dG9iaW5kIGRlY29yYXRvciBjYW4gb25seSBiZSBhcHBsaWVkIHRvIG1ldGhvZHMgbm90OiAke3R5cGVvZiBmbn1gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgIGlmICh0aGlzID09PSB0YXJnZXQucHJvdG90eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBmbi5iaW5kKHRoaXMpO1xyXG4gICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICAgIHZhbHVlOiBib3VuZEZuLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBib3VuZEZuO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4gLypcclxuICAqIFVzZSBib3VuZE1ldGhvZCB0byBiaW5kIGFsbCBtZXRob2RzIG9uIHRoZSB0YXJnZXQucHJvdG90eXBlXHJcbiAgKi9cclxuZnVuY3Rpb24gYm91bmRDbGFzcyh0YXJnZXQpIHtcclxuIC8vIChVc2luZyByZWZsZWN0IHRvIGdldCBhbGwga2V5cyBpbmNsdWRpbmcgc3ltYm9scylcclxuICBjb25zdCBrZXlzID0gUmVmbGVjdC5vd25LZXlzKHRhcmdldC5wcm90b3R5cGUpO1xyXG5cclxuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAvLyBJZ25vcmUgc3BlY2lhbCBjYXNlIHRhcmdldCBtZXRob2RcclxuICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQucHJvdG90eXBlLCBrZXkpO1xyXG5cclxuICAgLy8gT25seSBtZXRob2RzIG5lZWQgYmluZGluZ1xyXG4gICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LnByb3RvdHlwZSwga2V5LCBib3VuZE1ldGhvZCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9iaW5kKC4uLmFyZ3MpIHtcclxuICBpZihhcmdzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIGJvdW5kQ2xhc3MoLi4uYXJncyk7XHJcbiAgfVxyXG4gIHJldHVybiBib3VuZE1ldGhvZCguLi5hcmdzKTtcclxufVxyXG4iXX0=