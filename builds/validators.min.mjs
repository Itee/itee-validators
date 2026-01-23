import{statSync as n,existsSync as r,readdirSync as t}from"node:fs";
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArray
 * @desc Export functions to validate if a value is an array or not
 * @example {@lang javascript}
 *
 * import { isArray } from 'itee-validators'
 *
 * if( isArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function e(n){return Array.isArray(n)}function u(n){return!Array.isArray(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isEmptyArray
 * @desc Export function to validate if a value is an array of null length or not
 * @example
 *
 * import { isEmptyArray } from 'itee-validators'
 *
 * if( isEmptyArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function i(n){return!u(n)&&0===n.length}function o(n){return!!u(n)||n.length>0}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfArray
 * @desc Export function to validate if a value is an array of array or not
 * @example
 *
 * import { isArrayOfArray } from 'itee-validators'
 *
 * if( isArrayOfArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function f(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(u(n[r]))return!1;return!0}function c(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(e(n[r]))return!1;return!0}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/booleans/isBoolean
 * @desc Export function to validate if a value is a boolean or not
 * @example
 *
 * import { isBoolean } from 'itee-validators'
 *
 * if( isBoolean( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function a(n){return"boolean"==typeof n}function l(n){return"boolean"!=typeof n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfBoolean
 * @desc Export function to validate if a value is an array of booleans or not
 * @example
 *
 * import { isArrayOfBoolean } from 'itee-validators'
 *
 * if( isArrayOfBoolean( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function s(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(l(n[r]))return!1;return!0}function y(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(l(n[r]))return!0;return!1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/functions/isFunction
 * @desc Export function to validate if a value is a function or not
 * @example
 *
 * import { isFunction } from 'itee-validators'
 *
 * if( isFunction( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function h(n){return"function"==typeof n}function N(n){return"function"!=typeof n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfBoolean
 * @desc Export function to validate if a value is an array of functions or not
 * @example
 *
 * import { isArrayOfFunction } from 'itee-validators'
 *
 * if( isArrayOfFunction( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function I(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(N(n[r]))return!1;return!0}function p(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(N(n[r]))return!0;return!1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfMultiElement
 * @desc Export function to validate if a value is an array with more than one value
 * @example
 *
 * import { isArrayOfMultiElement } from 'itee-validators'
 *
 * if( isArrayOfMultiElement( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function d(n){return!u(n)&&n.length>1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isNull
 * @desc Export function to validate if a value is null or not
 * @example
 *
 * import { isNull } from 'itee-validators'
 *
 * if( isNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function g(n){return null===n}function b(n){return null!==n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfNull
 * @desc Export function to validate if a value is an array of null values or not
 * @example
 *
 * import { isArrayOfNull } from 'itee-validators'
 *
 * if( isArrayOfNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * } *
 */function E(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(b(n[r]))return!1;return!0}function A(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(b(n[r]))return!0;return!1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isDefined
 * @desc Export function to validate if a value is a defined or not
 * @example
 *
 * import { isDefined } from 'itee-validators'
 *
 * if( isDefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function w(n){return null!=n}function m(n){return null==n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isInfinite
 * @desc Export function to validate if a value is a finite or infinite number
 * @example
 *
 * import { isInfinite } from 'itee-validators'
 *
 * if( isInfinite( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function v(n){return n===Number.NEGATIVE_INFINITY}function U(n){return n===Number.POSITIVE_INFINITY}function T(n){return v(n)||U(n)}function V(n){return Number.isFinite(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isZero
 * @desc Export function to validate if a value is zero, with a special sign
 * @example
 *
 * import { isZero } from 'itee-validators'
 *
 * if( isZero( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function F(n){return 0===n}function B(n){return 0===n&&1/n===Number.POSITIVE_INFINITY}function L(n){return 0===n&&1/n===Number.NEGATIVE_INFINITY}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isNumber
 * @desc Export function to validate if a value is a number, or with special sign
 * @example
 *
 * import { isNumber } from 'itee-validators'
 *
 * if( isNumber( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function _(n){return!m(n)&&n.constructor===Number}function $(n){return!S(n)&&(n>0||B(n)||U(n))}function R(n){return _(n)&&n<0}function S(n){return!_(n)}function k(n){return Number.isInteger(n)}function M(n){return!S(n)&&(!Number.isNaN(n)&&(!T(n)&&n%1!=0))}function O(n){return Number.isNaN(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfBoolean
 * @desc Export function to validate if a value is an array of numbers or not
 * @example
 *
 * import { isArrayOfNumber } from 'itee-validators'
 *
 * if( isArrayOfNumber( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function j(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(S(n[r]))return!1;return!0}function G(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(S(n[r]))return!0;return!1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects/isObject
 * @desc Export function to validate if a value is an object
 * @example
 *
 * import { isObject } from 'itee-validators'
 *
 * if( isObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Y(n){return!m(n)&&n.constructor===Object}function x(n){return!Y(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfObject
 * @desc Export function to validate if a value is an array of objects or not
 * @example
 *
 * import { isArrayOfObject } from 'itee-validators'
 *
 * if( isArrayOfObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function D(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(x(n[r]))return!1;return!0}function P(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(x(n[r]))return!0;return!1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfSingleElement
 * @desc Export function to validate if a value is an array of single value or not
 * @example
 *
 * import { isArrayOfSingleElement } from 'itee-validators'
 *
 * if( isArrayOfSingleElement( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function X(n){return!u(n)&&1===n.length}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isString
 * @desc Export function to validate if a value is a string
 * @example
 *
 * import { isString } from 'itee-validators'
 *
 * if( isString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function C(n){return"string"==typeof n||n instanceof String}function q(n){return!C(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfString
 * @desc Export function to validate if a value is an array of string or not
 * @example
 *
 * import { isArrayOfString } from 'itee-validators'
 *
 * if( isArrayOfString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function z(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(q(n[r]))return!1;return!0}function H(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(q(n[r]))return!0;return!1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isUndefined
 * @desc Export function to validate if a value is a void
 * @example
 *
 * import { isNull } from 'itee-validators'
 *
 * if( isNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function J(n){return void 0===n}function K(n){return void 0!==n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfUndefined
 * @desc Export function to validate if a value is an array of undefined values or not
 * @example
 *
 * import { isArrayOfUndefined } from 'itee-validators'
 *
 * if( isArrayOfUndefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Q(n){if(u(n))return!1;if(i(n))return!1;for(let r=0,t=n.length;r<t;r++)if(K(n[r]))return!1;return!0}function W(n){if(u(n))return!0;if(i(n))return!0;for(let r=0,t=n.length;r<t;r++)if(K(n[r]))return!0;return!1}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/booleans/isTrue
 * @desc Export function to validate if a value is a boolean set to true or false
 * @example
 *
 * import { isTrue } from 'itee-validators'
 *
 * if( isTrue( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Z(n){return a(n)&&!0===n}function nn(n){return a(n)&&!1===n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isMax
 * @desc Export function to validate if a value is a maximum javascript number
 * @example
 *
 * import { isMaxPositive } from 'itee-validators'
 *
 * if( isMaxPositive( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function rn(n){return n===Number.MAX_VALUE}function tn(n){return n===-Number.MAX_VALUE}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isMin
 * @desc Export function to validate if a value is a minimum javascript number
 * @example
 *
 * import { isMaxPositive } from 'itee-validators'
 *
 * if( isMaxPositive( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function en(n){return n===Number.MIN_VALUE}function un(n){return n===-Number.MIN_VALUE}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isSafeInteger
 * @desc Export function to validate if a value is a safe integer number
 * @example
 *
 * import { isMaxSafeInteger } from 'itee-validators'
 *
 * if( isMaxSafeInteger( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function on(n){return n===Number.MAX_SAFE_INTEGER}function fn(n){return n===Number.MIN_SAFE_INTEGER}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects/isEmptyObject
 * @desc Export function to validate if a value is an empty object
 * @example
 *
 * import { isEmptyObject } from 'itee-validators'
 *
 * if( isEmptyObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function cn(n){if(x(n))return!1;if(0===n.length)return!0;for(let r in n)if(Object.prototype.hasOwnProperty.call(n,r))return!1;return!0}function an(n){return!cn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isEmptyString
 * @desc Export function to validate if a value is a empty string
 * @example
 *
 * import { isEmptyString } from 'itee-validators'
 *
 * if( isEmptyString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function ln(n){return!q(n)&&0===n.length}function sn(n){return!ln(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isBlankString
 * @desc Export function to validate if a value is a blank string
 * @example
 *
 * import { isBlankString } from 'itee-validators'
 *
 * if( isBlankString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function yn(n){return!q(n)&&(!ln(n)&&!/\S/.test(n))}function hn(n){return!yn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/symbols/isSymbol
 * @desc Export function to validate if a value is a symbol
 * @example
 *
 * import { isSymbol } from 'itee-validators'
 *
 * if( isSymbol( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Nn(n){return"symbol"==typeof n}function In(n){return"symbol"!=typeof n}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isEmpty
 * @desc Export function to validate if a value could be considered as empty
 * @example
 *
 * import { isEmpty } from 'itee-validators'
 *
 * if( isEmpty( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function pn(n){return!m(n)&&(!!ln(n)||(!!i(n)||!!cn(n)))}function dn(n){return!pn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/cores
 * @description Export the Validator singleton instance that allow to validate complex data structure
 * @example
 *
 const validator = Itee.Validators.Validator

 // Using unique function for One registered type
 // Usefull when a simple data structure is used multiple times
 validator.add( 'ColorType', color => {

 const r = color.r
 if ( color.r === undefined || Itee.Validators.isNotNumber( r ) ) {
 return false
 }

 const g = color.g
 if ( color.g === undefined || Itee.Validators.isNotNumber( g ) ) {
 return false
 }

 const b = color.b
 if ( color.b === undefined || Itee.Validators.isNotNumber( b ) ) {
 return false
 }

 return true
 } )

 // Using schema composition
 // Usefull for design validation schema faster and based on previous declared validation types
 validator.add( 'Range_0_255', ( value ) => {

 if ( Itee.Validators.isNotNumber( value ) ) {
 return false
 }

 return !(value <= 0 || value > 255)

 } )

 validator.add( 'ColorSchema', {
 r: {
 required: true,
 type:     'Range_0_255'
 },
 g: {
 required: true,
 type:     'Range_0_255'
 },
 b: {
 required: true,
 type:     'Range_0_255'
 }
 } )

 validator.add( 'ColorStructure', {
 color_from_type: {
 type: 'ColorType'
 },
 col_from_schema: {
 type: 'ColorSchema'
 },
 col_from_fn:     {
 // Inner function
 // Usefull for specific validation requirement that cannot match other previous validation schema or type
 fn: function ColorValidator ( color ) {

 const r = color.r
 if ( color.r === undefined || Itee.Validators.isNotNumber( r ) ) {
 return false
 }

 const g = color.g
 if ( color.g === undefined || Itee.Validators.isNotNumber( g ) ) {
 return false
 }

 const b = color.b
 if ( color.b === undefined || Itee.Validators.isNotNumber( b ) ) {
 return false
 }

 return true
 }
 }
 } )

 // The data to validate
 const colorStruct = {
 color_from_type: {
 r: 0,
 g: 1,
 b: 2
 },
 col_from_schema: {
 r: 10,
 g: 20,
 b: 30
 },
 col_from_fn:     {
 r: 0,
 g: 127,
 b: 255
 }
 }

 // Execute

 try {

 if ( validator.check( colorStruct, 'ColorStructure' ) ) {
 alert( 'ColorStructure is valid !' )
 } else {
 alert( validator.errors )
 }

 } catch ( err ) {
 alert( err )
 }
 *
 */class gn{constructor(){this.validators={Boolean:a,Number:_,Integer:k,Float:M,Array:e,String:C,Object:Y,Symbol:Nn,Function:h},this.errors=[]}add(n,r){if(q(n))throw new TypeError("Validator: Expect type to be a string");if(N(r)&&x(r))throw new TypeError("Validator: Expect validator to be an object or a function");if(w(this.validators[n]))throw new TypeError(`Validator: a validator is already defined for type '${n}'`);this.validators[n]=r}remove(n){delete this.validators[n]}getAvalaibleTypes(){const n=[];for(let r in this.validators)n.push(r);return n}check(n,r,t=!0){const e=this.validators[r];if(m(e))throw new TypeError(`Validator: Unable to find schema validation of type '${r}'`);let u=!0;if(h(e))u=e(n);else{if(!Y(e))throw new TypeError(`Validator: Unknown validator of type '${r}'`);{let i=!0;for(let o in e){const f=e[o];if(m(f))throw new TypeError(`Validator: Missing validator for key '${o}' of type '${r}'`);const c=n[o],a=f.required;if(m(c)){if(!a)continue;i=!1}let l=f.fn;if(w(l)){if(N(l))throw new TypeError(`Validator: Invalid validation function for '${o}' with type '${r}'`);i=l(c)}else i=this.check(c,f.type,t);if(!1===i&&(this.errors.push(`Validator: Invalid property '${o}' of type '${f.type}' with value '${c}' in object of type '${r}'`),u=!1,t))break}}}return u}}let bn;
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isArrayBuffer
 * @desc Export function to validate if a value is a array buffer
 * @example
 *
 * import { isArrayBuffer } from 'itee-validators'
 *
 * if( isArrayBuffer( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
function En(n){return n instanceof ArrayBuffer}function An(n){return!En(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isBigInt64Array
 * @desc Export function to validate if a value is a big int 64 array buffer
 * @example
 *
 * import { isBigInt64Array } from 'itee-validators'
 *
 * if( isBigInt64Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function wn(n){return n instanceof BigInt64Array}function mn(n){return!wn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isBigUint64Array
 * @desc Export function to validate if a value is a big unsigned int 64 array buffer
 * @example
 *
 * import { isBigUint64Array } from 'itee-validators'
 *
 * if( isBigUint64Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function vn(n){return n instanceof BigUint64Array}function Un(n){return!vn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isFloat32Array
 * @desc Export function to validate if a value is a float 32 array buffer
 * @example
 *
 * import { isFloat32Array } from 'itee-validators'
 *
 * if( isFloat32Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Tn(n){return n instanceof Float32Array}function Vn(n){return!Tn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isFloat64Array
 * @desc Export function to validate if a value is a float 64 array buffer
 * @example
 *
 * import { isFloat64Array } from 'itee-validators'
 *
 * if( isFloat64Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Fn(n){return n instanceof Float64Array}function Bn(n){return!Fn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isInt16Array
 * @desc Export function to validate if a value is a int 16 array buffer
 * @example
 *
 * import { isInt16Array } from 'itee-validators'
 *
 * if( isInt16Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Ln(n){return n instanceof Int16Array}function _n(n){return!Ln(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isInt32Array
 * @desc Export function to validate if a value is a int 32 array buffer
 * @example
 *
 * import { isInt32Array } from 'itee-validators'
 *
 * if( isInt32Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function $n(n){return n instanceof Int32Array}function Rn(n){return!$n(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isInt8Array
 * @desc Export function to validate if a value is a int 8 array buffer
 * @example
 *
 * import { isInt8Array } from 'itee-validators'
 *
 * if( isInt8Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Sn(n){return n instanceof Int8Array}function kn(n){return!Sn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isUint16Array
 * @desc Export function to validate if a value is a unsigned int 16 array buffer
 * @example
 *
 * import { isUint16Array } from 'itee-validators'
 *
 * if( isUint16Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Mn(n){return n instanceof Uint16Array}function On(n){return!Mn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isUint32Array
 * @desc Export function to validate if a value is a unsigned int 32 array buffer
 * @example
 *
 * import { isUint32Array } from 'itee-validators'
 *
 * if( isUint32Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function jn(n){return n instanceof Uint32Array}function Gn(n){return!jn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isUint8Array
 * @desc Export function to validate if a value is a unsigned int 8 array buffer
 * @example
 *
 * import { isUint8Array } from 'itee-validators'
 *
 * if( isUint8Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Yn(n){return n instanceof Uint8Array}function xn(n){return!Yn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isUint8ClampedArray
 * @desc Export function to validate if a value is a unsigned clamped int 8 array buffer
 * @example
 *
 * import { isUint8ClampedArray } from 'itee-validators'
 *
 * if( isUint8ClampedArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Dn(n){return n instanceof Uint8ClampedArray}function Pn(n){return!Dn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/constants
 * @desc Export constants about temperatures
 *
 */m(bn)&&(bn=new gn);const Xn=4.5e-10,Cn=-273.14999999955,qn=-459.67;
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a Celsius temperature
 * @example
 *
 * import { isCelsius } from 'itee-validators'
 *
 * if( isCelsius( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */
function zn(n){return _(n)&&n>=Cn}function Hn(n){return!zn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a Fahrenheit temperature
 * @example
 *
 * import { isFahrenheit } from 'itee-validators'
 *
 * if( isFahrenheit( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Jn(n){return _(n)&&n>=qn}function Kn(n){return!Jn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a kelvin temperature
 * @example
 *
 * import { isKelvin } from 'itee-validators'
 *
 * if( isKelvin( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Qn(n){return _(n)&&n>=Xn}function Wn(n){return!Qn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatures
 * @desc Export function to validate if a value is a temperature
 * @example
 *
 * import { isTemperature } from 'itee-validators'
 *
 * if( isTemperature( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Zn(n){return Qn(n)||zn(n)||Jn(n)}function nr(n){return Wn(n)&&Hn(n)&&Kn(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/block-devices/isBlockDevicePath
 * @description Export function to validate if a value is a block device path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isBlockDevicePath } from 'itee-validators'
 *
 * if( isBlockDevicePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function rr(r){if(q(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const t=n(r,{throwIfNoEntry:!1});return w(t)&&t.isBlockDevice()}function tr(n){return!rr(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/paths/isValidPath
 * @description Export function to validate if a value is a valid path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isValidPath } from 'itee-validators'
 *
 * if( isValidPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function er(n){return r(n)}function ur(n){return!er(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/block-devices/isValidBlockDevicePath
 * @description Export function to validate if a value is a valid block device path.
 * @example
 *
 * import { isValidBlockDevicePath } from 'itee-validators'
 *
 * if( isValidBlockDevicePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function ir(n){return er(n)&&rr(n)}function or(n){return!ir(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/character-devices/isCharacterDevicePath
 * @description Export function to validate if a value is a character device path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isCharacterDevicePath } from 'itee-validators'
 *
 * if( isCharacterDevicePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function fr(r){if(q(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const t=n(r,{throwIfNoEntry:!1});return w(t)&&t.isCharacterDevice()}function cr(n){return!fr(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/character-devices/isValidCharacterDevicePath
 * @description Export function to validate if a value is a valid character device path
 * @example
 *
 * import { isValidCharacterDevicePath } from 'itee-validators'
 *
 * if( isValidCharacterDevicePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function ar(n){return er(n)&&fr(n)}function lr(n){return!ar(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/directories/isDirectoryPath
 * @description Export function to validate if a value is a directories path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isDirectoryPath } from 'itee-validators'
 *
 * if( isDirectoryPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function sr(r){if(q(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const t=n(r,{throwIfNoEntry:!1});return w(t)&&t.isDirectory()}function yr(n){return!sr(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/directories/isEmptyDirectory
 * @description Export function to validate if a value is a empty directories
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isEmptyDirectory } from 'itee-validators'
 *
 * if( isEmptyDirectory( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function hr(n){return sr(n)&&0===t(n).length}function Nr(n){return!hr(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/directories/isValidDirectoryPath
 * @description Export function to validate if a value is a valid directory path
 * @example
 *
 * import { isValidDirectoryPath } from 'itee-validators'
 *
 * if( isValidDirectoryPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Ir(n){return er(n)&&sr(n)}function pr(n){return!Ir(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/fifo-pipes/isFIFOPath
 * @description Export function to validate if a value is a fifo pipes path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isFIFOPath } from 'itee-validators'
 *
 * if( isFIFOPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function dr(r){if(q(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const t=n(r,{throwIfNoEntry:!1});return w(t)&&t.isFIFO()}function gr(n){return!dr(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/fifo-pipes/isValidFIFOPath
 * @description Export function to validate if a value is a valid fifo pipes path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isValidFIFOPath } from 'itee-validators'
 *
 * if( isValidFIFOPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function br(n){return er(n)&&dr(n)}function Er(n){return!br(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files/isFilePath
 * @description Export function to validate if a value is a file path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isFilePath } from 'itee-validators'
 *
 * if( isFilePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Ar(r){if(q(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const t=n(r,{throwIfNoEntry:!1});return w(t)&&t.isFile()}function wr(n){return!Ar(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files/isEmptyFile
 * @description Export function to validate if a value is an empty file
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isEmptyFile } from 'itee-validators'
 *
 * if( isEmptyFile( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function mr(r,t=0){return(!q(r)||r instanceof Buffer||r instanceof URL)&&(Ar(r)&&n(r).size<=t)}function vr(n,r=0){return!mr(n,r)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files/isValidFilePath
 * @description Export function to validate if a value is a valid file path
 * @example
 *
 * import { isValidFilePath } from 'itee-validators'
 *
 * if( isValidFilePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Ur(n){return er(n)&&Ar(n)}function Tr(n){return!Ur(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/sockets/isSocketPath
 * @description Export function to validate if a value is a socket path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isSocketPath } from 'itee-validators'
 *
 * if( isSocketPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Vr(r){if(q(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const t=n(r,{throwIfNoEntry:!1});return w(t)&&t.isSocket()}function Fr(n){return!Vr(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/sockets/isValidSocketPath
 * @description Export function to validate if a value is a valid socket path
 * @example
 *
 * import { isValidSocketPath } from 'itee-validators'
 *
 * if( isValidSocketPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Br(n){return er(n)&&Vr(n)}function Lr(n){return!Br(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/symbolic-links/isSocketPath
 * @description Export function to validate if a value is a symbolic links path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isSymbolicLinkPath } from 'itee-validators'
 *
 * if( isSymbolicLinkPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function _r(r){if(q(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const t=n(r,{throwIfNoEntry:!1});return w(t)&&t.isSymbolicLink()}function $r(n){return!_r(n)}
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/symbolic-links/isSocketPath
 * @description Export function to validate if a value is a valid symbolic links path
 * @example
 *
 * import { isValidSymbolicLinkPath } from 'itee-validators'
 *
 * if( isValidSymbolicLinkPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */function Rr(n){return er(n)&&_r(n)}function Sr(n){return!Rr(n)}export{Cn as ABSOLUTE_ZERO_CELSIUS,qn as ABSOLUTE_ZERO_FAHRENHEIT,Xn as ABSOLUTE_ZERO_KELVIN,bn as Validator,e as isArray,En as isArrayBuffer,f as isArrayOfArray,s as isArrayOfBoolean,I as isArrayOfFunction,d as isArrayOfMultiElement,E as isArrayOfNull,j as isArrayOfNumber,D as isArrayOfObject,X as isArrayOfSingleElement,z as isArrayOfString,Q as isArrayOfUndefined,wn as isBigInt64Array,vn as isBigUint64Array,yn as isBlankString,rr as isBlockDevicePath,a as isBoolean,zn as isCelsius,fr as isCharacterDevicePath,w as isDefined,sr as isDirectoryPath,pn as isEmpty,i as isEmptyArray,hr as isEmptyDirectory,mr as isEmptyFile,cn as isEmptyObject,ln as isEmptyString,dr as isFIFOPath,Jn as isFahrenheit,nn as isFalse,Ar as isFilePath,V as isFinite,M as isFloat,Tn as isFloat32Array,Fn as isFloat64Array,h as isFunction,T as isInfinite,v as isInfiniteNegative,U as isInfinitePositive,Ln as isInt16Array,$n as isInt32Array,Sn as isInt8Array,k as isInteger,or as isInvalidBlockDevicePath,lr as isInvalidCharacterDevicePath,pr as isInvalidDirectoryPath,Er as isInvalidFIFOPath,Tr as isInvalidFilePath,ur as isInvalidPath,Lr as isInvalidSocketPath,Sr as isInvalidSymbolicLinkPath,Qn as isKelvin,tn as isMaxNegative,rn as isMaxPositive,on as isMaxSafeInteger,un as isMinNegative,en as isMinPositive,fn as isMinSafeInteger,O as isNaN,u as isNotArray,An as isNotArrayBuffer,c as isNotArrayOfArray,y as isNotArrayOfBoolean,p as isNotArrayOfFunction,A as isNotArrayOfNull,G as isNotArrayOfNumber,P as isNotArrayOfObject,H as isNotArrayOfString,W as isNotArrayOfUndefined,mn as isNotBigInt64Array,Un as isNotBigUint64Array,hn as isNotBlankString,tr as isNotBlockDevicePath,l as isNotBoolean,Hn as isNotCelsius,cr as isNotCharacterDevicePath,m as isNotDefined,yr as isNotDirectoryPath,dn as isNotEmpty,o as isNotEmptyArray,Nr as isNotEmptyDirectory,vr as isNotEmptyFile,an as isNotEmptyObject,sn as isNotEmptyString,gr as isNotFIFOPath,Kn as isNotFahrenheit,wr as isNotFilePath,Vn as isNotFloat32Array,Bn as isNotFloat64Array,N as isNotFunction,_n as isNotInt16Array,Rn as isNotInt32Array,kn as isNotInt8Array,Wn as isNotKelvin,b as isNotNull,S as isNotNumber,x as isNotObject,Fr as isNotSocketPath,q as isNotString,In as isNotSymbol,$r as isNotSymbolicLinkPath,nr as isNotTemperature,On as isNotUint16Array,Gn as isNotUint32Array,xn as isNotUint8Array,Pn as isNotUint8ClampedArray,K as isNotUndefined,g as isNull,_ as isNumber,R as isNumberNegative,$ as isNumberPositive,Y as isObject,Vr as isSocketPath,C as isString,Nn as isSymbol,_r as isSymbolicLinkPath,Zn as isTemperature,Z as isTrue,Mn as isUint16Array,jn as isUint32Array,Yn as isUint8Array,Dn as isUint8ClampedArray,J as isUndefined,ir as isValidBlockDevicePath,ar as isValidCharacterDevicePath,Ir as isValidDirectoryPath,br as isValidFIFOPath,Ur as isValidFilePath,er as isValidPath,Br as isValidSocketPath,Rr as isValidSymbolicLinkPath,F as isZero,L as isZeroNegative,B as isZeroPositive};
