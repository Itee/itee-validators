/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isEmptyArray } from './isEmptyArray'

/**
 * Check if given data is not an empty array where all values are string
 * @param data
 * @returns {boolean|*} true if data is not an empty array where all values are string, false otherwise
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
 * @param data
 * @returns {boolean|*} true if data is not an empty array where all values are not string, false otherwise
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
