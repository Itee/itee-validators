'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isUint8ClampedArray ( data ) {
    return ( data instanceof Uint8ClampedArray )
}
function isNotUint8ClampedArray ( data ) {
    return !isUint8ClampedArray( data )
}

exports.isNotUint8ClampedArray = isNotUint8ClampedArray;
exports.isUint8ClampedArray = isUint8ClampedArray;
