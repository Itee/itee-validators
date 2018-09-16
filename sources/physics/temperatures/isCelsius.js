/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNumber } from '../../cores/numbers/isNumber'
import { ABSOLUTE_ZERO_CELSIUS } from './constants'

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
export function isCelsius ( data ) {
    return (isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS)
}
