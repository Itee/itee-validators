"use strict";var t=require("node:fs");
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
 */function r(t){return Array.isArray(t)}function n(t){return!Array.isArray(t)}
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
 */function e(t){return!n(t)&&0===t.length}
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
 */
function i(t){return"boolean"==typeof t}function o(t){return"boolean"!=typeof t}
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
 */
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
 */
function u(t){return"function"==typeof t}function s(t){return"function"!=typeof t}
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
 */function f(t){return null!==t}
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
 */
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
 */
function a(t){return null!=t}function c(t){return null==t}
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
 */function p(t){return t===Number.NEGATIVE_INFINITY}function l(t){return t===Number.POSITIVE_INFINITY}function x(t){return p(t)||l(t)}function y(t){return 0===t&&1/t===Number.POSITIVE_INFINITY}
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
 */
function N(t){return!c(t)&&t.constructor===Number}function h(t){return!N(t)}function A(t){return Number.isInteger(t)}function d(t){return!h(t)&&(!Number.isNaN(t)&&(!x(t)&&t%1!=0))}
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
 */
function I(t){return!c(t)&&t.constructor===Object}function E(t){return!I(t)}
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
 */
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
 */
function g(t){return"string"==typeof t||t instanceof String}function m(t){return!g(t)}
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
 */function v(t){return void 0!==t}
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
 */
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
 */
function b(t){if(E(t))return!1;if(0===t.length)return!0;for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r))return!1;return!0}
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
 */
function S(t){return!m(t)&&0===t.length}
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
 */
function F(t){return!m(t)&&(!S(t)&&!/\S/.test(t))}
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
 */
function O(t){return"symbol"==typeof t}
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
 */
function P(t){return!c(t)&&(!!S(t)||(!!e(t)||!!b(t)))}
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
 */
class U{constructor(){this.validators={Boolean:i,Number:N,Integer:A,Float:d,Array:r,String:g,Object:I,Symbol:O,Function:u},this.errors=[]}add(t,r){if(m(t))throw new TypeError("Validator: Expect type to be a string");if(s(r)&&E(r))throw new TypeError("Validator: Expect validator to be an object or a function");if(a(this.validators[t]))throw new TypeError(`Validator: a validator is already defined for type '${t}'`);this.validators[t]=r}remove(t){delete this.validators[t]}getAvalaibleTypes(){const t=[];for(let r in this.validators)t.push(r);return t}check(t,r,n=!0){const e=this.validators[r];if(c(e))throw new TypeError(`Validator: Unable to find schema validation of type '${r}'`);let i=!0;if(u(e))i=e(t);else{if(!I(e))throw new TypeError(`Validator: Unknown validator of type '${r}'`);{let o=!0;for(let u in e){const f=e[u];if(c(f))throw new TypeError(`Validator: Missing validator for key '${u}' of type '${r}'`);const p=t[u],l=f.required;if(c(p)){if(!l)continue;o=!1}let x=f.fn;if(a(x)){if(s(x))throw new TypeError(`Validator: Invalid validation function for '${u}' with type '${r}'`);o=x(p)}else o=this.check(p,f.type,n);if(!1===o&&(this.errors.push(`Validator: Invalid property '${u}' of type '${f.type}' with value '${p}' in object of type '${r}'`),i=!1,n))break}}}return i}}
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
function B(t){return t instanceof ArrayBuffer}
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
 */
function V(t){return t instanceof BigInt64Array}
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
 */
function w(t){return t instanceof BigUint64Array}
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
 */
function T(t){return t instanceof Float32Array}
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
 */
function k(t){return t instanceof Float64Array}
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
 */
function L(t){return t instanceof Int16Array}
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
 */
function D(t){return t instanceof Int32Array}
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
 */
function _(t){return t instanceof Int8Array}
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
 */
function M(t){return t instanceof Uint16Array}
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
 */
function R(t){return t instanceof Uint32Array}
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
 */
function j(t){return t instanceof Uint8Array}
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
 */
function C(t){return t instanceof Uint8ClampedArray}exports.Validator=void 0,c(exports.Validator)&&(exports.Validator=new U);
/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/constants
 * @desc Export constants about temperatures
 *
 */
const $=4.5e-10,Z=-273.14999999955,G=-459.67;
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
function Y(t){return N(t)&&t>=Z}function K(t){return!Y(t)}
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
 */function X(t){return N(t)&&t>=G}function q(t){return!X(t)}
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
 */function H(t){return N(t)&&t>=$}function z(t){return!H(t)}
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
 */
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
 */
