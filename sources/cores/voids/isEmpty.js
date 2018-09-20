/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isEmptyArray }      from '../arrays/isEmptyArray'
import { isEmptyObject }     from '../objects/isEmptyObject'
import { isEmptyString }     from '../strings/isEmptyString'
import { isNullOrUndefined } from './isNullOrUndefined'


/**
 * Check emptiness of given data
 *
 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as empty, false otherwise.
 */
export function isEmpty ( data ) {

    if ( isNullOrUndefined( data ) ) { return false }
    if ( isEmptyString( data ) ) { return true}
    if ( isEmptyArray( data ) ) { return true }
    if ( isEmptyObject( data ) ) { return true }

    return false

}
