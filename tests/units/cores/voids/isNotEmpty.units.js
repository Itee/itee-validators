/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNotEmpty method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNotEmpty } from '../../../../sources/cores/voids/isNotEmpty'

function isNotEmptyUnits () {

    describe( 'isNotEmpty()', () => {

        // Specific dataset

        it( 'should return false when the value is null', () => {

            const value = this._dataMap.voids.null
            expect( isNotEmpty( value ) ).to.be.false

        } )

        it( 'should return true when the value is undefined', () => {

            const value = this._dataMap.voids.undefined
            expect( isNotEmpty( value ) ).to.be.true

        } )

        it( 'should return true when the value is void(0)', () => {

            const value = this._dataMap.voids.void
            expect( isNotEmpty( value ) ).to.be.true

        } )

        // Global dataset

        it( 'should return true when the value is a boolean', () => {

            const values = this._dataMap.booleans
            for( let key in values ) {
                expect( isNotEmpty( values[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a number', () => {

            const values = this._dataMap.numbers
            for( let key in values ) {
                expect( isNotEmpty( values[ key ] ) ).to.be.true
            }

        } )

        it.skip( 'should return false when the value is a string', () => {

            const values = this._dataMap.strings
            for( let key in values ) {
                expect( isNotEmpty( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is a function', () => {

            const values = this._dataMap.functions
            for( let key in values ) {
                expect( isNotEmpty( values[ key ] ) ).to.be.true
            }

        } )

        it.skip( 'should return false when the value is an array', () => {

            const values = this._dataMap.arrays
            for( let key in values ) {
                expect( isNotEmpty( values[ key ] ) ).to.be.false
            }

        } )

        it.skip( 'should return false when the value is an object', () => {

            const values = this._dataMap.objects
            for( let key in values ) {
                expect( isNotEmpty( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotEmptyUnits }
