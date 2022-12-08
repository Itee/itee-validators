'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

function isNumber ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Number )
}

const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

function isFahrenheit ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT )
}
function isNotFahrenheit ( data ) {
    return !isFahrenheit( data )
}

exports.isFahrenheit = isFahrenheit;
exports.isNotFahrenheit = isNotFahrenheit;
