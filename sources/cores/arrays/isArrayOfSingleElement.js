/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isArray } from './isArray'

export function isArrayOfSingleElement ( data ) {
    return ( isArray( data ) && data.length === 1 )
}

export function isArrayOfMultiElement ( data ) {
    return ( isArray( data ) && data.length > 1 )
}
