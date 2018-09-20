/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

import { isCelsius } from './isCelsius'

/**
 *
 * @param data
 * @return {boolean}
 */
export function isNotCelsius ( data ) {
    return !isCelsius( data )
}
