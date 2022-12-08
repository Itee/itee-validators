'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isFloat64Array ( data ) {
    return ( data instanceof Float64Array )
}
function isNotFloat64Array ( data ) {
    return !isFloat64Array( data )
}

exports.isFloat64Array = isFloat64Array;
exports.isNotFloat64Array = isNotFloat64Array;
