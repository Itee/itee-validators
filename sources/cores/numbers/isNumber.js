/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNullOrUndefined } from '../voids/isNullOrUndefined'

/**
 * Check if given data is a number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
export function isNumber ( data ) {

    if ( isNullOrUndefined( data ) ) { return false }

    return (data.constructor === Number)

}

// #if IS_REMOVE
export function isNumber_0 ( data ) {
    return (typeof data === 'number' && !Number.isNaN( data ))
}

export function isNumber_1 ( data ) {
    return (Number( data ) === data)
}

// #endif
