'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isBoolean ( data ) {
    return ( typeof data === 'boolean' )
}

function isTrue ( data ) {
    return ( isBoolean( data ) && ( data === true ) )
}
function isFalse ( data ) {
    return ( isBoolean( data ) && ( data === false ) )
}

exports.isFalse = isFalse;
exports.isTrue = isTrue;
