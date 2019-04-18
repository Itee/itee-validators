/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isUint8ClampedArray ( data ) {
    return ( data instanceof Uint8ClampedArray )
}

export function isNotUint8ClampedArray ( data ) {
    return !isUint8ClampedArray( data )
}
