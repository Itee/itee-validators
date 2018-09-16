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
 * Check if given data is a string
 *
 * @param data {any} The data to check against the string type
 * @returns {boolean} true if data is a string, false otherwise.
 */
export function isString ( data ) {
    return (typeof data === 'string' || data instanceof String)
}

// #if IS_REMOVE
export function isString_0 ( val ) {
    return (typeof val === 'string')
}

export function isString_1 ( val ) {
    return (typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call( val ) === '[object String]'))
}

export function isString_2 ( val ) {
    return (Object.prototype.toString.call( val ) === '[object String]')
}

export function isString_3 ( val ) {
    return (val !== null && val !== undefined && val.constructor === String)
}

export function isString_4 ( val ) {
    return (val === val + '')
}
// #endif
