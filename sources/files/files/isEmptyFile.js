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
 * Check the file size against a limit ( 0 as default ).
 * @param filePath
 * @param threshold
 * @return {boolean} - True if below the limit or zero, false otherwise
 * @private
 */
export function isEmptyFile ( filePath, threshold = 0 ) {
    return ( fs.statSync( filePath ).size <= threshold )
}

export function isNotEmptyFile ( filePath, threshold = 0 ) {
    return !isEmptyFile( filePath, threshold )
}
