/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a kelvin temperature
 * @example
 *
 * import { isKelvin } from 'itee-validators'
 *
 * if( isKelvin( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isNumber }             from '../../cores/numbers/isNumber'
import { ABSOLUTE_ZERO_KELVIN } from './constants'

/**
 *
 * @param data
 * @return {boolean}
 */
export function isKelvin ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN )
}

/**
 *
 * @param data
 * @return {boolean}
 */
export function isNotKelvin ( data ) {
    return !isKelvin( data )
}
