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
 * Check if given data is a function
 * @param data
 * @returns {boolean|*} true if data is a function, false otherwise.
 */
export function isFunction ( data ) {
    return (typeof data === "function")
}

/**
 * Check if given data is not a function
 * @param data
 * @returns {boolean|*} true if data is not a function, false otherwise.
 */
export function isNotFunction ( data ) {
    return (typeof data !== "function")
}
