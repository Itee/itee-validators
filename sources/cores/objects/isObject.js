/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNotNull } from '../voids/isNotNull'


/**
 * Check if given data is an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
export function isObject ( data ) {
    return (isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ))
}
