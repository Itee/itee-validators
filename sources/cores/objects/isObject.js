/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects/isObject
 * @desc Export the validation methods about objects
 * @requires {@link module:sources/cores/voids/isNull}
 *
 */

import { isNotNull } from '../voids/isNull'


/**
 * Check if given data is an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
export function isObject ( data ) {
    return ( isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ) )
}

/**
 * Check if given data is not an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is not an object, false otherwise
 */
export function isNotObject ( data ) {
    return !isObject( data )
}
