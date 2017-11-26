'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _bluebird = require('bluebird');

var _asFunction = require('should/as-function');

var _asFunction2 = _interopRequireDefault(_asFunction);

var _ComplexClass = require('./fixtures/ComplexClass');

var _ComplexClass2 = _interopRequireDefault(_ComplexClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;


describe('sanity', function () {
  it('shouldjs should not extend Object.prototype', function () {
    return (0, _asFunction2.default)(Object.prototype).not.have.property('should');
  });
  it('Complex class transforms should work', function () {
    var TEN = 10;
    var THIRTYFIVE = 35;
    var inst = new _ComplexClass2.default(TEN);
    (0, _asFunction2.default)(inst).be.an.instanceOf(_ComplexClass2.default);
    (0, _asFunction2.default)(inst.v).be.exactly(TEN);
    var multiplyByFortyFive = inst.multiplyByFortyFive;
    (0, _asFunction2.default)(multiplyByFortyFive()).be.exactly(TEN * THIRTYFIVE);
    (0, _asFunction2.default)(_ComplexClass2.default.multiplyByFortyFive(TEN)).be.exactly(TEN * THIRTYFIVE);
  });
  it('should transform async functions properly', function () {
    var asyncFunc = function () {
      var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/_regenerator2.default.mark(function () {
        function _callee() {
          var result;
          return _regenerator2.default.wrap(function () {
            function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _promise2.default.resolve('foobar');

                  case 2:
                    result = _context.sent;
                    return _context.abrupt('return', result);

                  case 4:
                  case 'end':
                    return _context.stop();
                }
              }
            }

            return _callee$;
          }(), _callee, this);
        }

        return _callee;
      }()));

      return function () {
        function asyncFunc() {
          return _ref.apply(this, arguments);
        }

        return asyncFunc;
      }();
    }();

    return asyncFunc().then(function (result) {
      return (0, _asFunction2.default)(result).be.exactly('foobar');
    });
  });
});