/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/strings
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

import { isNotString } from './isNotString'

/**
 * Check if given data is an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
export function isEmptyString ( data ) {

    if ( isNotString( data ) ) {
        return false
    }

    return (data.length === 0)

}
