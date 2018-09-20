/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isKelvin } from './isKelvin'


/**
 *
 * @param data
 * @return {boolean}
 */
export function isNotKelvin ( data ) {
    return !isKelvin( data )
}
