/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

import { isArray } from './isArray'

export function isArrayOfSingleElement ( data ) {
    return ( isArray( data ) && data.length === 1 )
}

export function isArrayOfMultiElement ( data ) {
    return ( isArray( data ) && data.length > 1 )
}
