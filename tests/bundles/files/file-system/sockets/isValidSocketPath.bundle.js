'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

function isValidPath ( data ) {
    return fs__default["default"].existsSync( data )
}

function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

function isSocketPath ( path ) {
    const stat = fs__default["default"].statSync( path, { throwIfNoEntry: false } );
    return isDefined(stat) && stat.isSocket()
}

function isValidSocketPath ( data ) {
    return ( isValidPath( data ) && isSocketPath( data ) )
}
function isInvalidSocketPath ( data ) {
    return !isValidSocketPath( data )
}

exports.isInvalidSocketPath = isInvalidSocketPath;
exports.isValidSocketPath = isValidSocketPath;
