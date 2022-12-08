'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isArrayBuffer ( data ) {
    return ( data instanceof ArrayBuffer )
}
function isNotArrayBuffer ( data ) {
    return !isArrayBuffer( data )
}

exports.isArrayBuffer = isArrayBuffer;
exports.isNotArrayBuffer = isNotArrayBuffer;
