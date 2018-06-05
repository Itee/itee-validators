/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isInteger
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is an integer number
 *
 * @param data {any} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
export function isInteger ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

// Alternatives
function isInteger_1 ( data ) {
    return data % 1 === 0
}

// Alternatives
function isInteger_2 ( n ) {
    return n === +n && n === (n | 0);
}

// Alternatives
function isInteger_3 ( nVal ) {
    return typeof nVal === "number" && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal;
}
