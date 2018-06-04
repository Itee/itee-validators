/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * Check if given data is an object
 * @param data
 * @returns {boolean} true if data is object, false otherwise
 */

import { isNotNull } from '../voids/isNull'

export function isObject ( data ) {
    return ( isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ) )
}


/**
 * Check if given data is not an object
 * @param data
 * @returns {boolean} true if data is not an object, false otherwise
 */
export function isNotObject ( data ) {
    return !isObject( data )
}
