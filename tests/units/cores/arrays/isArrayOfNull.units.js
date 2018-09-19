/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfNull }  from '../../../../sources/cores/arrays/isArrayOfNull'
import { isArrayOfArray } from '../../../../sources/cores/arrays/isArrayOfArray'

function isArrayOfNullUnits () {

    describe( 'isArrayOfNull()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for ( let key in values ) {
                expect( isArrayOfNull( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const values = this._dataMap[ 'booleans' ]
            for ( let key in values ) {
                expect( isArrayOfNull( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const values = this._dataMap[ 'numbers' ]
            for ( let key in values ) {
                expect( isArrayOfNull( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const values = this._dataMap.strings
            for ( let key in values ) {
                expect( isArrayOfNull( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const values = this._dataMap.functions
            for ( let key in values ) {
                expect( isArrayOfNull( values[ key ] ) ).to.be.false
            }

        } )

        //////////////// Specific part

        it( 'should return true only when the value is an array of null', () => {

            const values = this._dataMap.arrays
            for ( let key in values ) {

                if ( key === 'null' ) {
                    expect( isArrayOfNull( values[ key ] ) ).to.be.true
                } else {
                    expect( isArrayOfNull( values[ key ] ) ).to.be.false
                }

            }

        } )

        /////////////////

        it( 'should return false when the value is an typed array', () => {

            const values = this._dataMap.typedArrays
            for ( let key in values ) {
                expect( isArrayOfNull( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const values = this._dataMap.objects
            for ( let key in values ) {
                expect( isArrayOfNull( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isArrayOfNullUnits }
