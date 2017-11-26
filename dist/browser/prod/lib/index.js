'use strict';

exports.__esModule = true;
exports.wrapRender = exports.transformComponents = exports.isStatelessComponent = void 0;

require('babel-polyfill');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _isStatelessComponent = require('./isStatelessComponent');

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

var _traverse = require('./traverse');

var _traverse2 = _interopRequireDefault(_traverse);

var _transformComponents = require('./transformComponents');

var _transformComponents2 = _interopRequireDefault(_transformComponents);

var _wrapRender = require('./wrapRender');

var _wrapRender2 = _interopRequireDefault(_wrapRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __DEV__ = process && process.env && process.env.NODE_ENV === 'development';
_bluebird2.default.config({
  warnings: __DEV__,
  longStackTraces: __DEV__,
  cancellation: true
});

exports.isStatelessComponent = _isStatelessComponent2.default;
exports.transformComponents = _transformComponents2.default;
exports.wrapRender = _wrapRender2.default;
exports.default = _traverse2.default;