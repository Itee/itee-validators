/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArrayOfString
 * @desc Export the validation methods about array containing other types
 * @requires {@link module:sources/cores/strings/isString}
 * @requires {@link module:sources/cores/arrays/isEmptyArray}
 *
 */

import { isString, isNotString } from '../strings/isString'
import { isEmptyArray } from './isEmptyArray'

/**
 * Check if given data is not an empty array where all values are string
 *
 * @param data {any} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
 */
export function isArrayOfString ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNotString( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are not string
 *
 * @param data {any} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
 */
export function isNotArrayOfString ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isString( data[ index ] ) ) {
            return false
        }
    }

    return true

}
