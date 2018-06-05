/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isNull
 * @desc Export the validation methods about nullity
 *
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
    return !isNull( data )
}
