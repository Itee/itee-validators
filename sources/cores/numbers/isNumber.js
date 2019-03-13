/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isNumber
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

import { isNotDefined }   from '../voids/isDefined'
import {
    isInfinite,
    isInfinitePositive
}                         from './isInfinite'
import { isZeroPositive } from './isZero'

/**
 * Check if given data is a number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
export function isNumber ( data ) {

    if ( isNotDefined( data ) ) { return false }

    return ( data.constructor === Number )

}

// #if IS_REMOVE
export function isNumber_0 ( data ) {
    return ( typeof data === 'number' && !Number.isNaN( data ) )
}

export function isNumber_1 ( data ) {
    return ( Number( data ) === data )
}

// #endif

/**
 * Check if the data is a positive number
 *
 * @param data {*} The data to check against the positivity
 * @returns {boolean} true if data is a positive number, false otherwise.
 */
export function isNumberPositive ( data ) {

    if ( isNotNumber( data ) ) { return false }

    return ( data > 0 || isZeroPositive( data ) || isInfinitePositive( data ) )

}

/**
 * Check if the data is a negative number
 *
 * @param data {*} The data to check against the negativity
 * @returns {boolean} true if data is a negative number, false otherwise.
 */
export function isNumberNegative ( data ) {
    return ( isNumber( data ) && data < 0 )
}

//////

/**
 * Check if given data is not a number
 *
 * @param data {*} The data to check against the number type
 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
 */
export function isNotNumber ( data ) {
    return !( isNumber( data ) )
}

/////////

//Todo: isInRange(x, y, value, xInclusive, yInclusive)
//Todo: isInRangeZeroOne(value, zeroInclusive, oneInclusive) //inclusive

/////////

/**
 * Check if the given data is an integer number
 *
 * @param data {*} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
export function isInteger ( data ) {
    return Number.isInteger( data )
}

// #if IS_REMOVE
export function isInteger_0 ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}

export function isInteger_1 ( data ) {
    return data % 1 === 0
}

export function isInteger_2 ( n ) {
    return n === +n && n === ( n | 0 )
}

export function isInteger_3 ( nVal ) {
    return typeof nVal === 'number' && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal
}

// #endif

////////

/**
 * Check if given data is a floating point number
 *
 * @param data {*} The data to check against the floating point
 * @returns {boolean} true if data is a float, false otherwise
 */
export function isFloat ( data ) {

    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }
    if ( isInfinite( data ) ) { return false}

    return data % 1 !== 0

}

// #if IS_REMOVE
export function isFloat_1 ( n ) {
    return n === +n && n !== ( n | 0 )
}

export function isFloat_2 ( x ) {
    return !!( x % 1 )
}

// #endif

////////

/**
 * Check if given data is not a number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is not a number, false otherwise.
 */
export function isNaN ( data ) {
    return Number.isNaN( data )
}
