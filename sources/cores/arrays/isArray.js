/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * Check if given data is an array
 * @param data
 * @returns {boolean} true if data is array, false otherwise
 */
export function isArray ( data ) {
    return Array.isArray( data )
}

/**
 * Check if given data is not an array
 * @param data
 * @returns {boolean} true if data is not array, false otherwise
 */
export function isNotArray ( data ) {
    return !isArray( data )
}
