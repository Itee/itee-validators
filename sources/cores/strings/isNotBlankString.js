/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

import { isBlankString } from './isBlankString'

/**
 * Check if the given data is not a blank string
 *
 * @param data {*} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
export function isNotBlankString ( data ) {

    return !(isBlankString( data ))

}
