/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 *
 * @param data
 * @return {boolean}
 */
export function isInfinite ( data ) {
    return !Number.isFinite( data )
}

/**
 *
 * @param data
 * @return {boolean}
 */
export function isInfiniteNegative ( data ) {
    return (data === Number.NEGATIVE_INFINITY)
}

/**
 *
 * @param data
 * @return {boolean}
 */
export function isInfinitePositive ( data ) {
    return (data === Number.POSITIVE_INFINITY)
}

