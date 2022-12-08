'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isInt32Array ( data ) {
    return ( data instanceof Int32Array )
}
function isNotInt32Array ( data ) {
    return !isInt32Array( data )
}

exports.isInt32Array = isInt32Array;
exports.isNotInt32Array = isNotInt32Array;
