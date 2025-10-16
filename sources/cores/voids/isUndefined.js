/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isUndefined
 * @desc Export function to validate if a value is a void
 * @example
 *
 * import { isNull } from 'itee-validators'
 *
 * if( isNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is undefined
 *
 * @param data {*} The data to check against the undefiness
 * @returns {boolean} true if data is undefined, false otherwise.
 */
export function isUndefined( data ) {
    return ( typeof data === 'undefined' )
}

/**
 * Check if given data is defined
 *
 * @param data {*} The data to check against the undefiness
 * @returns {boolean} true if data is defined, false otherwise.
 */
export function isNotUndefined( data ) {
    return ( typeof data !== 'undefined' )
}
