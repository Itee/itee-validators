/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isObject } from './isObject'
import { isNotEmpty } from '../voids/isNotEmpty'

/**
 * Check if given data is not an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
export function isNotEmptyObject ( data ) {
    return (isObject( data ) && isNotEmpty( data ))
}
