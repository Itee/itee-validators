'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isMaxPositive ( data ) {
    return ( data === Number.MAX_VALUE )
}
function isMaxNegative ( data ) {
    return ( data === -Number.MAX_VALUE )
}

exports.isMaxNegative = isMaxNegative;
exports.isMaxPositive = isMaxPositive;
