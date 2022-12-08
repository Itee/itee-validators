'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isArray ( data ) {
    return Array.isArray( data )
}

function isBoolean ( data ) {
    return ( typeof data === 'boolean' )
}

function isFunction ( data ) {
    return ( typeof data === 'function' )
}
function isNotFunction ( data ) {
    return ( typeof data !== 'function' )
}

function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}
function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

function isInfinite ( data ) {
    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }
    return !Number.isFinite( data )
}

function isNumber ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Number )
}
function isNotNumber ( data ) {
    return !( isNumber( data ) )
}
function isInteger ( data ) {
    return Number.isInteger( data )
}
function isFloat ( data ) {
    if ( isNotNumber( data ) ) { return false }
    if ( Number.isNaN( data ) ) { return false }
    if ( isInfinite( data ) ) { return false}
    return data % 1 !== 0
}

function isObject ( data ) {
    if ( isNotDefined( data ) ) { return false }
    return ( data.constructor === Object )
}
function isNotObject ( data ) {
    return !isObject( data )
}

function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}
function isNotString ( data ) {
    return !isString( data )
}

function isSymbol ( data ) {
    return ( typeof data === 'symbol' )
}

class Validator {
    constructor () {
        this.validators = {
            Boolean:  isBoolean,
            Number:   isNumber,
            Integer:  isInteger,
            Float:    isFloat,
            Array:    isArray,
            String:   isString,
            Object:   isObject,
            Symbol:   isSymbol,
            Function: isFunction
        };
        this.errors = [];
    }
    add ( type, validator ) {
        if ( isNotString( type ) ) { throw new TypeError( `Validator: Expect type to be a string` ) }
        if ( isNotFunction( validator ) && isNotObject( validator ) ) { throw new TypeError( `Validator: Expect validator to be an object or a function` ) }
        if ( isDefined( this.validators[ type ] ) ) { throw new TypeError( `Validator: a validator is already defined for type '${ type }'` ) }
        this.validators[ type ] = validator;
    }
    remove ( type ) {
        delete this.validators[ type ];
    }
    getAvalaibleTypes () {
        const availablesTypes = [];
        for ( let key in this.validators ) {
            availablesTypes.push( key );
        }
        return availablesTypes
    }
    check ( data, type, breakOnError = true ) {
        const validator = this.validators[ type ];
        if ( isNotDefined( validator ) ) {
            throw new TypeError( `Validator: Unable to find schema validation of type '${ type }'` )
        }
        let result = true;
        if ( isFunction( validator ) ) {
            result = validator( data );
        } else if ( isObject( validator ) ) {
            let subResult = true;
            for ( let key in validator ) {
                const subValidator = validator[ key ];
                if ( isNotDefined( subValidator ) ) {
                    throw new TypeError( `Validator: Missing validator for key '${ key }' of type '${ type }'` )
                }
                const value      = data[ key ];
                const isRequired = subValidator.required;
                if ( isNotDefined( value ) ) {
                    if ( isRequired ) {
                        subResult = false;
                    } else {
                        continue
                    }
                }
                let validatorFunction = subValidator.fn;
                if ( isDefined( validatorFunction ) ) {
                    if ( isNotFunction( validatorFunction ) ) {
                        throw new TypeError( `Validator: Invalid validation function for '${ key }' with type '${ type }'` )
                    }
                    subResult = validatorFunction( value );
                } else {
                    subResult = this.check( value, subValidator.type, breakOnError );
                }
                if ( subResult === false ) {
                    this.errors.push( `Validator: Invalid property '${ key }' of type '${ subValidator.type }' with value '${ value }' in object of type '${ type }'` );
                    result = false;
                    if ( breakOnError ) {
                        break
                    }
                }
            }
        } else {
            throw new TypeError( `Validator: Unknown validator of type '${ type }'` )
        }
        return result
    }
}
exports.Validator = undefined;
if ( isNotDefined( exports.Validator ) ) {
    exports.Validator = new Validator();
}
