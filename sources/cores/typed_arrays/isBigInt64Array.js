/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isBigInt64Array ( data ) {
    return ( data instanceof BigInt64Array )
}

export function isNotBigInt64Array ( data ) {
    return !isBigInt64Array( data )
}
