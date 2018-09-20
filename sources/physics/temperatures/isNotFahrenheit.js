/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

import { isFahrenheit } from './isFahrenheit'

/**
 *
 * @param data
 * @return {boolean}
 */
export function isNotFahrenheit ( data ) {
    return !isFahrenheit( data )
}
