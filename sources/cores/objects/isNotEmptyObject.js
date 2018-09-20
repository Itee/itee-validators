/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

import { isEmptyObject } from './isEmptyObject'

/**
 * Check if given data is not an empty object
 *
 * @param data {*} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
export function isNotEmptyObject ( data ) {
    return !(isEmptyObject( data ))
}
