/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isZero
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is zero
 *
 * @param data {any} The data to check against the zero value
 * @returns {boolean} true if data is zero, false otherwise
 */
export function isZero ( data ) {
    return (data === 0)
}

/**
 * Check if the given data is a positive zero
 *
 * @param data {any} The data to check against the positive zero value
 * @returns {boolean} true if data is a positive zero, false otherwise
 */
export function isZeroPositive ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

/**
 * Check if the given data is a negative zero
 *
 * @param data {any} The data to check against the negative zero value
 * @returns {boolean} true if data is a negative zero, false otherwise
 */
export function isZeroNegative ( data ) {
    return (data === 0 && (1 / data) === Number.NEGATIVE_INFINITY)
}
