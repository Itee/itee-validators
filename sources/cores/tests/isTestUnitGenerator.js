/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

/**
 * This is noParamNoReturn
 */
function noParamNoReturn() {
    // eslint-disable-next-line no-console
    console.log( 'Hello' )
}

/**
 *
 * @returns {number} The response to life
 */
function noParamOneReturn() {
    return 42
}

/**
 *
 * @returns {string|number}
 */
function noParamTwoReturn() {
    return ( Math.random() >= 0.5 ) ? 'The response to life is' : 42
}

/**
 *
 * @param {string} paramA
 */
function oneParamNoReturn( paramA = '' ) {
    // eslint-disable-next-line no-console
    console.log( paramA )
}

/**
 *
 * @param {number} theParam What add to the response of life
 * @returns {boolean} Your response to life is correct
 */
function oneParamOneReturn( theParam = 0 ) {
    return ( 42 === theParam )
}

/**
 *
 * @param {number} paramA
 * @returns {null|number}
 */
function oneParamTwoReturn( paramA = 0 ) {
    if ( paramA === 0 ) {
        return null
    } else {
        return ( 42 + paramA )
    }
}

/**
 *
 * @param {string} paramA
 * @param {number} paramB
 */
function twoParamNoReturn( paramA = '', paramB = 123 ) {
    // eslint-disable-next-line no-console
    console.log( `${ paramA }:${ paramB }` )
}

/**
 *
 * @param {string} paramA
 * @param {number} paramB
 * @returns {string}
 */
function twoParamOneReturn( paramA = '', paramB = 123 ) {
    return `${ paramA }:${ paramB }`
}

/**
 *
 * @param {number} paramA
 * @param {string} paramB
 * @returns {string|number}
 */
function twoParamTwoReturn( paramA = 0, paramB = '' ) {
    if ( paramA === 0 ) {
        return paramB
    } else {
        return ( 42 + paramA )
    }
}

/**
 *
 * @param {*} any
 * @returns {boolean}
 */
function anyParamOneReturn( any ) {
    return any != null
}

export {
    noParamNoReturn,
    noParamOneReturn,
    noParamTwoReturn,

    oneParamNoReturn,
    oneParamOneReturn,
    oneParamTwoReturn,

    twoParamNoReturn,
    twoParamOneReturn,
    twoParamTwoReturn,

    anyParamOneReturn
}
