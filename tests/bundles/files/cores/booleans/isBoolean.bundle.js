'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isBoolean ( data ) {
    return ( typeof data === 'boolean' )
}
function isNotBoolean ( data ) {
    return ( typeof data !== 'boolean' )
}
function isBoolean_alt ( data ) {
    return typeof data === 'boolean' || ( typeof data === 'object' && data !== null && typeof data.valueOf() === 'boolean' )
}
function isNotBoolean_negbase ( data ) {
    return !isBoolean( data )
}

exports.isBoolean = isBoolean;
exports.isBoolean_alt = isBoolean_alt;
exports.isNotBoolean = isNotBoolean;
exports.isNotBoolean_negbase = isNotBoolean_negbase;
