/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNumber } from './isNumber'

/**
 * Check if the data is a negative number
 *
 * @param data {any} The data to check against the negativity
 * @returns {boolean} true if data is a negative number, false otherwise.
 */
export function isNumberNegative ( data ) {
    return (isNumber( data ) && data < 0)
}
