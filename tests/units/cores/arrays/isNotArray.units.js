/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArray } from '../../../../sources/cores/arrays/isNotArray'

function isNotArrayUnits () {

    describe( 'isNotArray()', () => {

        it( 'should return true when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotArray( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a boolean', () => {

            const dataSet = this._dataSet[ 'booleans' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotArray( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a number', () => {

            const dataSet = this._dataSet[ 'numbers' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotArray( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a string', () => {

            const dataSet = this._dataSet[ 'strings' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotArray( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a function', () => {

            const dataSet = this._dataSet[ 'functions' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotArray( dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is an array', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotArray( dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is an object', () => {

            const dataSet = this._dataSet[ 'objects' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotArray( dataSet[ i ] ) ).to.be.true
            }

        } )

    } )

}

export { isNotArrayUnits }
