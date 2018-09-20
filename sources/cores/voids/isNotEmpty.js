/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/voids
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

import { isEmpty } from './isEmpty'

/**
 * Check fullness of given data
 *
 * @param data {*} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
export function isNotEmpty ( data ) {
    return !isEmpty( data )
}
