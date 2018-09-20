/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

import { isEmptyString } from './isEmptyString'

/**
 * Check if given data is not an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is not an empty string, false otherwise.
 */
export function isNotEmptyString ( data ) {

    return !(isEmptyString(data))

}
