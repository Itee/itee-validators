'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

function isCharacterDevicePath ( path ) {
    const stat = fs__default["default"].statSync( path, { throwIfNoEntry: false } );
    return isDefined(stat) && stat.isCharacterDevice()
}
function isNotCharacterDevicePath ( path ) {
    return !isCharacterDevicePath( path )
}

exports.isCharacterDevicePath = isCharacterDevicePath;
exports.isNotCharacterDevicePath = isNotCharacterDevicePath;
