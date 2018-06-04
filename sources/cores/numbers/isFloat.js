/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isFloat ( data ) {
    return data % 1 !== 0
}

function isFloat_1 ( n ) {
    return n === +n && n !== (n | 0)
}

function isFloat_2 ( x ) {
    return !!(x % 1)
}
