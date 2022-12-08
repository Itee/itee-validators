'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

function isValidPath ( data ) {
    return fs__default["default"].existsSync( data )
}
function isInvalidPath ( data ) {
    return !isValidPath( data )
}

exports.isInvalidPath = isInvalidPath;
exports.isValidPath = isValidPath;
