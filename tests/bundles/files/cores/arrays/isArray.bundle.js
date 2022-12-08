'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isArray ( data ) {
    return Array.isArray( data )
}
function isNotArray ( data ) {
    return !Array.isArray( data )
}
function isArray_0 ( data ) {
    return data instanceof Array
}
function isNotArray_0 ( data ) {
    return !isArray( data )
}

exports.isArray = isArray;
exports.isArray_0 = isArray_0;
exports.isNotArray = isNotArray;
exports.isNotArray_0 = isNotArray_0;
