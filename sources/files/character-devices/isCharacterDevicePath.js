/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module files/character-devices/isCharacterDevicePath
 * @description Export function to validate if a value is a character device path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example todo
 *
 */

import fs from 'fs'

/**
 * Check if given path is a character device path
 *
 * @param path {string|Buffer|URL} The data to check against the character device path type
 * @returns {boolean} true if path is a character device path, false otherwise
 */
export function isCharacterDevicePath ( path ) {
    return fs.statSync( path ).isCharacterDevice()
}

/**
 * Check if given path is not a character device path
 *
 * @param path {string|Buffer|URL} The data to check against the character device path type
 * @returns {boolean} true if path is not a character device path, false otherwise
 */
export function isNotCharacterDevicePath ( path ) {
    return !isCharacterDevicePath( path )
}
