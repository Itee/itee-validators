'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

function isNumber ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Number )
}
function isNotNumber ( data ) {
    return !( isNumber( data ) )
}

function isInfinite ( data ) {
    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }
    return !Number.isFinite( data )
}
function isInfiniteNegative ( data ) {
    return ( data === Number.NEGATIVE_INFINITY )
}
function isInfinitePositive ( data ) {
    return ( data === Number.POSITIVE_INFINITY )
}
function isFinite ( data ) {
    return Number.isFinite( data )
}

exports.isFinite = isFinite;
exports.isInfinite = isInfinite;
exports.isInfiniteNegative = isInfiniteNegative;
exports.isInfinitePositive = isInfinitePositive;
