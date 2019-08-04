/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isEmpty
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

import { isEmptyArray }  from '../arrays/isEmptyArray'
import { isEmptyObject } from '../objects/isEmptyObject'
import { isEmptyString } from '../strings/isEmptyString'
import { isNotDefined }  from './isDefined'

/**
 * Check emptiness of given data
 *
 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
 *
 * @param data {*} The data to check against the emptiness
 * @returns {boolean} true if data is considered as empty, false otherwise.
 */
export function isEmpty ( data ) {

    if ( isNotDefined( data ) ) { return false }
    if ( isEmptyString( data ) ) { return true}
    if ( isEmptyArray( data ) ) { return true }
    if ( isEmptyObject( data ) ) { return true }

    return false

}

/**
 * Check fullness of given data
 *
 * @param data {*} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
export function isNotEmpty ( data ) {
    return !isEmpty( data )
}
