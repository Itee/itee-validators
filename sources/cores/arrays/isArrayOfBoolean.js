/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfBoolean
 * @desc Export function to validate if a value is an array of booleans or not
 * @example
 *
 * import { isArrayOfBoolean } from 'itee-validators'
 *
 * if( isArrayOfBoolean( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isNotBoolean } from '../booleans/isBoolean.js'
import { isNotArray }   from './isArray.js'
import { isEmptyArray } from './isEmptyArray.js'

/**
 * Check if given data is not an empty array where all values are boolean
 *
 * @param data {*} The data to check against the array of booleans
 * @returns {boolean} true if data is not an empty array where all values are boolean, false otherwise
 */
export function isArrayOfBoolean( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotBoolean( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are not boolean
 *
 * @param data {*} The data to check against the array of booleans
 * @returns {boolean} true if data is not an empty array where all values are not boolean, false otherwise
 */
export function isNotArrayOfBoolean( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotBoolean( data[ index ] ) ) {
            return true
        }
    }

    return false

}
