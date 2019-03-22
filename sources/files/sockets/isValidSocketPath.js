/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isValidPath }  from '../paths/isValidPath'
import { isSocketPath } from './isSocketPath'

export function isValidSocketPath ( path ) {
    return ( isValidPath( path ) && isSocketPath( path ) )
}

export function isInvalidSocketPath ( path ) {
    return !isValidSocketPath( path )
}
