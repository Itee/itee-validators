/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import fs from 'fs'

export function isSymbolicLinkPath ( path ) {
    return fs.statSync( path ).isSymbolicLink()
}

export function isNotSymbolicLinkPath ( path ) {
    return !isSymbolicLinkPath( path )
}
