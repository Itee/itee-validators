/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNotArray } from './isNotArray'

/**
 * Check if given data is an array with a single value
 *
 * @param data {any} The data to check against the single valued array
 * @returns {boolean} true if data is an array with a single value, false otherwise
 */
export function isArrayOfSingleElement ( data ) {

    if ( isNotArray( data ) ) { return false }

    if ( data.length !== 1 ) {
        return false
    }

    return true

}
