'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotBoolean ( data ) {
    return ( typeof data !== 'boolean' )
}

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

function isArrayOfBoolean ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotBoolean( data[ index ] ) ) {
            return false
        }
    }
    return true
}
function isNotArrayOfBoolean ( data ) {
    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotBoolean( data[ index ] ) ) {
            return true
        }
    }
    return false
}

exports.isArrayOfBoolean = isArrayOfBoolean;
exports.isNotArrayOfBoolean = isNotArrayOfBoolean;
