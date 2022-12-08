'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

function isFilePath ( path ) {
    const stat = fs__default["default"].statSync( path, { throwIfNoEntry: false } );
    return isDefined(stat) && stat.isFile()
}

function isEmptyFile ( filePath, threshold = 0 ) {
    return isFilePath(filePath) && ( fs__default["default"].statSync( filePath ).size <= threshold )
}
function isNotEmptyFile ( filePath, threshold = 0 ) {
    return !isEmptyFile(filePath, threshold)
}

exports.isEmptyFile = isEmptyFile;
exports.isNotEmptyFile = isNotEmptyFile;
