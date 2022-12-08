'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isUint16Array ( data ) {
    return ( data instanceof Uint16Array )
}
function isNotUint16Array ( data ) {
    return !isUint16Array( data )
}

exports.isNotUint16Array = isNotUint16Array;
exports.isUint16Array = isUint16Array;
