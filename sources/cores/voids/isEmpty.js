/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isEmpty
 * @desc Export the validation methods about emptiness
 *
 */

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
        return true;
    }
    if ( data === undefined ) {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if ( data.length > 0 ) {
        return false;
    }
    if ( data.length === 0 ) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false;
        }
    }

    return true;
}

/**
 * Check fullness of given data
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
export function isNotEmpty ( data ) {
    return !isEmpty( data );
}
