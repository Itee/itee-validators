/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */


/**
 * Check if given data is a number
 * @param data
 * @returns {boolean|*} true if data is a number, false otherwise.
 */
export function isNumber ( data ) {
    return (typeof data === 'number' && !Number.isNaN( data ) )
}

export function isNumber_1 ( data ) {
    return (Number( data ) === data)
}

export function isNotNumber ( data ) {
    return (typeof data !== 'number' || Number.isNaN( data ) )
}

/**
 * Check if given data is not a number
 * @param data
 * @returns {boolean|*} true if data is not a number, false otherwise.
 */
export function isNaN ( data ) {
    return Number.isNaN( data )
}

///

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
export function isNumberNegative ( data ) {
    return (isNumber( data ) && data < 0)
}

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
export function isNumberPositive ( data ) {
    return (isNumber( data ) && data > 0)
}
