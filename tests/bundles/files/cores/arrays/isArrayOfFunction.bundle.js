'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotFunction ( data ) {
    return ( typeof data !== 'function' )
}

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

function isArrayOfFunction ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotFunction( data[ index ] ) ) {
            return false
        }
    }
    return true
}
function isNotArrayOfFunction ( data ) {
    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotFunction( data[ index ] ) ) {
            return true
        }
    }
    return false
}

exports.isArrayOfFunction = isArrayOfFunction;
exports.isNotArrayOfFunction = isNotArrayOfFunction;
