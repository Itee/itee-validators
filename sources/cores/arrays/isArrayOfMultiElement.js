/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays/isArrayOfMultiElement
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

import { isNotArray } from './isArray'

/**
 * Check if given data is an array with multiples values
 *
 * @param data {*} The data to check against the single valued array
 * @returns {boolean} true if data is an array with multiples values, false otherwise
 */
export function isArrayOfMultiElement ( data ) {

    if ( isNotArray( data ) ) { return false }

    return ( data.length > 1 )

}
