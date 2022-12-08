'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isBigInt64Array ( data ) {
    return ( data instanceof BigInt64Array )
}
function isNotBigInt64Array ( data ) {
    return !isBigInt64Array( data )
}

exports.isBigInt64Array = isBigInt64Array;
exports.isNotBigInt64Array = isNotBigInt64Array;
