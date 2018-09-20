/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example todo
 *
 */

import { isNotKelvin }     from './isNotKelvin'
import { isNotCelsius }    from './isNotCelsius'
import { isNotFahrenheit } from './isNotFahrenheit'

/**
 *
 * @param data
 * @return {boolean}
 */
export function isNotTemperature ( data ) {
    return (isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ))
}
