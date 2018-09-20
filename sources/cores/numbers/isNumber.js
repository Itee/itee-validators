/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isNumber
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

import { isNullOrUndefined } from '../voids/isNullOrUndefined'

/**
 * Check if given data is a number
 *
 * @param data {*} The data to check against the maximum safe integer state
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
