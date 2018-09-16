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
import { isEmpty } from '../voids/isEmpty'

/**
 * Check if given data is an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is an empty object, false otherwise
 */
export function isEmptyObject ( data ) {
    return (isObject( data ) && isEmpty( data ))
}
