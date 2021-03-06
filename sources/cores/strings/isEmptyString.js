/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isEmptyString
 * @desc Export function to validate if a value is a empty string
 * @example
 *
 * import { isEmptyString } from 'itee-validators'
 *
 * if( isEmptyString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isNotString } from './isString'

/**
 * Check if given data is an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
export function isEmptyString ( data ) {

    if ( isNotString( data ) ) {
        return false
    }

    return ( data.length === 0 )

}

/**
 * Check if given data is not an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is not an empty string, false otherwise.
 */
export function isNotEmptyString ( data ) {

    return !( isEmptyString( data ) )

}
