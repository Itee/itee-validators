/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/**
 *
 * @param data {*}
 * @returns {boolean}
 */
export function isEventTarget ( data ) {
    return ( data instanceof EventTarget )
}

/**
 *
 * @param data {*}
 * @returns {boolean}
 */
export function isNotEventTarget ( data ) {
    return !isEventTarget( data )
}
