/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfBoolean
 * @desc Export function to validate if a value is an array of functions or not
 * @example
 *
 * import { isArrayOfFunction } from 'itee-validators'
 *
 * if( isArrayOfFunction( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isNotFunction } from '../functions/isFunction'
import { isNotArray }    from './isArray'
import { isEmptyArray }  from './isEmptyArray'

/**
 * Check if given data is not an empty array where all values are functions
 *
 * @param data {*} The data to check against the array of functions
 * @returns {boolean} true if data is not an empty array where all values are functions, false otherwise
 */
export function isArrayOfFunction( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotFunction( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are not functions
 *
 * @param data {*} The data to check against the array of functions
 * @returns {boolean} true if data is not an empty array where all values are not functions, false otherwise
 */
export function isNotArrayOfFunction( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotFunction( data[ index ] ) ) {
            return true
        }
    }

    return false

}
