'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}
function isNotEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return true }
    return ( data.length > 0 )
}

exports.isEmptyArray = isEmptyArray;
exports.isNotEmptyArray = isNotEmptyArray;
