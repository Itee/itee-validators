/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isArray } from './isArray'
import { isEmpty, isNotEmpty } from '../voids/isEmpty'

/**
 * Check if given data is an empty array
 * @param data
 * @returns {boolean|*} true if data is an empty array, false otherwise
 */
export function isEmptyArray ( data ) {
    return ( isArray( data ) && isEmpty( data ) )
}

/**
 * Check if given data is not an empty array
 * @param data
 * @returns {boolean|*} true if data is not an empty array, false otherwise
 */
export function isNotEmptyArray ( data ) {
    return ( isArray( data ) && isNotEmpty( data ) )
}
