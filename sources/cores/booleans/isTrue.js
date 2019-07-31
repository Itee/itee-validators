/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/booleans/isTrue
 * @desc Export function to validate if a value is a boolean set to true or false
 * @example todo
 *
 */

import { isBoolean } from './isBoolean'

/**
 * Check if given data is a boolean with value to true
 *
 * @param data {*} The data to check against true value
 * @returns {boolean} true if data is a boolean set to true, false otherwise.
 */
export function isTrue ( data ) {
    return ( isBoolean( data ) && ( data === true ) )
}

/**
 * Check if given data is a boolean with value to false
 *
 * @param data {*} The data to check against false value
 * @returns {boolean} true if data is a boolean set to false, false otherwise.
 */
export function isFalse ( data ) {
    return ( isBoolean( data ) && ( data === false ) )
}
