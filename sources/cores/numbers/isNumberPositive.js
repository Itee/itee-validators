/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isNumber
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

import { isInfinitePositive } from './isInfinitePositive'
import { isNotNumber }        from './isNotNumber'
import { isZeroPositive }     from './isZeroPositive'

/**
 * Check if the data is a positive number
 *
 * @param data {*} The data to check against the positivity
 * @returns {boolean} true if data is a positive number, false otherwise.
 */
export function isNumberPositive ( data ) {

    if ( isNotNumber( data ) ) { return false }

    return (data > 0 || isZeroPositive( data ) || isInfinitePositive( data ))

}
