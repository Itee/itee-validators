/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfSingleElement
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

import { isNotArray } from './isArray'

/**
 * Check if given data is an array with a single value
 *
 * @param data {*} The data to check against the single valued array
 * @returns {boolean} true if data is an array with a single value, false otherwise
 */
export function isArrayOfSingleElement ( data ) {

    if ( isNotArray( data ) ) { return false }

    if ( data.length !== 1 ) {
        return false
    }

    return true

}
