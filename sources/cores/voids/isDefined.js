/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isDefined
 * @desc Export function to validate if a value is a defined or not
 * @example
 *
 * import { isDefined } from 'itee-validators'
 *
 * if( isDefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is not null and not undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
export function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

/**
 * Check if given data is null or undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
export function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}
