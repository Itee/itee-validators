/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings/isEmptyString
 * @desc Export the validation methods about strings
 * @requires {@link module:sources/cores/strings/isString}
 *
 */

import {
    isString,
    isNotString
} from './isString'

/**
 * Check if given data is an empty string
 *
 * @param data {any} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
export function isEmptyString ( data ) {

    console.assert( isString( data ), 'Expect a string !' )

    return (data.length === 0)

}

/**
 * Check if given data is not an empty string
 *
 * @param data {any} The data to check against the emptiness of the string
 * @returns {boolean} true if data is not an empty string, false otherwise.
 */
export function isNotEmptyString ( data ) {

    if ( isNotString( data ) ) {
        throw new TypeError( 'Expect a string !' )
    }

    return (data.length > 0)

}
