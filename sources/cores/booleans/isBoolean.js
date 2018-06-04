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
 * Check if given data is a boolean
 * @param data
 * @returns {boolean|*} true if data is a boolean, false otherwise.
 */
export function isBoolean ( data ) {
    return (typeof data === 'boolean')
}

/**
 * Check if given data is not a boolean
 * @param data
 * @returns {boolean|*} true if data is not a boolean, false otherwise.
 */
export function isNotBoolean ( data ) {
    return (typeof data !== 'boolean')
}
