/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isBoolean method.
 * @requires {@link module:sources/cores/booleans}
 *
 */

/* global describe, expect, it */

import { isBoolean } from '../../../../sources/cores/booleans'

function isBooleanUnits () {

    describe( 'isBoolean()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isBoolean( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is a boolean', () => {

            const dataSet = this._dataSet[ 'booleans' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isBoolean( dataSet[ 0 ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is a number', () => {

            const dataSet = this._dataSet[ 'numbers' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isBoolean( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const dataSet = this._dataSet[ 'strings' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isBoolean( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const dataSet = this._dataSet[ 'functions' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isBoolean( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an array', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isBoolean( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const dataSet = this._dataSet[ 'objects' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isBoolean( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isBooleanUnits }
