/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isObject } from './isObject'
import {
    isEmpty,
    isNotEmpty
} from '../voids/isEmpty'

/**
 * Check if given data is an empty object
 * @param data
 * @returns {boolean|*} true if data is an empty object, false otherwise
 */
export function isEmptyObject ( data ) {
    return ( isObject( data ) && isEmpty( data ) )
}

/**
 * Check if given data is not an empty object
 * @param data
 * @returns {boolean|*} true if data is not an empty object, false otherwise
 */
export function isNotEmptyObject ( data ) {
    return ( isObject( data ) && isNotEmpty( data ) )
}
