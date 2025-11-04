/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isEmptyArray
 * @desc Export function to validate if a value is an array of null length or not
 * @example
 *
 * import { isEmptyArray } from 'itee-validators'
 *
 * if( isEmptyArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isNotArray } from './isArray.js'

/**
 * Check if given data is an empty array
 *
 * @param data {*} The data to check against the empty array
 * @returns {boolean} true if data is an empty array, false otherwise
 */
export function isEmptyArray( data ) {

    if ( isNotArray( data ) ) { return false }

    return ( data.length === 0 )

}

/**
 * Check if given data is not an empty array
 *
 * @param data {*} The data to check against the empty array
 * @returns {boolean} true if data is not an empty array, false otherwise
 */
export function isNotEmptyArray( data ) {

    if ( isNotArray( data ) ) { return true }

    return ( data.length > 0 )

}
