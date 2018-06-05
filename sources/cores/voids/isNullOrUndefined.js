/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isNullOrUndefined
 * @desc Export the validation methods about nullity and undefiness
 *
 * @requires {@link module:sources/cores/voids/isNull}
 * @requires {@link module:sources/cores/voids/isUndefined}
 *
 */

import {
    isNull,
    isNotNull
} from './isNull'

import {
    isUndefined,
    isNotUndefined
} from './isUndefined'

/**
 * Check if given data is null or undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
export function isNullOrUndefined ( data ) {
    return (isNull( data ) || isUndefined( data ))
}

/**
 * Check if given data is null or undefined
 *
 * @alias isNullOrUndefined
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
export function no ( data ) {
    return ( (data === null) || (typeof data === 'undefined') )
}

/**
 * Check if given data is not null and not undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
export function isDefined ( data ) {
    return (isNotNull( data ) && isNotUndefined( data ))
}
