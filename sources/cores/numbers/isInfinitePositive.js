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
 * Check if the given data is an infinite positive number
 *
 * @param data {any} The data to check against the positive infinite state
 * @returns {boolean} true if data is positive infinite, false otherwise
 */
export function isInfinitePositive ( data ) {
    return (data === Number.POSITIVE_INFINITY)
}
