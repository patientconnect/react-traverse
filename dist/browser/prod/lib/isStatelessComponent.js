'use strict';

exports.__esModule = true;
exports.default = isStatelessComponent;
function isStatelessComponent(type) {
  return typeof type.prototype === 'undefined' || typeof type.prototype.render !== 'function';
}