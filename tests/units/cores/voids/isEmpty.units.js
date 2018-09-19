/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isEmpty method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isEmpty } from '../../../../sources/cores/voids/isEmpty'

function isEmptyUnits () {

    describe( 'isEmpty()', () => {

        // Specific dataset

        it( 'should return true when the value is null', () => {

            const _dataSet = this._dataMap[ 'voids' ]
            expect( isEmpty( _dataSet[ 0 ] ) ).to.be.true

        } )

        it( 'should return false when the value is undefined', () => {

            const _dataSet = this._dataMap[ 'voids' ]
            expect( isEmpty( _dataSet[ 1 ] ) ).to.be.false

        } )

        it( 'should return false when the value is void(0)', () => {

            const _dataSet = this._dataMap[ 'voids' ]
            expect( isEmpty( _dataSet[ 2 ] ) ).to.be.false

        } )

        // Global dataset

        it( 'should return false when the value is a boolean', () => {

            const _dataSet = this._dataMap[ 'booleans' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const _dataSet = this._dataMap[ 'numbers' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const _dataSet = this._dataMap[ 'strings' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const _dataSet = this._dataMap[ 'functions' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an array', () => {

            const _dataSet = this._dataMap[ 'arrays' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const _dataSet = this._dataMap[ 'objects' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isEmptyUnits }
