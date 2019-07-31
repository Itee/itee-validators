/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/block-devices/isValidBlockDevicePath
 * @description Export function to validate if a value is a valid block device path.
 * @example todo
 *
 */

import { isValidPath }       from '../paths/isValidPath'
import { isBlockDevicePath } from './isBlockDevicePath'

/**
 * Check if given data is a valid block device path
 *
 * @param data {*} The data to check against the block device path type
 * @returns {boolean} true if data is a valid block device path, false otherwise
 */
export function isValidBlockDevicePath ( data ) {
    return ( isValidPath( data ) && isBlockDevicePath( data ) )
}

/**
 * Check if given data is an invalid block device path
 *
 * @param data {*} The data to check against the block device path type
 * @returns {boolean} true if data is an invalid block device path, false otherwise
 */
export function isInvalidBlockDevicePath ( data ) {
    return !isValidBlockDevicePath( data )
}
