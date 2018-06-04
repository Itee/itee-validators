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
 * Check if given data is not an empty array where all values are undefined
 * @param data
 * @returns {boolean|*} true if data is not an empty array where all values are undefined, false otherwise
 */
export function isArrayOfUndefined ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isDefined( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are defined
 * @param data
 * @returns {boolean|*} true if data is not an empty array where all values are defined, false otherwise
 */
export function isNotArrayOfUndefined ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isUndefined( data[ index ] ) ) {
            return false
        }
    }

    return true

}
