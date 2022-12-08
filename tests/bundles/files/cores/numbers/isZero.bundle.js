'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isZero ( data ) {
    return ( data === 0 )
}
function isZeroPositive ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}
function isZeroNegative ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.NEGATIVE_INFINITY )
}

exports.isZero = isZero;
exports.isZeroNegative = isZeroNegative;
exports.isZeroPositive = isZeroPositive;
