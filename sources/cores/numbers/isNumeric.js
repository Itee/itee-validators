/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isNumeric
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is numerical
 *
 * @param data {any} The data to check against the numerical type
 * @returns {boolean} true if data is numeric, false otherwise
 */
export function isNumeric ( data ) {
    return ( typeof data === 'number' )
}

/**
 * Check if the given data is not numerical
 *
 * @param data {any} The data to check against the numerical type
 * @returns {boolean} true if data is not numeric, false otherwise
 */
export function isNotNumeric ( data ) {
    return ( typeof data !== 'number' )
}
