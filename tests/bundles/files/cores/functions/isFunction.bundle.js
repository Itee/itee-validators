'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isFunction ( data ) {
    return ( typeof data === 'function' )
}
function isNotFunction ( data ) {
    return ( typeof data !== 'function' )
}

exports.isFunction = isFunction;
exports.isNotFunction = isNotFunction;
