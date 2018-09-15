/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids
 * @description Export the validation methods about voids notions
 */

/**
 * Check if given data is null
 *
 * @param data {any} The data to check against the nullity
 * @returns {boolean} true if data is null, false otherwise.
 */
export function isNull ( data ) {
    return (data === null)
}

/**
 * Check if given data is not null
 *
 * @param data {any} The data to check against the nullity
 * @returns {boolean} true if data is not null, false otherwise.
 */
export function isNotNull ( data ) {
    return (data !== null)
}

/**
 * Check if given data is undefined
 *
 * @param data {any} The data to check against the undefiness
 * @returns {boolean} true if data is undefined, false otherwise.
 */
export function isUndefined ( data ) {
    return (typeof data === 'undefined')
}

/**
 * Check if given data is defined
 *
 * @param data {any} The data to check against the undefiness
 * @returns {boolean} true if data is defined, false otherwise.
 */
export function isNotUndefined ( data ) {
    return (typeof data !== 'undefined')
}

/**
 * Check if given data is null or undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
export function isNullOrUndefined ( data ) {
    return ((data === null) || (typeof data === 'undefined'))
}

/**
 * Check if given data is not null and not undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
export function isDefined ( data ) {
    return ((data !== null) && (typeof data !== 'undefined'))
}

/**
 * Check emptiness of given data
 *
 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as empty, false otherwise.
 */
export function isEmpty ( data ) {

    // null and undefined are consider as "empty"
    if ( data === null ) {
        return true
    }
    if ( data === undefined ) {
        return true
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if ( data.length > 0 ) {
        return false
    }
    if ( data.length === 0 ) {
        return true
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false
        }
    }

    return true
}

/**
 * Check fullness of given data
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
export function isNotEmpty ( data ) {
    return !isEmpty( data )
}
