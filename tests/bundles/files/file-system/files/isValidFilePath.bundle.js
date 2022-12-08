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

function isFilePath ( path ) {
    const stat = fs__default["default"].statSync( path, { throwIfNoEntry: false } );
    return isDefined(stat) && stat.isFile()
}

function isValidFilePath ( data ) {
    return ( isValidPath( data ) && isFilePath( data ) )
}
function isInvalidFilePath ( data ) {
    return !isValidFilePath( data )
}

exports.isInvalidFilePath = isInvalidFilePath;
exports.isValidFilePath = isValidFilePath;
