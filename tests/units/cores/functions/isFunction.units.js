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

            const dataSet = this._dataMap[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isFunction( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is a boolean', () => {

            const dataSet = this._dataMap[ 'booleans' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isFunction( dataSet[ 0 ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is a number', () => {

            const dataSet = this._dataMap[ 'numbers' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isFunction( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const dataSet = this._dataMap[ 'strings' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isFunction( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const dataSet = this._dataMap[ 'functions' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isFunction( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an array', () => {

            const dataSet = this._dataMap[ 'arrays' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isFunction( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const dataSet = this._dataMap[ 'objects' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isFunction( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isFunctionUnits }
