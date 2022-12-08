'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

function isInfinite ( data ) {
    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }
    return !Number.isFinite( data )
}
function isInfinitePositive ( data ) {
    return ( data === Number.POSITIVE_INFINITY )
}

function isZeroPositive ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}

function isNumber ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Number )
}
function isNumberPositive ( data ) {
    if ( isNotNumber( data ) ) { return false }
    return ( data > 0 || isZeroPositive( data ) || isInfinitePositive( data ) )
}
function isNumberNegative ( data ) {
    return ( isNumber( data ) && data < 0 )
}
function isNotNumber ( data ) {
    return !( isNumber( data ) )
}
function isInteger ( data ) {
    return Number.isInteger( data )
}
function isFloat ( data ) {
    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }
    if ( isInfinite( data ) ) { return false}
    return data % 1 !== 0
}
function isNaN ( data ) {
    return Number.isNaN( data )
}
function isNumber_0 ( data ) {
    return ( typeof data === 'number' && !Number.isNaN( data ) )
}
function isNumber_1 ( data ) {
    return ( Number( data ) === data )
}
function isInteger_0 ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}
function isInteger_1 ( data ) {
    return data % 1 === 0
}
function isInteger_2 ( n ) {
    return n === +n && n === ( n | 0 )
}
function isInteger_3 ( nVal ) {
    return typeof nVal === 'number' && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal
}
function isFloat_1 ( n ) {
    return n === +n && n !== ( n | 0 )
}
function isFloat_2 ( x ) {
    return !!( x % 1 )
}

exports.isFloat = isFloat;
exports.isFloat_1 = isFloat_1;
exports.isFloat_2 = isFloat_2;
exports.isInteger = isInteger;
exports.isInteger_0 = isInteger_0;
exports.isInteger_1 = isInteger_1;
exports.isInteger_2 = isInteger_2;
exports.isInteger_3 = isInteger_3;
exports.isNaN = isNaN;
exports.isNotNumber = isNotNumber;
exports.isNumber = isNumber;
exports.isNumberNegative = isNumberNegative;
exports.isNumberPositive = isNumberPositive;
exports.isNumber_0 = isNumber_0;
exports.isNumber_1 = isNumber_1;
