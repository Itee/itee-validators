'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isUint8Array ( data ) {
    return ( data instanceof Uint8Array )
}
function isNotUint8Array ( data ) {
    return !isUint8Array( data )
}

exports.isNotUint8Array = isNotUint8Array;
exports.isUint8Array = isUint8Array;