function J(r){if(m(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const n=t.statSync(r,{throwIfNoEntry:!1});return a(n)&&n.isBlockDevice()}
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
 */
function Q(r){return t.existsSync(r)}
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
 */
function W(t){return Q(t)&&J(t)}
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
 */
function tt(r){if(m(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const n=t.statSync(r,{throwIfNoEntry:!1});return a(n)&&n.isCharacterDevice()}
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
 */
function rt(t){return Q(t)&&tt(t)}
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
 */
function nt(r){if(m(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const n=t.statSync(r,{throwIfNoEntry:!1});return a(n)&&n.isDirectory()}
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
 */
function et(r){return nt(r)&&0===t.readdirSync(r).length}
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
 */
function it(t){return Q(t)&&nt(t)}
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
 */
function ot(r){if(m(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const n=t.statSync(r,{throwIfNoEntry:!1});return a(n)&&n.isFIFO()}
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
 */
function ut(t){return Q(t)&&ot(t)}
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
 */
function st(r){if(m(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const n=t.statSync(r,{throwIfNoEntry:!1});return a(n)&&n.isFile()}
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
 */
function ft(r,n=0){return(!m(r)||r instanceof Buffer||r instanceof URL)&&(st(r)&&t.statSync(r).size<=n)}
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
 */
function at(t){return Q(t)&&st(t)}
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
 */
function ct(r){if(m(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const n=t.statSync(r,{throwIfNoEntry:!1});return a(n)&&n.isSocket()}
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
 */
function pt(t){return Q(t)&&ct(t)}
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
 */
function lt(r){if(m(r)&&!(r instanceof Buffer)&&!(r instanceof URL))return!1;const n=t.statSync(r,{throwIfNoEntry:!1});return a(n)&&n.isSymbolicLink()}
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
 */
function xt(t){return Q(t)&&lt(t)}exports.ABSOLUTE_ZERO_CELSIUS=Z,exports.ABSOLUTE_ZERO_FAHRENHEIT=G,exports.ABSOLUTE_ZERO_KELVIN=$,exports.isArray=r,exports.isArrayBuffer=B,exports.isArrayOfArray=
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
 */
function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,e=t.length;r<e;r++)if(n(t[r]))return!1;return!0},exports.isArrayOfBoolean=function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,n=t.length;r<n;r++)if(o(t[r]))return!1;return!0},exports.isArrayOfFunction=function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,n=t.length;r<n;r++)if(s(t[r]))return!1;return!0},exports.isArrayOfMultiElement=
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
 */
function(t){return!n(t)&&t.length>1}
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
 */,exports.isArrayOfNull=function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,n=t.length;r<n;r++)if(f(t[r]))return!1;return!0},exports.isArrayOfNumber=
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
 */
function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,n=t.length;r<n;r++)if(h(t[r]))return!1;return!0},exports.isArrayOfObject=function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,n=t.length;r<n;r++)if(E(t[r]))return!1;return!0},exports.isArrayOfSingleElement=
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
 */
function(t){return!n(t)&&1===t.length},exports.isArrayOfString=function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,n=t.length;r<n;r++)if(m(t[r]))return!1;return!0},exports.isArrayOfUndefined=function(t){if(n(t))return!1;if(e(t))return!1;for(let r=0,n=t.length;r<n;r++)if(v(t[r]))return!1;return!0},exports.isBigInt64Array=V,exports.isBigUint64Array=w,exports.isBlankString=F,exports.isBlockDevicePath=J,exports.isBoolean=i,exports.isCelsius=Y,exports.isCharacterDevicePath=tt,exports.isDefined=a,exports.isDirectoryPath=nt,exports.isEmpty=P,exports.isEmptyArray=e,exports.isEmptyDirectory=et,exports.isEmptyFile=ft,exports.isEmptyObject=b,exports.isEmptyString=S,exports.isFIFOPath=ot,exports.isFahrenheit=X,exports.isFalse=function(t){return i(t)&&!1===t}
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
 */,exports.isFilePath=st,exports.isFinite=function(t){return Number.isFinite(t)}
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
 */,exports.isFloat=d,exports.isFloat32Array=T,exports.isFloat64Array=k,exports.isFunction=u,exports.isInfinite=x,exports.isInfiniteNegative=p,exports.isInfinitePositive=l,exports.isInt16Array=L,exports.isInt32Array=D,exports.isInt8Array=_,exports.isInteger=A,exports.isInvalidBlockDevicePath=function(t){return!W(t)},exports.isInvalidCharacterDevicePath=function(t){return!rt(t)},exports.isInvalidDirectoryPath=function(t){return!it(t)},exports.isInvalidFIFOPath=function(t){return!ut(t)},exports.isInvalidFilePath=function(t){return!at(t)},exports.isInvalidPath=function(t){return!Q(t)},exports.isInvalidSocketPath=function(t){return!pt(t)},exports.isInvalidSymbolicLinkPath=function(t){return!xt(t)},exports.isKelvin=H,exports.isMaxNegative=function(t){return t===-Number.MAX_VALUE}
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
 */,exports.isMaxPositive=function(t){return t===Number.MAX_VALUE},exports.isMaxSafeInteger=
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
 */
