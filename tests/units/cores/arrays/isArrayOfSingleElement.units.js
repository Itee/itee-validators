/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfSingleElement method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfSingleElement } from '../../../../sources/cores/arrays/isArrayOfSingleElement'
import { isArrayOfObject }        from '../../../../sources/cores/arrays/isArrayOfObject'

function isArrayOfSingleElementUnits () {

    describe( 'isArrayOfSingleElement()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for ( let key in values ) {
                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const values = this._dataMap[ 'booleans' ]
            for ( let key in values ) {
                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const values = this._dataMap[ 'numbers' ]
            for ( let key in values ) {
                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const values = this._dataMap.strings
            for ( let key in values ) {
                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const values = this._dataMap.functions
            for ( let key in values ) {
                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
            }

        } )

        //////////////// Specific part

        it( 'should return true only when the value is a single valued array of number', () => {

            const values = this._dataMap.arrays
            for ( let key in values ) {

                if ( key === 'singleValued' ) {
                    expect( isArrayOfSingleElement( values[ key ] ) ).to.be.true
                } else {
                    expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
                }

            }

        } )

        /////////////////

        it( 'should return false when the value is an typed array', () => {

            const values = this._dataMap.typedArrays
            for ( let key in values ) {
                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const values = this._dataMap.objects
            for ( let key in values ) {
                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isArrayOfSingleElementUnits }
