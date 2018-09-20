/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfNull }  from '../../../../sources/cores/arrays/isNotArrayOfNull'

function isNotArrayOfNullUnits () {

    describe( 'isNotArrayOfNull()', () => {

        it( 'should return true when the value is a void', () => {

            const values = this._dataMap.voids
            for ( let key in values ) {
                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a boolean', () => {

            const values = this._dataMap[ 'booleans' ]
            for ( let key in values ) {
                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a number', () => {

            const values = this._dataMap[ 'numbers' ]
            for ( let key in values ) {
                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a string', () => {

            const values = this._dataMap.strings
            for ( let key in values ) {
                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a function', () => {

            const values = this._dataMap.functions
            for ( let key in values ) {
                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true
            }

        } )

        //////////////// Specific part

        it.skip( 'should return false only when the value is an array of null', () => {

            const values = this._dataMap.arrays
            for ( let key in values ) {

                const result = isNotArrayOfNull( values[ key ] )
                if ( key === 'null' ) {
                    expect( result ).to.be.false
                } else {
                    expect( result ).to.be.true
                }

            }

        } )

        /////////////////

        it( 'should return true when the value is an typed array', () => {

            const values = this._dataMap.typedArrays
            for ( let key in values ) {
                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is an object', () => {

            const values = this._dataMap.objects
            for ( let key in values ) {
                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true
            }

        } )

    } )

}

export { isNotArrayOfNullUnits }
