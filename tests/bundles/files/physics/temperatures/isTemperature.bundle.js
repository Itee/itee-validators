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
const ABSOLUTE_ZERO_CELSIUS = -273.14999999955;
const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

function isCelsius ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS )
}
function isNotCelsius ( data ) {
    return !isCelsius( data )
}

function isFahrenheit ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT )
}
function isNotFahrenheit ( data ) {
    return !isFahrenheit( data )
}

function isKelvin ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN )
}
function isNotKelvin ( data ) {
    return !isKelvin( data )
}

function isTemperature ( data ) {
    return ( isKelvin( data ) || isCelsius( data ) || isFahrenheit( data ) )
}
function isNotTemperature ( data ) {
    return ( isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ) )
}

exports.isNotTemperature = isNotTemperature;
exports.isTemperature = isTemperature;
