'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isArrayOfSingleElement ( data ) {
    if ( isNotArray( data ) ) { return false }
    if ( data.length !== 1 ) {
        return false
    }
    return true
}

exports.isArrayOfSingleElement = isArrayOfSingleElement;
