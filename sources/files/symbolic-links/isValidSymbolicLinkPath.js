/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isValidPath }        from '../paths/isValidPath'
import { isSymbolicLinkPath } from './isSymbolicLinkPath'

export function isValidSymbolicLinkPath ( path ) {
    return ( isValidPath( path ) && isSymbolicLinkPath( path ) )
}

export function isInvalidSymbolicLinkPath ( path ) {
    return !isValidSymbolicLinkPath( path )
}
