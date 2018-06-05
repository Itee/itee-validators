/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings/isBlanktring
 * @desc Export the validation methods about strings
 * @requires {@link module:sources/cores/strings/isEmptyString}
 *
 */

import {
    isEmptyString,
    isNotEmptyString
} from './isEmptyString'

/**
 * Check if the given data is a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is a blank string, false otherwise.
 */
export function isBlankString ( data ) {

    if ( isEmptyString( data ) ) {
        throw new TypeError( 'Expect a non empty string !' )
    }

    return ( !/\S/.test( data ) )
}

/**
 * Check if the given data is not a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
export function isNotBlankString ( data ) {
    return ( isNotEmptyString( data ) && /\S/.test( data ) )
}
