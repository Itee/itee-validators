/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
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
