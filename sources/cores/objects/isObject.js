/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNullOrUndefined } from '../voids/isNullOrUndefined'
import { isArray }           from '../arrays/isArray'
import { isString }          from '../strings/isString'
import { isNumber }          from '../numbers/isNumber'

/**
 * Check if given data is an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
export function isObject ( data ) {

    if ( isNullOrUndefined( data ) ) { return false }
    if ( typeof data !== 'object' ) { return false }
    if ( isNumber( data ) ) { return false }
    if ( isString( data ) ) { return false }
    if ( isArray( data ) ) { return false }

    return true
}
