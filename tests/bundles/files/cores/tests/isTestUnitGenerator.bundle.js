'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function noParamNoReturn () {
    console.log( 'Hello' );
}
function noParamOneReturn () {
    return 42
}
function noParamTwoReturn () {
    return ( Math.random() >= 0.5 ) ? 'The response to life is' : 42
}
function oneParamNoReturn ( paramA = '' ) {
    console.log( paramA );
}
function oneParamOneReturn ( theParam = 0 ) {
    return ( 42 === theParam )
}
function twoParamNoReturn ( paramA = '', paramB = 123 ) {
    console.log( `${ paramA }:${ paramB }` );
}
function twoParamOneReturn ( paramA = '', paramB = 123 ) {
    return `${ paramA }:${ paramB }`
}
function twoParamTwoReturn ( paramA = 0, paramB = '' ) {
    if ( paramA === 0 ) {
        return paramB
    } else {
        return ( 42 + paramA )
    }
}
function anyParamOneReturn ( any ) {
    return any != null
}

exports.anyParamOneReturn = anyParamOneReturn;
exports.noParamNoReturn = noParamNoReturn;
exports.noParamOneReturn = noParamOneReturn;
exports.noParamTwoReturn = noParamTwoReturn;
exports.oneParamNoReturn = oneParamNoReturn;
exports.oneParamOneReturn = oneParamOneReturn;
exports.twoParamNoReturn = twoParamNoReturn;
exports.twoParamOneReturn = twoParamOneReturn;
exports.twoParamTwoReturn = twoParamTwoReturn;
