/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isFloat32Array ( data ) {
    return ( data instanceof Float32Array )
}

export function isNotFloat32Array ( data ) {
    return !isFloat32Array( data )
}
