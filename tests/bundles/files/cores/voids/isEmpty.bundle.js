'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotArray ( data ) {
    return !Array.isArray( data )
}

function isEmptyArray ( data ) {
    if ( isNotArray( data ) ) { return false }
    return ( data.length === 0 )
}

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

function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}
function isNotString ( data ) {
    return !isString( data )
}

function isEmptyString ( data ) {
    if ( isNotString( data ) ) {
        return false
    }
    return ( data.length === 0 )
}

function isEmpty ( data ) {
    if ( isNotDefined( data ) ) { return false }
    if ( isEmptyString( data ) ) { return true}
    if ( isEmptyArray( data ) ) { return true }
    if ( isEmptyObject( data ) ) { return true }
    return false
}
function isNotEmpty ( data ) {
    return !isEmpty( data )
}

exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;
