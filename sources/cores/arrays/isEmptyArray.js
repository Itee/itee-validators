/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isEmptyArray
 * @desc Export the validation methods about array containing other types
 * @requires {@link module:sources/cores/arrays/isArray}
 * @requires {@link module:sources/cores/voids/isEmpty}
 *
 */

import { isArray } from './isArray'
import { isEmpty, isNotEmpty } from '../voids/isEmpty'

/**
 * Check if given data is an empty array
 *
 * @param data {any} The data to check against the empty array
 * @returns {boolean} true if data is an empty array, false otherwise
 */
export function isEmptyArray ( data ) {
    return ( isArray( data ) && isEmpty( data ) )
}

/**
 * Check if given data is not an empty array
 *
 * @param data {any} The data to check against the empty array
 * @returns {boolean} true if data is not an empty array, false otherwise
 */
export function isNotEmptyArray ( data ) {
    return ( isArray( data ) && isNotEmpty( data ) )
}
