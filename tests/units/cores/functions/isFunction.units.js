/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/functions
 * @desc Export the units tests about isFunction method.
 * @requires {@link module:sources/cores/functions}
 *
 */

/* global describe, expect, it */

import { isFunction } from '../../../../sources/cores/functions/isFunction'

function isFunctionUnits () {

    describe( 'isFunction()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isFunction( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const values = this._dataMap[ 'booleans' ]
            for( let key in values ) {
                expect( isFunction( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const values = this._dataMap[ 'numbers' ]
            for( let key in values ) {
                expect( isFunction( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const values = this._dataMap.strings
            for( let key in values ) {
                expect( isFunction( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is a function', () => {

            const values = this._dataMap.functions
            for( let key in values ) {
                expect( isFunction( values[ key ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is an array', () => {

            const values = this._dataMap.arrays
            for( let key in values ) {
                expect( isFunction( values[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const values = this._dataMap.objects
            for( let key in values ) {
                expect( isFunction( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isFunctionUnits }
