/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

import { isNotDefined } from '../voids/isDefined'

/**
 * Check if given data is an object
 *
 * @param data {*} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
export function isObject ( data ) {

    if ( isNotDefined( data ) ) { return false }

    return ( data.constructor === Object )
}

////

/**
 * Check if given data is not an object
 *
 * @param data {*} The data to check against the object type
 * @returns {boolean} true if data is not an object, false otherwise
 */
export function isNotObject ( data ) {
    return !isObject( data )
}
