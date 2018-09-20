/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

import { isObject } from './isObject'

/**
 * Check if given data is not an object
 *
 * @param data {*} The data to check against the object type
 * @returns {boolean} true if data is not an object, false otherwise
 */
export function isNotObject ( data ) {
    return !isObject( data )
}
