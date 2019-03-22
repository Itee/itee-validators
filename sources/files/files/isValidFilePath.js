/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isValidPath } from '../paths/isValidPath'
import { isFilePath }  from './isFilePath'

export function isValidFilePath ( path ) {
    return ( isValidPath( path ) && isFilePath( path ) )
}

export function isInvalidFilePath ( path ) {
    return !isValidFilePath( path )
}
