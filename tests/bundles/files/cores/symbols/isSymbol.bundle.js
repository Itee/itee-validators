'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isSymbol ( data ) {
    return ( typeof data === 'symbol' )
}
function isNotSymbol ( data ) {
    return ( typeof data !== 'symbol' )
}

exports.isNotSymbol = isNotSymbol;
exports.isSymbol = isSymbol;
