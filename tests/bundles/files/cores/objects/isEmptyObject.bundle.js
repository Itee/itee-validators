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

function isEmptyObject ( data ) {
    if ( isNotObject( data ) ) { return false }
    if ( data.length === 0 ) {
        return true
    }
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false
        }
    }
    return true
}
function isNotEmptyObject ( data ) {
    return !( isEmptyObject( data ) )
}

exports.isEmptyObject = isEmptyObject;
exports.isNotEmptyObject = isNotEmptyObject;
