/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isArrayBuffer ( data ) {
    return ( data instanceof ArrayBuffer )
}

export function isNotArrayBuffer ( data ) {
    return !isArrayBuffer( data )
}
