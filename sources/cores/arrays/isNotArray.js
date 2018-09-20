/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

import { isArray } from './isArray'

/**
 * Check if given data is not an array
 *
 * @param data {*} The data to check against the array type
 * @returns {boolean} true if data is not array, false otherwise
 */
export function isNotArray ( data ) {
    return !Array.isArray( data )
}

// #if IS_REMOVE
export function isNotArray_0 ( data ) {
    return !isArray( data )
}

// #endif
