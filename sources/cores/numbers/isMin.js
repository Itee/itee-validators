/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isMin
 * @desc Export the validation methods about numbers
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

/**
 * Check if the given data is a minimum positive number
 *
 * @param data {any} The data to check against the positive minimum state
 * @returns {boolean} true if data is positive minimum, false otherwise
 */
export function isMinPositive ( data ) {
    return (data === Number.MIN_VALUE)
}

/**
 * Check if the given data is a minimum negative number
 *
 * @param data {any} The data to check against the minimum infinite state
 * @returns {boolean} true if data is negative minimum, false otherwise
 */
export function isMinNegative ( data ) {
    return (data === -Number.MIN_VALUE)
}
