/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isInfinite
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

import { isNotNumber } from './isNotNumber'

/**
 * Check if the given data is an infinite number
 *
 * @param data {*} The data to check against the infinite state
 * @returns {boolean} true if data is infinite, false otherwise
 */
export function isInfinite ( data ) {

    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }

    return !Number.isFinite( data )
}
