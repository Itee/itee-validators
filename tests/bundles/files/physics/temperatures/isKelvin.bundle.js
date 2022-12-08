'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

function isNumber ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Number )
}

const ABSOLUTE_ZERO_KELVIN = 0.00000000045;

function isKelvin ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN )
}
function isNotKelvin ( data ) {
    return !isKelvin( data )
}

exports.isKelvin = isKelvin;
exports.isNotKelvin = isNotKelvin;
