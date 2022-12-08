'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isInt16Array ( data ) {
    return ( data instanceof Int16Array )
}
function isNotInt16Array ( data ) {
    return !isInt16Array( data )
}

exports.isInt16Array = isInt16Array;
exports.isNotInt16Array = isNotInt16Array;
