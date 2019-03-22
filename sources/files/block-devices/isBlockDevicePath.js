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

export function isBlockDevicePath ( path ) {
    return fs.statSync( path ).isBlockDevice()
}

export function isNotBlockDevicePath ( path ) {
    return !isBlockDevicePath( path )
}
