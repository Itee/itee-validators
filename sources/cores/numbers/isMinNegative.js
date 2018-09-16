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
 * Check if the given data is a minimum negative number
 *
 * @param data {any} The data to check against the minimum infinite state
 * @returns {boolean} true if data is negative minimum, false otherwise
 */
export function isMinNegative ( data ) {
    return (data === -Number.MIN_VALUE)
}
