/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects/isEmptyObject
 * @desc Export the validation methods about empty objects
 * @requires {@link module:sources/cores/voids/isEmpty}
 * @requires {@link module:sources/cores/objects/isObject}
 *
 */

import { isObject } from './isObject'
import {
    isEmpty,
    isNotEmpty
} from '../voids/isEmpty'

/**
 * Check if given data is an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is an empty object, false otherwise
 */
export function isEmptyObject ( data ) {
    return ( isObject( data ) && isEmpty( data ) )
}

/**
 * Check if given data is not an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
export function isNotEmptyObject ( data ) {
    return ( isObject( data ) && isNotEmpty( data ) )
}
