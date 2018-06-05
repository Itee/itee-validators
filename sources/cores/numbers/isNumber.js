/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isNumber
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if given data is a number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
export function isNumber ( data ) {
    return (typeof data === 'number' && !Number.isNaN( data ) )
}

// Alt
export function isNumber_1 ( data ) {
    return (Number( data ) === data)
}

/**
 * Check if given data is not a number
 *
 * @param data {any} The data to check against the number type
 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
 */
export function isNotNumber ( data ) {
    return (typeof data !== 'number' || Number.isNaN( data ) )
}

/**
 * Check if given data is not a number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is not a number, false otherwise.
 */
export function isNaN ( data ) {
    return Number.isNaN( data )
}

///

/**
 * Check if the data is a positive number
 *
 * @param data {any} The data to check against the positivity
 * @returns {boolean} true if data is a positive number, false otherwise.
 */
export function isNumberPositive ( data ) {
    return (isNumber( data ) && data > 0)
}

/**
 * Check if the data is a negative number
 *
 * @param data {any} The data to check against the negativity
 * @returns {boolean} true if data is a negative number, false otherwise.
 */
export function isNumberNegative ( data ) {
    return (isNumber( data ) && data < 0)
}
