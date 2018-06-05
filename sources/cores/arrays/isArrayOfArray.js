/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArrayOfArray
 * @desc Export the validation methods about array containing other array
 * @requires {@link module:sources/cores/arrays/isArray}
 * @requires {@link module:sources/cores/arrays/isEmptyArray}
 *
 */

import {
    isArray,
    isNotArray
} from './isArray'
import { isEmptyArray } from './isEmptyArray'

/**
 * Check if given data is an array of array
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is an array of array, false otherwise
 */
export function isArrayOfArray ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNotArray( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an array of array
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an array of array, false otherwise
 */
export function isNotArrayOfArray ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isArray( data[ index ] ) ) {
            return false
        }
    }

    return true

}
