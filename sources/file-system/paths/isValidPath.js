/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/paths/isValidPath
 * @description Export function to validate if a value is a valid path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example todo
 *
 */

import fs from 'fs'

/**
 * Check if given data is a valid file path
 *
 * @param data {*} The data to check against the path type
 * @returns {boolean} true if data is a valid path, false otherwise
 */
export function isValidPath ( data ) {
    return fs.existsSync( data )
}

/**
 * Check if given data is not a valid file path
 *
 * @param data {*} The data to check against the path type
 * @returns {boolean} true if data is a valid path, false otherwise
 */
export function isInvalidPath ( data ) {
    return !isValidPath( data )
}
