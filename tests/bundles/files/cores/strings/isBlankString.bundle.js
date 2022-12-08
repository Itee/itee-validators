'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}
function isNotString ( data ) {
    return !isString( data )
}

function isEmptyString ( data ) {
    if ( isNotString( data ) ) {
        return false
    }
    return ( data.length === 0 )
}

function isBlankString ( data ) {
    if ( isNotString( data ) ) { return false }
    if ( isEmptyString( data ) ) { return false }
    return ( !/\S/.test( data ) )
}
function isNotBlankString ( data ) {
    return !( isBlankString( data ) )
}

exports.isBlankString = isBlankString;
exports.isNotBlankString = isNotBlankString;
