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
function isNotEmptyString ( data ) {
    return !( isEmptyString( data ) )
}

exports.isEmptyString = isEmptyString;
exports.isNotEmptyString = isNotEmptyString;
