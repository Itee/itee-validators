'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}
function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

exports.isDefined = isDefined;
exports.isNotDefined = isNotDefined;
