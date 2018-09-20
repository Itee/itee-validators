/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isInfinite
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is an infinite positive number
 *
 * @param data {*} The data to check against the positive infinite state
 * @returns {boolean} true if data is positive infinite, false otherwise
 */
export function isInfinitePositive ( data ) {
    return (data === Number.POSITIVE_INFINITY)
}
