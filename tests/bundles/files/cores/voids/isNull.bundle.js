'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNull ( data ) {
    return ( data === null )
}
function isNull_0 ( value ) {
    return Object.is( value, null )
}
function isNotNull ( data ) {
    return ( data !== null )
}

exports.isNotNull = isNotNull;
exports.isNull = isNull;
exports.isNull_0 = isNull_0;
