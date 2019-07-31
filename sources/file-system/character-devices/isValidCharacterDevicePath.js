/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/character-devices/isValidCharacterDevicePath
 * @description Export function to validate if a value is a valid character device path
 * @example todo
 *
 */

import { isValidPath }           from '../paths/isValidPath'
import { isCharacterDevicePath } from './isCharacterDevicePath'

/**
 * Check if given data is a valid character device path
 *
 * @param data {*} The data to check against the character device path type
 * @returns {boolean} true if data is a valid character device path, false otherwise
 */
export function isValidCharacterDevicePath ( data ) {
    return ( isValidPath( data ) && isCharacterDevicePath( data ) )
}

/**
 * Check if given data is an invalid character device path
 *
 * @param data {*} The data to check against the character device path type
 * @returns {boolean} true if data is an invalid character device path, false otherwise
 */
export function isInvalidCharacterDevicePath ( data ) {
    return !isValidCharacterDevicePath( data )
}
