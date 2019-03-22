/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/objects
 * @desc Export function to validate if a value is an object
 * @example todo
 *
 */

import { isNotObject } from './isObject'

/**
 * Check if given data is an empty object
 *
 * @param data {*} The data to check against the emptiness of the object
 * @returns {boolean} true if data is an empty object, false otherwise
 */
export function isEmptyObject ( data ) {

    if ( isNotObject( data ) ) { return false }

    if ( data.length === 0 ) {
        return true
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false
        }
    }

    return true

}

////

/**
 * Check if given data is not an empty object
 *
 * @param data {*} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
export function isNotEmptyObject ( data ) {
    return !( isEmptyObject( data ) )
}
