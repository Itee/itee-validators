'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

function isNumber ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Number )
}

const ABSOLUTE_ZERO_CELSIUS = -273.14999999955;

function isCelsius ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS )
}
function isNotCelsius ( data ) {
    return !isCelsius( data )
}

exports.isCelsius = isCelsius;
exports.isNotCelsius = isNotCelsius;
