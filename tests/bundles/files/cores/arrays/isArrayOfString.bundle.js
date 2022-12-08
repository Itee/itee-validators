'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}
function isNotString ( data ) {
    return !isString( data )
}

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

function isArrayOfString ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotString( data[ index ] ) ) {
            return false
        }
    }
    return true
}
function isNotArrayOfString ( data ) {
    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }
    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotString( data[ index ] ) ) {
            return true
        }
    }
    return false
}
function isArrayOfString_1 ( data ) {
    if ( !Array.isArray( data ) ) {
        return false
    }
    const dataLength = data.length;
    if ( dataLength === 0 ) {
        return false
    }
    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( typeof data[ index ] !== 'string' ) {
            return false
        }
    }
    return true
}

exports.isArrayOfString = isArrayOfString;
exports.isArrayOfString_1 = isArrayOfString_1;
exports.isNotArrayOfString = isNotArrayOfString;
