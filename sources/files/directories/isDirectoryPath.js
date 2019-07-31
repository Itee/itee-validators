/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module files/directories/isDirectoryPath
 * @description Export function to validate if a value is a directories path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example todo
 *
 */

import fs from 'fs'

/**
 * Check if given path is a directory path
 *
 * @param path {string|Buffer|URL} The data to check against the directory path type
 * @returns {boolean} true if path is a directory path, false otherwise
 */
export function isDirectoryPath ( path ) {
    return fs.statSync( path ).isDirectory()
}

/**
 * Check if given path is a not directory path
 *
 * @param path {string|Buffer|URL} The data to check against the directory path type
 * @returns {boolean} true if path is a not directory path, false otherwise
 */
export function isNotDirectoryPath ( path ) {
    return !isDirectoryPath( path )
}
