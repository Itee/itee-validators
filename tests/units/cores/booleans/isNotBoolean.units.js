/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isBoolean method.
 * @requires {@link module:sources/cores/booleans}
 */

/* global describe, expect, it */

import { isNotBoolean } from '../../../../sources/cores/booleans/isNotBoolean'

function isNotBooleanUnits () {

    describe( 'isNotBoolean()', () => {

        it( 'should return true when the value is a void', () => {

            const dataSet = this._dataMap[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const dataSet = this._dataMap[ 'booleans' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBoolean( dataSet[ 0 ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is a number', () => {

            const dataSet = this._dataMap[ 'numbers' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a string', () => {

            const dataSet = this._dataMap[ 'strings' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a function', () => {

            const dataSet = this._dataMap[ 'functions' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is an array', () => {

            const dataSet = this._dataMap[ 'arrays' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is an object', () => {

            const dataSet = this._dataMap[ 'objects' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true
            }

        } )

    } )

}

export { isNotBooleanUnits }
