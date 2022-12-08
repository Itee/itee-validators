'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isMinPositive ( data ) {
    return ( data === Number.MIN_VALUE )
}
function isMinNegative ( data ) {
    return ( data === -Number.MIN_VALUE )
}

exports.isMinNegative = isMinNegative;
exports.isMinPositive = isMinPositive;
