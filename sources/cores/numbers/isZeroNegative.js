/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isZero
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is a negative zero
 *
 * @param data {*} The data to check against the negative zero value
 * @returns {boolean} true if data is a negative zero, false otherwise
 */
export function isZeroNegative ( data ) {
    return (data === 0 && (1 / data) === Number.NEGATIVE_INFINITY)
}
