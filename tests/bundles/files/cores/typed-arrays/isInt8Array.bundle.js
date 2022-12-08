'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isInt8Array ( data ) {
    return ( data instanceof Int8Array )
}
function isNotInt8Array ( data ) {
    return !isInt8Array( data )
}

exports.isInt8Array = isInt8Array;
exports.isNotInt8Array = isNotInt8Array;
