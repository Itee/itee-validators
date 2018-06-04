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
 * Check if given data is a string
 * @param data
 * @returns {boolean|*} true if data is a string, false otherwise.
 */
export function isString ( data ) {
    return (typeof data === 'string')
}

/**
 * Check if given data is not a string
 * @param data
 * @returns {boolean|*} true if data is not a string, false otherwise.
 */
export function isNotString ( data ) {
    return (typeof data !== 'string')
}
