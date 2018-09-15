/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings
 * @description Export the validation methods about strings
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

/**
 * Check if given data is not a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is not a string, false otherwise.
 */
export function isNotString ( data ) {
    return (typeof data !== 'string')
}

/**
 * Check if given data is an empty string
 *
 * @param data {any} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
export function isEmptyString ( data ) {

    console.assert( isString( data ), 'Expect a string !' )

    return (data.length === 0)

}

/**
 * Check if given data is not an empty string
 *
 * @param data {any} The data to check against the emptiness of the string
 * @returns {boolean} true if data is not an empty string, false otherwise.
 */
export function isNotEmptyString ( data ) {

    if ( isNotString( data ) ) {
        throw new TypeError( 'Expect a string !' )
    }

    return (data.length > 0)

}

/**
 * Check if the given data is a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is a blank string, false otherwise.
 */
export function isBlankString ( data ) {

    if ( isEmptyString( data ) ) {
        throw new TypeError( 'Expect a non empty string !' )
    }

    return (!/\S/.test( data ))
}

/**
 * Check if the given data is not a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
export function isNotBlankString ( data ) {
    return (isNotEmptyString( data ) && /\S/.test( data ))
}
