/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isString
 * @desc Export function to validate if a value is a string
 * @example todo
 *
 */

/**
 * Check if given data is a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is a string, false otherwise.
 */
export function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}

// #if IS_REMOVE_ON_BUILD
export function isString_0 ( val ) {
    return ( typeof val === 'string' )
}

export function isString_1 ( val ) {
    return ( typeof val === 'string' || ( ( !!val && typeof val === 'object' ) && Object.prototype.toString.call( val ) === '[object String]' ) )
}

export function isString_2 ( val ) {
    return ( Object.prototype.toString.call( val ) === '[object String]' )
}

export function isString_3 ( val ) {
    return ( val !== null && val !== undefined && val.constructor === String )
}

export function isString_4 ( val ) {
    return ( val === val + '' )
}

// #endif

//////

/**
 * Check if given data is not a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is not a string, false otherwise.
 */
export function isNotString ( data ) {
    return !isString( data )
}
