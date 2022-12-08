'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isUint32Array ( data ) {
    return ( data instanceof Uint32Array )
}
function isNotUint32Array ( data ) {
    return !isUint32Array( data )
}

exports.isNotUint32Array = isNotUint32Array;
exports.isUint32Array = isUint32Array;
