'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

function isSymbolicLinkPath ( path ) {
    const stat = fs__default["default"].statSync( path, { throwIfNoEntry: false } );
    return isDefined(stat) && stat.isSymbolicLink()
}
function isNotSymbolicLinkPath ( path ) {
    return !isSymbolicLinkPath( path )
}

exports.isNotSymbolicLinkPath = isNotSymbolicLinkPath;
exports.isSymbolicLinkPath = isSymbolicLinkPath;
