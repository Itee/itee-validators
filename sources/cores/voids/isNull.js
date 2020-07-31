/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isNull
 * @desc Export function to validate if a value is null or not
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
 * Check if given data is null
 *
 * @param data {*} The data to check against the nullity
 * @returns {boolean} true if data is null, false otherwise.
 */
export function isNull ( data ) {
    return ( data === null )
}

// #if IS_REMOVE_ON_BUILD

export function isNull_0 ( value ) {
    return Object.is( value, null )
}

// #endif

/**
 * Check if given data is not null
 *
 * @param data {*} The data to check against the nullity
 * @returns {boolean} true if data is not null, false otherwise.
 */
export function isNotNull ( data ) {
    return ( data !== null )
}
