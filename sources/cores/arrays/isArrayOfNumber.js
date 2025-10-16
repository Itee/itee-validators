/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfBoolean
 * @desc Export function to validate if a value is an array of numbers or not
 * @example
 *
 * import { isArrayOfNumber } from 'itee-validators'
 *
 * if( isArrayOfNumber( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isNotNumber }  from '../numbers/isNumber'
import { isNotArray }   from './isArray'
import { isEmptyArray } from './isEmptyArray'

/**
 * Check if given data is not an empty array where all values are numbers
 *
 * @param data {*} The data to check against the array of numbers
 * @returns {boolean} true if data is not an empty array where all values are numbers, false otherwise
 */
export function isArrayOfNumber( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNumber( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are not numbers
 *
 * @param data {*} The data to check against the array of numbers
 * @returns {boolean} true if data is not an empty array where all values are not numbers, false otherwise
 */
export function isNotArrayOfNumber( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNumber( data[ index ] ) ) {
            return true
        }
    }

    return false

}
