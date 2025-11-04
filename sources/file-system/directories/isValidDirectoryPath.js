/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/directories/isValidDirectoryPath
 * @description Export function to validate if a value is a valid directory path
 * @example
 *
 * import { isValidDirectoryPath } from 'itee-validators'
 *
 * if( isValidDirectoryPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isValidPath }     from '../paths/isValidPath.js'
import { isDirectoryPath } from './isDirectoryPath.js'

/**
 * Check if given data is a valid directory path
 *
 * @param data {*} The data to check against the directory path type
 * @returns {boolean} true if data is a valid directory path, false otherwise
 */
export function isValidDirectoryPath( data ) {
    return ( isValidPath( data ) && isDirectoryPath( data ) )
}

/**
 * Check if given data is an invalid directory path
 *
 * @param data {*} The data to check against the directory path type
 * @returns {boolean} true if data is an invalid directory path, false otherwise
 */
export function isInvalidDirectoryPath( data ) {
    return !isValidDirectoryPath( data )
}
