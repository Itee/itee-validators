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

/**
 * Just an override of 'fs.existsSync' with more explicit name
 *
 * @param filePath the path to check
 */
export function isValidPath ( path ) {
    return fs.existsSync( path )
}

export function isInvalidPath ( path ) {
    return !isValidPath( path )
}
