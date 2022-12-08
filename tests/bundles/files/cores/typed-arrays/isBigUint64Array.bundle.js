'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isBigUint64Array ( data ) {
    return ( data instanceof BigUint64Array )
}
function isNotBigUint64Array ( data ) {
    return !isBigUint64Array( data )
}

exports.isBigUint64Array = isBigUint64Array;
exports.isNotBigUint64Array = isNotBigUint64Array;
