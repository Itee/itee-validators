'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isArray ( data ) {
    return Array.isArray( data )
}
function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

function isArrayOfArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotArray( data[ index ] ) ) {
            return false
        }
    }
    return true
}
function isNotArrayOfArray ( data ) {
    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isArray( data[ index ] ) ) {
            return false
        }
    }
    return true
}

exports.isArrayOfArray = isArrayOfArray;
exports.isNotArrayOfArray = isNotArrayOfArray;
