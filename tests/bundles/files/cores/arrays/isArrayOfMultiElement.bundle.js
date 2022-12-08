'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isArrayOfMultiElement ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length > 1 )
}

exports.isArrayOfMultiElement = isArrayOfMultiElement;
