'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

function isDirectoryPath ( path ) {
    const stat = fs__default["default"].statSync( path, { throwIfNoEntry: false } );
    return isDefined(stat) && stat.isDirectory()
}

function isEmptyDirectory ( directoryPath ) {
    return isDirectoryPath(directoryPath) && ( fs__default["default"].readdirSync( directoryPath ).length === 0 )
}
function isNotEmptyDirectory ( directoryPath ) {
    return !isEmptyDirectory( directoryPath )
}

exports.isEmptyDirectory = isEmptyDirectory;
exports.isNotEmptyDirectory = isNotEmptyDirectory;
