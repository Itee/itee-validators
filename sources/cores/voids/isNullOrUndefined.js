/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import {
    isUndefined,
    isNotUndefined
} from './isUndefined'

export function isNullOrUndefined ( data ) {
    return (isNull( data ) || isUndefined( data ))
}

export function no ( data ) {
    return ( (data === null) || (typeof data === 'undefined') )
}

/**
 * Check if given data is not undefined
 * @param data
 * @returns {boolean|*} true if data is not undefined, false otherwise.
 */
export function isDefined ( data ) {
    return (isNotNull( data ) && isNotUndefined( data ))
}
