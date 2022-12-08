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

function isDirectoryPath ( path ) {
    const stat = fs__default["default"].statSync( path, { throwIfNoEntry: false } );
    return isDefined(stat) && stat.isDirectory()
}

function isValidDirectoryPath ( data ) {
    return ( isValidPath( data ) && isDirectoryPath( data ) )
}
function isInvalidDirectoryPath ( data ) {
    return !isValidDirectoryPath( data )
}

exports.isInvalidDirectoryPath = isInvalidDirectoryPath;
exports.isValidDirectoryPath = isValidDirectoryPath;
