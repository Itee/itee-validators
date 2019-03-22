/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isValidPath }     from '../paths/isValidPath'
import { isDirectoryPath } from './isDirectoryPath'

export function isValidDirectoryPath ( path ) {
    return ( isValidPath( path ) && isDirectoryPath( path ) )
}

export function isInvalidDirectoryPath ( path ) {
    return !isValidDirectoryPath( path )
}
