/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isBoolean } from './isBoolean'

/**
 * Check if given data is not a boolean
 *
 * @param data {any} The data to check against the booleaness
 * @returns {boolean} true if data is not a boolean, false otherwise.
 */
export function isNotBoolean ( data ) {
    return (typeof data !== 'boolean')
}

// #if IS_REMOVE
export function isNotBoolean_negbase ( data ) {
    return !isBoolean( data )
}
// #endif
