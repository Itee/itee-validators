/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isBlankString
 * @desc Export function to validate if a value is a blank string
 * @example todo
 *
 */

import { isEmptyString } from './isEmptyString'
import { isNotString }   from './isString'

/**
 * Check if the given data is a blank string
 *
 * @param data {*} The data to check against the blankness of the string
 * @returns {boolean} true if data is a blank string, false otherwise.
 */
export function isBlankString ( data ) {

    if ( isNotString( data ) ) { return false }
    if ( isEmptyString( data ) ) { return false }

    return ( !/\S/.test( data ) )
}

////

/**
 * Check if the given data is not a blank string
 *
 * @param data {*} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
export function isNotBlankString ( data ) {

    return !( isBlankString( data ) )

}
