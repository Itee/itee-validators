/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

import { isKelvin, isNotKelvin }     from './isKelvin'
import { isCelsius, isNotCelsius }    from './isCelsius'
import { isFahrenheit, isNotFahrenheit } from './isFahrenheit'

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
export function isTemperature ( data ) {
    return (isKelvin( data ) || isCelsius( data ) || isFahrenheit( data ))
}

///

/**
 *
 * @param data
 * @return {boolean}
 */
export function isNotTemperature ( data ) {
    return (isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ))
}