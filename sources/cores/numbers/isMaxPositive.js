/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isMax
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is a maximum positive number
 *
 * @param data {*} The data to check against the positive maximum state
 * @returns {boolean} true if data is positive maximum, false otherwise
 */
export function isMaxPositive ( data ) {
    return (data === Number.MAX_VALUE)
}
