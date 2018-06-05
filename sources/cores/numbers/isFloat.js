/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isFloat
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if given data is a floating point number
 *
 * @param data {any} The data to check against the floating point
 * @returns {boolean} true if data is a float, false otherwise
 */
export function isFloat ( data ) {
    return data % 1 !== 0
}

// Alternatives
function isFloat_1 ( n ) {
    return n === +n && n !== (n | 0)
}

// Alternatives
function isFloat_2 ( x ) {
    return !!(x % 1)
}
