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

import { isArray }   from './arrays/_arrays'
import { isBoolean } from './booleans/_booleans'
import {
    isFunction,
    isNotFunction
}                    from './functions/_functions'
import {
    isFloat,
    isInteger,
    isNumber
}                    from './numbers/_numbers'
import {
    isNotObject,
    isObject
}                    from './objects/_objects'
import {
    isNotString,
    isString
}                    from './strings/_strings'
import { isSymbol }  from './symbols/_symbols'
import {
    isDefined,
    isNotDefined
}                    from './voids/_voids'

class Validator {

    constructor () {

        /**
         * The validators store, by default it contains validators for Boolean, Number, Integer, Float, Array, String, Object, Symbol and Function
         *
         * @type {object}
         */
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
        }

        /**
         * The list of errors occured during the check
         *
         * @type {Array.<string>}
         */
        this.errors = []

    }

    /**
     * Add a new validator schema to the validator instance
     *
     * @param type {string} - A string that represent the type of data to validate
     * @param validator {(function|object)} - A function or validation schema that represent the type of data to validate
     */
    add ( type, validator ) {

        if ( isNotString( type ) ) { throw new TypeError( `Validator: Expect type to be a string` ) }
        if ( isNotFunction( validator ) && isNotObject( validator ) ) { throw new TypeError( `Validator: Expect validator to be an object or a function` ) }
        if ( isDefined( this.validators[ type ] ) ) { throw new TypeError( `Validator: a validator is already defined for type '${type}'` ) }

        this.validators[ type ] = validator

    }

    /**
     * To remove a registered type
     *
     * @param type {string} - The type to remove
     */
    remove ( type ) {

        delete this.validators[ type ]

    }

    /**
     * Allow to known the available types store in current validator instance
     *
     * @return {Array.<string>} - The list of registered type
     */
    getAvalaibleTypes () {

        const availablesTypes = []

        for ( let key in this.validators ) {
            availablesTypes.push( key )
        }

        return availablesTypes

    }

    /**
     * Will perform a deep structural comparison between the given data and the validation schema of the given type
     *
     * @param data {*} - The data to validate
     * @param type {string} - The type of the validation schema to apply
     * @param breakOnError {boolean} - Return on first validation error ( true by default )
     * @return {boolean} - Return true is the data is validated, false otherwise
     */
    check ( data, type, breakOnError = true ) {

        const validator = this.validators[ type ]
        if ( isNotDefined( validator ) ) {
            throw new TypeError( `Validator: Unable to find schema validation of type '${type}'` )
        }

        let result = true
        if ( isFunction( validator ) ) {

            result = validator( data )

        } else if ( isObject( validator ) ) {

            let subResult = true
            for ( let key in validator ) {

                const subValidator = validator[ key ]
                if ( isNotDefined( subValidator ) ) {
                    throw new TypeError( `Validator: Missing validator for key '${key}' of type '${type}'` )
                }

                const value      = data[ key ]
                const isRequired = subValidator.required
                if ( isNotDefined( value ) ) {
                    if ( isRequired ) {
                        subResult = false
                    } else {
                        continue
                    }
                }

                // In case of overriden validation function check it first
                let validatorFunction = subValidator.fn
                if ( isDefined( validatorFunction ) ) {

                    if ( isNotFunction( validatorFunction ) ) {
                        throw new TypeError( `Validator: Invalid validation function for '${key}' with type '${type}'` )
                    }

                    subResult = validatorFunction( value )

                } else {

                    subResult = this.check( value, subValidator.type, breakOnError )

                }

                if ( subResult === false ) {

                    this.errors.push( `Validator: Invalid property '${key}' of type '${subValidator.type}' with value '${value}' in object of type '${type}'` )
                    result = false
                    if ( breakOnError ) {
                        break
                    }

                }

            }

        } else {

            throw new TypeError( `Validator: Unknown validator of type '${type}'` )

        }

        return result

    }

}

/**
 * The singleton instance
 *
 * @type {Validator}
 */
let validatorInstance = undefined
if ( isNotDefined( validatorInstance ) ) {
    validatorInstance = new Validator()
}

export { validatorInstance as Validator }
