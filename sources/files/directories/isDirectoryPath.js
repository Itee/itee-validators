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

export function isDirectoryPath ( path ) {
    return fs.statSync( path ).isDirectory()
}

export function isNotDirectoryPath ( path ) {
    return !isDirectoryPath( path )
}
