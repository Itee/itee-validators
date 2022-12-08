'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

function isObject ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Object )
}
function isNotObject ( data ) {
    return !isObject( data )
}

exports.isNotObject = isNotObject;
exports.isObject = isObject;
