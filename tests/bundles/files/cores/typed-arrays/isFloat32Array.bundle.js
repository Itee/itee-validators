'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isFloat32Array ( data ) {
    return ( data instanceof Float32Array )
}
function isNotFloat32Array ( data ) {
    return !isFloat32Array( data )
}

exports.isFloat32Array = isFloat32Array;
exports.isNotFloat32Array = isNotFloat32Array;
