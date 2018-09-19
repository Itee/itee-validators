/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNullOrUndefined method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNullOrUndefined } from '../../../../sources/cores/voids/isNullOrUndefined'

function isNullOrUndefinedUnits () {

    describe( 'isNullOrUndefined()', () => {

        // Specific dataset

        it( 'should return true when the value is null', () => {

            const _dataSet = this._dataSet[ 'voids' ]
            expect( isNullOrUndefined( _dataSet[ 0 ] ) ).to.be.true

        } )

        it( 'should return false when the value is undefined', () => {

            const _dataSet = this._dataSet[ 'voids' ]
            expect( isNullOrUndefined( _dataSet[ 1 ] ) ).to.be.false

        } )

        it( 'should return false when the value is void(0)', () => {

            const _dataSet = this._dataSet[ 'voids' ]
            expect( isNullOrUndefined( _dataSet[ 2 ] ) ).to.be.false

        } )

        // Global dataset

        it( 'should return false when the value is a boolean', () => {

            const _dataSet = this._dataSet[ 'booleans' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const _dataSet = this._dataSet[ 'numbers' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const _dataSet = this._dataSet[ 'strings' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const _dataSet = this._dataSet[ 'functions' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an array', () => {

            const _dataSet = this._dataSet[ 'arrays' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const _dataSet = this._dataSet[ 'objects' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isNullOrUndefinedUnits }
