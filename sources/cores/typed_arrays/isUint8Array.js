/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isUint8Array ( data ) {
    return ( data instanceof Uint8Array )
}

export function isNotUint8Array ( data ) {
    return !isUint8Array( data )
}
