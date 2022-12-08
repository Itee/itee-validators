'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotUndefined ( data ) {
    return ( typeof data !== 'undefined' )
}

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

function isArrayOfUndefined ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotUndefined( data[ index ] ) ) {
            return false
        }
    }
    return true
}
function isNotArrayOfUndefined ( data ) {
    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotUndefined( data[ index ] ) ) {
            return true
        }
    }
    return false
}

exports.isArrayOfUndefined = isArrayOfUndefined;
exports.isNotArrayOfUndefined = isNotArrayOfUndefined;
