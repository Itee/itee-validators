/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

import { isString } from './isString'

/**
 * Check if given data is not a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is not a string, false otherwise.
 */
export function isNotString ( data ) {
    return !isString( data )
}