function(t){return t===Number.MAX_SAFE_INTEGER},exports.isMinNegative=function(t){return t===-Number.MIN_VALUE},exports.isMinPositive=function(t){return t===Number.MIN_VALUE},exports.isMinSafeInteger=function(t){return t===Number.MIN_SAFE_INTEGER},exports.isNaN=function(t){return Number.isNaN(t)},exports.isNotArray=n,exports.isNotArrayBuffer=function(t){return!B(t)},exports.isNotArrayOfArray=function(t){if(n(t))return!0;if(e(t))return!0;for(let n=0,e=t.length;n<e;n++)if(r(t[n]))return!1;return!0},exports.isNotArrayOfBoolean=function(t){if(n(t))return!0;if(e(t))return!0;for(let r=0,n=t.length;r<n;r++)if(o(t[r]))return!0;return!1},exports.isNotArrayOfFunction=function(t){if(n(t))return!0;if(e(t))return!0;for(let r=0,n=t.length;r<n;r++)if(s(t[r]))return!0;return!1},exports.isNotArrayOfNull=function(t){if(n(t))return!0;if(e(t))return!0;for(let r=0,n=t.length;r<n;r++)if(f(t[r]))return!0;return!1},exports.isNotArrayOfNumber=function(t){if(n(t))return!0;if(e(t))return!0;for(let r=0,n=t.length;r<n;r++)if(h(t[r]))return!0;return!1},exports.isNotArrayOfObject=function(t){if(n(t))return!0;if(e(t))return!0;for(let r=0,n=t.length;r<n;r++)if(E(t[r]))return!0;return!1},exports.isNotArrayOfString=function(t){if(n(t))return!0;if(e(t))return!0;for(let r=0,n=t.length;r<n;r++)if(m(t[r]))return!0;return!1}
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
 */,exports.isNotArrayOfUndefined=function(t){if(n(t))return!0;if(e(t))return!0;for(let r=0,n=t.length;r<n;r++)if(v(t[r]))return!0;return!1}
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
 */,exports.isNotBigInt64Array=function(t){return!V(t)},exports.isNotBigUint64Array=function(t){return!w(t)},exports.isNotBlankString=function(t){return!F(t)},exports.isNotBlockDevicePath=function(t){return!J(t)},exports.isNotBoolean=o,exports.isNotCelsius=K,exports.isNotCharacterDevicePath=function(t){return!tt(t)},exports.isNotDefined=c,exports.isNotDirectoryPath=function(t){return!nt(t)},exports.isNotEmpty=function(t){return!P(t)},exports.isNotEmptyArray=function(t){return!!n(t)||t.length>0},exports.isNotEmptyDirectory=function(t){return!et(t)},exports.isNotEmptyFile=function(t,r=0){return!ft(t,r)},exports.isNotEmptyObject=function(t){return!b(t)},exports.isNotEmptyString=function(t){return!S(t)},exports.isNotFIFOPath=function(t){return!ot(t)},exports.isNotFahrenheit=q,exports.isNotFilePath=function(t){return!st(t)},exports.isNotFloat32Array=function(t){return!T(t)},exports.isNotFloat64Array=function(t){return!k(t)},exports.isNotFunction=s,exports.isNotInt16Array=function(t){return!L(t)},exports.isNotInt32Array=function(t){return!D(t)},exports.isNotInt8Array=function(t){return!_(t)},exports.isNotKelvin=z,exports.isNotNull=f,exports.isNotNumber=h,exports.isNotObject=E,exports.isNotSocketPath=function(t){return!ct(t)},exports.isNotString=m,exports.isNotSymbol=function(t){return"symbol"!=typeof t},exports.isNotSymbolicLinkPath=function(t){return!lt(t)},exports.isNotTemperature=function(t){return z(t)&&K(t)&&q(t)},exports.isNotUint16Array=function(t){return!M(t)},exports.isNotUint32Array=function(t){return!R(t)},exports.isNotUint8Array=function(t){return!j(t)},exports.isNotUint8ClampedArray=function(t){return!C(t)},exports.isNotUndefined=v,exports.isNull=function(t){return null===t},exports.isNumber=N,exports.isNumberNegative=function(t){return N(t)&&t<0},exports.isNumberPositive=function(t){return!h(t)&&(t>0||y(t)||l(t))},exports.isObject=I,exports.isSocketPath=ct,exports.isString=g,exports.isSymbol=O,exports.isSymbolicLinkPath=lt,exports.isTemperature=function(t){return H(t)||Y(t)||X(t)},exports.isTrue=function(t){return i(t)&&!0===t},exports.isUint16Array=M,exports.isUint32Array=R,exports.isUint8Array=j,exports.isUint8ClampedArray=C,exports.isUndefined=function(t){return void 0===t},exports.isValidBlockDevicePath=W,exports.isValidCharacterDevicePath=rt,exports.isValidDirectoryPath=it,exports.isValidFIFOPath=ut,exports.isValidFilePath=at,exports.isValidPath=Q,exports.isValidSocketPath=pt,exports.isValidSymbolicLinkPath=xt,exports.isZero=function(t){return 0===t},exports.isZeroNegative=function(t){return 0===t&&1/t===Number.NEGATIVE_INFINITY},exports.isZeroPositive=y;
