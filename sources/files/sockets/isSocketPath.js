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

export function isSocketPath ( path ) {
    return fs.statSync( path ).isSocket()
}

export function isNotSocketPath ( path ) {
    return !isSocketPath( path )
}
