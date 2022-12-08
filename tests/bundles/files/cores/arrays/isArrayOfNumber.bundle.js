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

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

function isArrayOfNumber ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNumber( data[ index ] ) ) {
            return false
        }
    }
    return true
}
function isNotArrayOfNumber ( data ) {
    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNumber( data[ index ] ) ) {
            return true
        }
    }
    return false
}

exports.isArrayOfNumber = isArrayOfNumber;
exports.isNotArrayOfNumber = isNotArrayOfNumber;
