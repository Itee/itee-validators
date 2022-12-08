'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotNull ( data ) {
    return ( data !== null )
}

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

function isArrayOfNull ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNull( data[ index ] ) ) {
            return false
        }
    }
    return true
}
function isNotArrayOfNull ( data ) {
    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNull( data[ index ] ) ) {
            return true
        }
    }
    return false
}

exports.isArrayOfNull = isArrayOfNull;
exports.isNotArrayOfNull = isNotArrayOfNull;
