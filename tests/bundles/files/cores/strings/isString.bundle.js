'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}
function isNotString ( data ) {
    return !isString( data )
}
function isString_0 ( val ) {
    return ( typeof val === 'string' )
}
function isString_1 ( val ) {
    return ( typeof val === 'string' || ( ( !!val && typeof val === 'object' ) && Object.prototype.toString.call( val ) === '[object String]' ) )
}
function isString_2 ( val ) {
    return ( Object.prototype.toString.call( val ) === '[object String]' )
}
function isString_3 ( val ) {
    return ( val !== null && val !== undefined && val.constructor === String )
}
function isString_4 ( val ) {
    return ( val === val + '' )
}

exports.isNotString = isNotString;
exports.isString = isString;
exports.isString_0 = isString_0;
exports.isString_1 = isString_1;
exports.isString_2 = isString_2;
exports.isString_3 = isString_3;
exports.isString_4 = isString_4;
