/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isEmpty method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isEmpty }                from '../../../../sources/cores/voids/isEmpty'

function isEmptyUnits () {

    describe( 'isEmpty()', () => {

        // Specific dataset

        it( 'should return false when the value is null', () => {

            const value = this._dataMap.voids.null
            expect( isEmpty( value ) ).to.be.false

        } )

        it( 'should return false when the value is undefined', () => {

            const value = this._dataMap.voids.undefined
            expect( isEmpty( value ) ).to.be.false

        } )

        it( 'should return false when the value is void(0)', () => {

            const value = this._dataMap.voids.void
            expect( isEmpty( value ) ).to.be.false

        } )

        // Global dataset

        it( 'should return false when the value is a boolean', () => {

            const values = this._dataMap.booleans
            for( let key in values ) {
                expect( isEmpty( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const values = this._dataMap.numbers
            for( let key in values ) {
                expect( isEmpty( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return true only when the value is an empty string', () => {

            const values  = this._dataMap.strings
            const allowed = [ 'empty', 'stringNull', 'stringEmpty' ]
            for ( let key in values ) {

                if ( allowed.includes( key ) ) {
                    expect( isEmpty( values[ key ] ) ).to.be.true
                } else {
                    expect( isEmpty( values[ key ] ) ).to.be.false
                }
            }

        } )

        it( 'should return false when the value is a function', () => {

            const values = this._dataMap.functions
            for( let key in values ) {
                expect( isEmpty( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return true only when the value is an empty array', () => {

            const values  = this._dataMap.arrays
            const allowed = [ 'emptyArray', 'emptyArrayObject' ]
            for ( let key in values ) {

                if ( allowed.includes( key ) ) {
                    expect( isEmpty( values[ key ] ) ).to.be.true
                } else {
                    expect( isEmpty( values[ key ] ) ).to.be.false
                }
            }

        } )

        it( 'should return true only when the value is an empty object', () => {

            const values  = this._dataMap.objects
            const allowed = [ 'empty', 'instance' ]
            for ( let key in values ) {

                if ( allowed.includes( key ) ) {
                    expect( isEmpty( values[ key ] ) ).to.be.true
                } else {
                    expect( isEmpty( values[ key ] ) ).to.be.false
                }
            }

        } )

    } )

}

export { isEmptyUnits }
