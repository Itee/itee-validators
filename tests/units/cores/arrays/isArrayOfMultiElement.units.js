/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfMultiElement method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfMultiElement } from '../../../../sources/cores/arrays/isArrayOfMultiElement'


function isArrayOfMultiElementUnits () {

    describe( 'isArrayOfMultiElement()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for ( let key in values ) {
                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const values = this._dataMap[ 'booleans' ]
            for ( let key in values ) {
                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const values = this._dataMap[ 'numbers' ]
            for ( let key in values ) {
                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const values = this._dataMap.strings
            for ( let key in values ) {
                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const values = this._dataMap.functions
            for ( let key in values ) {
                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false
            }

        } )

        //////////////// Specific part

        it( 'should return true only when the value is a multi valued array of number', () => {

            const values = this._dataMap.arrays
            for ( let key in values ) {

                const value = values[ key ]
                if ( value.length > 1 ) {
                    expect( isArrayOfMultiElement( value ) ).to.be.true
                } else {
                    expect( isArrayOfMultiElement( value ) ).to.be.false
                }

            }

        } )

        /////////////////

        it( 'should return false when the value is an typed array', () => {

            const values = this._dataMap.typedArrays
            for ( let key in values ) {
                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const values = this._dataMap.objects
            for ( let key in values ) {
                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isArrayOfMultiElementUnits }
