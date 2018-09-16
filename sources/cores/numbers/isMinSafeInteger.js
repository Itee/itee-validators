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
 * Check if the given data is a minimum safe integer number
 *
 * @param data {any} The data to check against the minimum safe integer state
 * @returns {boolean} true if data is a minimum safe integer, false otherwise
 */
export function isMinSafeInteger ( data ) {
    return (data === Number.MIN_SAFE_INTEGER)
}
