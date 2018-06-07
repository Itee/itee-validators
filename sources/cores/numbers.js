/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers
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

/**
 * Check if the given data is an integer number
 *
 * @param data {any} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
export function isInteger ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

export function isInteger_1 ( data ) {
    return data % 1 === 0
}

export function isInteger_2 ( n ) {
    return n === +n && n === (n | 0);
}

export function isInteger_3 ( nVal ) {
    return typeof nVal === "number" && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal;
}

/**
 * Check if given data is a floating point number
 *
 * @param data {any} The data to check against the floating point
 * @returns {boolean} true if data is a float, false otherwise
 */
export function isFloat ( data ) {
    return data % 1 !== 0
}

export function isFloat_1 ( n ) {
    return n === +n && n !== (n | 0)
}

export function isFloat_2 ( x ) {
    return !!(x % 1)
}

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

/**
 * Check if the given data is a maximum safe integer number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a maximum safe integer, false otherwise
 */
export function isMaxSafeInteger ( data ) {
    return (data === Number.MAX_SAFE_INTEGER)
}

/**
 * Check if the given data is a maximum positive number
 *
 * @param data {any} The data to check against the positive maximum state
 * @returns {boolean} true if data is positive maximum, false otherwise
 */
export function isMaxPositive ( data ) {
    return (data === Number.MAX_VALUE)
}

/**
 * Check if the given data is a maximum negative number
 *
 * @param data {any} The data to check against the maximum infinite state
 * @returns {boolean} true if data is negative maximum, false otherwise
 */
export function isMaxNegative ( data ) {
    return (data === -Number.MAX_VALUE)
}

/**
 * Check if the given data is a finite number
 *
 * @param data {any} The data to check against the finite state
 * @returns {boolean} true if data is finite, false otherwise
 */
export function isFinite ( data ) {
    return Number.isFinite( data )
}

/**
 * Check if the given data is an infinite number
 *
 * @param data {any} The data to check against the infinite state
 * @returns {boolean} true if data is infinite, false otherwise
 */
export function isInfinite ( data ) {
    return !Number.isFinite( data )
}

/**
 * Check if the given data is an infinite negative number
 *
 * @param data {any} The data to check against the negative infinite state
 * @returns {boolean} true if data is negative infinite, false otherwise
 */
export function isInfiniteNegative ( data ) {
    return (data === Number.NEGATIVE_INFINITY)
}

/**
 * Check if the given data is an infinite positive number
 *
 * @param data {any} The data to check against the positive infinite state
 * @returns {boolean} true if data is positive infinite, false otherwise
 */
export function isInfinitePositive ( data ) {
    return (data === Number.POSITIVE_INFINITY)
}
